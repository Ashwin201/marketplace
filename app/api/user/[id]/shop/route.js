import User from "@/models/User";
import Work from "@/models/Work";
import { connectToDB } from "@/mongodb/database";
import { NextResponse } from "next/server";
export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    // console.log(params.id);
    await connectToDB();
    const user = await User.findById({ _id: id });
    const workList = await Work.find({ creator: { _id: id } }).populate(
      "creator"
    );
    // console.log(workList);

    user.work = workList;
    user.save();

    return NextResponse.json(workList, { status: 200 });
  } catch (error) {
    console.log("Dashboard route ", error);
    return NextResponse.json(
      { message: "Failed to fetch data of User" },
      { status: 500 }
    );
  }
};
