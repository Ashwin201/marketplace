import Work from "@/models/Work";
import { connectToDB } from "@/mongodb/database";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    // console.log(id);
    await connectToDB();
    const product = await Work.findById(id).populate("creator");

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Get particular work" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    // console.log(id);
    await connectToDB();
    await Work.findByIdAndDelete({ _id: id });

    return NextResponse.json(
      { message: "Post Deleted Successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Post deleteion failed." },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const { creator, category, title, description, price, images } =
    await req.json();
  try {
    const post = await Work.findByIdAndUpdate(
      { _id: id },
      {
        creator,
        category,
        title,
        description,
        price,
        images,
      }
    );
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Could not Update post" },
      { status: 500 }
    );
  }
}
