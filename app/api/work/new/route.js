import Work from "@/models/Work";
import { connectToDB } from "@/mongodb/database";
import { NextResponse } from "next/server";
export async function POST(req) {
  const { creator, category, title, description, price, images } =
    await req.json();

  try {
    await connectToDB();
    const product = await Work.create({
      creator,
      category,
      title,
      description,
      price,
      images,
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create work" },
      { status: 500 }
    );
  }
}
export async function GET(req) {
  try {
    await connectToDB();
    const product = await Work.find().populate("creator");

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get work" },
      { status: 500 }
    );
  }
}
