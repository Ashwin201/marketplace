"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
const WishListButton = ({ work, className, icon, fromWishlist }) => {
  const { data: session, update } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const wishlist = session?.user?.wishlist;
  const userId = session?.user?._id;
  const [isLiked, setIsLiked] = useState(
    wishlist?.some((item) => item?._id === work?._id)
  );

  const handleWishlist = async () => {
    setLoading(true);
    try {
      if (session) {
        // Update local state first
        setIsLiked(!isLiked);

        const res = await fetch(`/api/user/${userId}/wishlist/${work?._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data && !fromWishlist) {
          toast.success(
            `Product ${isLiked ? "removed from" : "added to"} wishlist.`
          );
        } else {
          toast.success("Product removed from wishlist");
        }
        update({ user: { wishlist: data.wishlist } });
        setLoading(false);
        // No need to check isLiked here, toast based on data
      } else {
        router.push("/register");
        toast.error("You have to log in first to add products to wishlist.");
        return;
      }
    } catch (error) {
      console.log("Error in adding to wishlist", error);
    }
  };

  return (
    <>
      <button
        onClick={handleWishlist}
        disabled={loading}
        className={` cursor-pointer  hover:scale-[.99]  ${className} ${
          isLiked ? `text-red-600` : "text-gray-800"
        }`}
      >
        {icon ? icon : <IoMdHeart size={30} />}
      </button>
    </>
  );
};

export default WishListButton;
