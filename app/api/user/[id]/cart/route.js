import User from "@/models/User";
import { connectToDB } from "@/mongodb/database";
import { NextResponse } from "next/server";
export async function POST(req, { params }) {
  try {
    const id = params.id;

    const { cart } = await req.json();
    await connectToDB();

    const user = await User.findById(id);
    user.cart = cart;
    await user.save();
    // console.log(user);
    return NextResponse.json(
      { message: "Product added to cart" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Product not added to cart" },
      { status: 500 }
    );
  }
}
