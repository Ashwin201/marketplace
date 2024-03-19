import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { IoBagCheckOutline } from "react-icons/io5";

const CheckoutBtn = ({ cart, userId }) => {
  let stripePromise = loadStripe(
    `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
  );
  const handelCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const res = await fetch(`/api/stripe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart,
          userId,
        }),
      });

      if (!res.ok) {
        console.log("Checkout failed :");
        return;
      }
      const data = await res.json();
      toast.loading("Redirecting to checkout...");
      const result = await stripe.redirectToCheckout({ sessionId: data.id });
      console.log(result);
      if (result.error) {
        toast.loading("Something went wrong!");

        console.log(result.error.message);
      } else {
      }
    } catch (error) {
      console.log("Checkout failed :", error);
    }
  };
  return (
    <>
      <button
        onClick={handelCheckout}
        className=" flex justify-center items-center  gap-1 mt-6 w-full rounded-md bg-blue-700 py-1.5 font-medium text-blue-50 hover:bg-blue-800"
      >
        <IoBagCheckOutline size={20} /> Check out
      </button>
    </>
  );
};

export default CheckoutBtn;
