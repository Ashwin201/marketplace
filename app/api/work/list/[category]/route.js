import Work from "@/models/Work";
import { connectToDB } from "@/mongodb/database";
import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  try {
    const { category } = params;
    // console.log(category);
    await connectToDB();
    let workList = await Work.find().populate("creator");
    // console.log(workList);
    return NextResponse.json(workList, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Failed to fetch Work List" },
      { status: 500 }
    );
    return new Response();
  }
}
