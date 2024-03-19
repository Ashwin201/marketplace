import User from "@/models/User";
import Work from "@/models/Work";
import { connectToDB } from "@/mongodb/database";
import { NextResponse } from "next/server";
export const PUT = async (req, { params }) => {
  try {
    await connectToDB();
    const userId = params.id;
    const workId = params.workId;

    const user = await User.findById(userId);
    const work = await Work.findById(workId).populate("creator");

    const favoriteWork = user?.wishlist?.find(
      (item) => item?._id.toString() === workId
    );

    if (favoriteWork) {
      user.wishlist = (user?.wishlist || [])?.filter(
        (item) => item?._id.toString() !== workId
      );
      await user.save();
      return NextResponse.json({ wishlist: user.wishlist }, { status: 200 });
    } else {
      user.wishlist.push(work);
      await user.save();
      return NextResponse.json({ wishlist: user.wishlist }, { status: 200 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Failed to patch work to wishlist" },
      { status: 500 }
    );
  }
};
