import Work from "@/models/Work";
import { connectToDB } from "@/mongodb/database";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const { query } = params;

    let works = [];
    if (query === "all") {
      works = await Work.find().populate("creator");
    } else {
      works = await Work.find({
        $or: [
          {
            category: { $regex: query, $options: "i" },
          },
          {
            title: { $regex: query, $options: "i" },
          },
        ],
      });
    }

    if (!works) {
      return NextResponse.json({ message: "No Works Found" }, { status: 400 });
    }
    return NextResponse.json(works, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error Occured" }, { status: 500 });
  }
};
