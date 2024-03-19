"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { IoMdCart } from "react-icons/io";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CartButton = ({ workId, work }) => {
  const { data: session, update } = useSession();
  const user = session?.user;
  const userId = session?.user?._id;
  const cart = session?.user?.cart;
  const router = useRouter();
  const isInCart = cart?.find((item) => item?.workId === workId);

  // console.log(isInCart);
  const handleCart = async () => {
    if (!session) {
      router.push("/register");
      toast.error("You have to log in first to add products to cart.");
      return;
    }
    const newCartItem = {
      workId,
      title: work?.title,
      description: work?.description,
      images: work?.images,
      price: work?.price,
      category: work?.category,
      quantity: 1,
    };

    try {
      if (!isInCart) {
        const newCart = [...cart, newCartItem];
        const res = await fetch(`/api/user/${userId}/cart`, {
          method: "POST",

          body: JSON.stringify({ cart: newCart }),
        });

        if (res.ok) {
          toast.success(`Product added to the cart.`);

          update({ user: { cart: newCart } });
        }
      } else {
        toast.success(`This product is already exists in your cart.`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(user?.cart);
  return (
    <>
      <button
        onClick={handleCart}
        className="flex w-fit items-center  text-white font-medium bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded"
      >
        <IoMdCart size={22} />
        &nbsp; Add to cart
      </button>
    </>
  );
};

export default CartButton;
