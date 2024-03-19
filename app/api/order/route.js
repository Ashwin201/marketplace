import User from "@/models/User";
import { connectToDB } from "@/mongodb/database";
import { NextResponse } from "next/server";
const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

async function getCartItems(line_items) {
  return new Promise((resolve, reject) => {
    let cartItems = [];

    line_items?.data?.forEach(async (item) => {
      const product = await stripe.products.retrieve(item.price.product);
      const productId = product.metadata.productId;

      cartItems.push({
        productId: productId,
        title: product?.name,
        description: product?.description,
        price: item.price.unit_amount_decimal / 100,
        quantity: item.quantity,
        image: product.images[0],
      });

      if (cartItems.length === line_items?.data?.length) {
        resolve(cartItems);
      }
    });
  });
}
export const POST = async (req, res) => {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get(`stripe-signature`);
    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const line_items = await stripe.checkout.sessions.listLineItems(
        event.data.object.id
      );

      const orderItems = await getCartItems(line_items);
      const userId = session.client_reference_id;
      // console.log(userId);
      const amountPaid = session.amount_total / 100;

      const orderData = {
        id: session.payment_intent,
        userId,
        orderItems,
        amountPaid,
      };

      await connectToDB();

      const user = await User.findById(userId);
      user.cart = [];
      user.order.push(orderData);
      await user.save();
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
