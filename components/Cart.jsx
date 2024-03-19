"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import EmptyField from "./EmptyField";
import img from "@/public/empty-cart.webp";
import { BiShoppingBag } from "react-icons/bi";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import CartSkeleton from "./Skeletons/CartSkeleton";
import CheckoutBtn from "./CheckoutBtn";
import { useRouter } from "next/navigation";
const Cart = () => {
  const { data: session, update } = useSession();
  const [workList, setWorkList] = useState([]);
  const [loading, setLoading] = useState(true);
  const cart = session?.user?.cart;
  const userId = session?.user?._id;
  const router = useRouter();
  useEffect(() => {
    try {
      setWorkList(cart);
      setLoading(false);
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error fetching cart:", error);
    }
  }, [update]);

  const updateCart = async (cart) => {
    const response = await fetch(`/api/user/${userId}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart: cart }),
    });
    const data = await response.json();
    update({ user: { cart: data } });
  };

  const removeFromCart = (cartItem) => {
    cartItem.quantity = 1;
    const newCart = cart.filter((item) => item?.workId !== cartItem?.workId);
    setWorkList(newCart);
    toast.success(`Product removed from cart.`);
    updateCart(newCart);
  };

  const increaseQty = (cartItem) => {
    const newCart = cart?.map((item) => {
      if (item === cartItem) {
        if (item?.quantity < 10) {
          item.quantity++;
          toast.success(
            `${item.quantity} ${item.title
              .split(" ")
              .slice(0, 2)
              .join(" ")} added in cart. `
          );
        } else {
          toast.error(`You can't order more than 10 products at a time. `);
        }

        return item;
      } else return item;
    });
    setWorkList(newCart);
    updateCart(newCart);
  };

  const decreaseQty = (cartItem) => {
    const newCart = cart?.map((item) => {
      if (item === cartItem && item.quantity > 1) {
        item.quantity -= 1;
        if (item?.quantity > 1) {
          toast.success(
            `${item.quantity}  ${item.title
              .split(" ")
              .slice(0, 2)
              .join(" ")} remains in cart. `
          );
        }
        return item;
      } else return item;
    });
    setWorkList(newCart);
    updateCart(newCart);
  };

  const calcSubtotal = (cart) => {
    return cart?.reduce((total, item) => {
      return total + item?.quantity * item?.price;
    }, 0);
  };
  const subTotal = calcSubtotal(cart);
  const total = subTotal?.toFixed(2);
  return (
    <div>
      <div className=" mb-8   ">
        <h1 className=" text-2xl sm:text-3xl font-bold title-font mb-1 text-blue-700  ">
          Your Cart
        </h1>
        <div className="h-[3px] w-20 bg-blue-700 rounded"></div>
      </div>

      {loading ? (
        <CartSkeleton />
      ) : workList && workList?.length > 0 ? (
        <div className="mx-auto  justify-center  md:flex">
          <div className="rounded-lg md:w-2/3 flex flex-col gap-6  ">
            {workList
              ?.slice()
              .reverse()
              .map((item, index) => (
                <div
                  key={index}
                  className="justify-between  rounded-lg  p-4   shadow-md sm:flex sm:justify-start"
                >
                  <Link
                    href={`/product-detail/${item?.workId}`}
                    aria-label="Link to product detail"
                    className=" cursor-pointer"
                  >
                    <img
                      src={item?.images[0]}
                      width={100}
                      height={100}
                      alt="product-image"
                      className="w-full h-auto rounded-lg hidden sm:flex sm:h-full sm:w-52 object-fill object-center"
                    />
                  </Link>

                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between gap-3 sm:gap-2">
                    <div className=" sm:mt-0">
                      <div className=" flex gap-2 items-center justify-between">
                        <Link
                          href={`/product-detail/${item?.workId}`}
                          aria-label="Product detail Page"
                          className="text-lg font-semibold line-clamp-1 text-gray-800 dark:text-gray-300  "
                        >
                          {item?.title}
                        </Link>
                        <span
                          className=" cursor-pointer text-red-600"
                          onClick={() => removeFromCart(item)}
                        >
                          <MdOutlineDelete size={22} />
                        </span>
                      </div>
                      <p className=" mt-1 text-xs sm:text-sm  font-medium line-clamp-2 text-gray-800 dark:text-gray-300 ">
                        {item?.description}
                      </p>
                      <div className=" flex justify-between gap-3">
                        <div className=" flex flex-col gap-2">
                          <p className="text-sm  font-medium text-gray-800 dark:text-gray-300  mb-2 mt-3 ">
                            {item?.quantity} * {item?.price}.00 $ ={" "}
                            {item?.price * item?.quantity}.00 $
                          </p>

                          <div className=" flex items-center border-2 dark:border-gray-600 border-gray-300 w-fit rounded -mb-1">
                            <span
                              onClick={() => decreaseQty(item)}
                              className="cursor-pointer rounded-l text-gray-800 dark:text-gray-300 py-1 px-3.5 duration-100  "
                            >
                              {" "}
                              -{" "}
                            </span>

                            <span className="cursor-pointer  text-gray-800 dark:text-gray-300 py-1 px-3 duration-100  ">
                              {item?.quantity}
                            </span>
                            <span
                              onClick={() => increaseQty(item)}
                              className="cursor-pointer rounded-r text-gray-800 dark:text-gray-300 py-1 px-3 duration-100  "
                            >
                              {" "}
                              +{" "}
                            </span>
                          </div>
                        </div>
                        <Link
                          href={`/product-detail/${item?.workId}`}
                          aria-label="Link to product detail"
                          className=" cursor-pointer"
                        >
                          <img
                            src={item?.images[0]}
                            alt="product-image"
                            className="w-[120px] h-[70px] object-fill  rounded-lg  sm:hidden mt-3 "
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-12 h-full rounded-lg  p-4 shadow-md md:mt-0 md:ml-5 md:w-1/3">
            <div className="flex justify-between">
              <p className="text-gray-800 dark:text-gray-300  font-medium">
                Subtotal
              </p>
              <p className="text-gray-800 dark:text-gray-300  font-medium">
                ${subTotal}.00
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-semibold">Total Amount :</p>
              <div className="">
                <p className="mb-1 text-lg font-semibold">${total} USD</p>
              </div>
            </div>
            <CheckoutBtn cart={cart} userId={userId} />
          </div>
        </div>
      ) : (
        <EmptyField
          img={img}
          title={"Your Cart is Empty!"}
          icon={<BiShoppingBag size={22} />}
          btnText={"Continue Shopping"}
          href={"/products"}
        />
      )}
    </div>
  );
};

export default Cart;
