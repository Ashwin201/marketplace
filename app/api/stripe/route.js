import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);

export async function POST(req, res) {
  try {
    const { cart, userId } = await req.json();

    const updatedItems = await cart?.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item?.title,
            description: item?.description,
            images: [`${item?.images[0]}`],
            metadata: {
              productId: item?.workId,
            },
          },
          unit_amount: item?.price * 100,
        },
        quantity: item?.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: updatedItems,
      client_reference_id: userId,
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["US", "IN", "NP", "JP"],
      },

      success_url: `${process.env.NEXTAUTH_URL}/orders?success=true&order_has_created_successfully!`,
      cancel_url: `${process.env.NEXTAUTH_URL}`,
    });

    // console.log("Stripe Session:", session);success?session_id={CHECKOUT_SESSION_ID}

    return NextResponse.json(session, { status: 200 });
  } catch (err) {
    console.log("Checkout error :", err);
    return NextResponse.json(
      { message: "Checkout unsuccessfully" },
      { status: 200 }
    );
  }
}
