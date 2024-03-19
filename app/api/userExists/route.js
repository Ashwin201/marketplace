import User from "@/models/User";
import { connectToDB } from "@/mongodb/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    await connectToDB();

    const user = await User.findOne({ email }).select("_id");

    return NextResponse.json({ user }, { status: 500 });
  } catch (error) {}
}
