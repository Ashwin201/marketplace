import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const removeImage = async (publicId) => {
  try {
    const res = await cloudinary.v2.uploader.destroy(publicId);
    console.log("image removed");
  } catch (error) {
    console.log("Error1:", error);
  }
};

export async function POST(req) {
  const { publicId } = await req.json();
  // console.log(req);
  try {
    await removeImage(publicId);
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    console.log("Error2:", error);
  }
}
