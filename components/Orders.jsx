"use client";
import React, { useEffect, useState } from "react";
import img from "../public/notordered.webp";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { BiShoppingBag } from "react-icons/bi";
import dynamic from "next/dynamic";
const WishlistSkeleton = dynamic(() => import("./Skeletons/WishlistSkeleton"));
const EmptyField = dynamic(() => import("./EmptyField"));
const Orders = () => {
  const { data: session } = useSession();
  const orders = session?.user?.order?.slice().reverse();

  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      if (orders) {
        setOrder(orders);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error fetching orders :", error);
    }
  }, [session?.user]);
  return (
    <section className=" ">
      <div className="mb-8 ">
        <h1 className="text-3xl font-bold  mb-2 text-blue-700">
          Your Order&apos;s
        </h1>
        <div className="h-[3px] w-32 bg-blue-700 rounded"></div>
      </div>

      {loading ? (
        <div className=" flex flex-col gap-8 pt-4">
          <WishlistSkeleton show={false} />
          <WishlistSkeleton show={false} />
          <WishlistSkeleton show={false} />
          <WishlistSkeleton show={false} />
          <WishlistSkeleton show={false} />
        </div>
      ) : order && order.length > 0 ? (
        <div className=" flex flex-col gap-10 ">
          {order?.map((item) => (
            <div key={item?.id}>
              <span className=" text-base  sm:text-lg font-semibold text-gray-900 dark:text-gray-200 ">
                Order Id :&nbsp; {item?.id}
              </span>
              <div className=" tracking-wide w-fit py-1 px-2 mt-3 rounded-md bg-gray-900 dark:bg-gray-200 flex gap-2 text-base font-semibold   line-clamp-1  mb-2 dark:text-gray-900 text-gray-200">
                Total Amount Paid :&nbsp; ${item?.amountPaid} USD
              </div>

              <div className=" flex flex-col gap-6  justify-center px-2 py-2 sm:py-3 sm:px-4 mt- ">
                {item &&
                  item?.orderItems?.map((work, index) => (
                    <div
                      className="rounded-md shadow-sm flex gap-4  p-4 "
                      key={index}
                    >
                      <Link
                        href={`/product-detail/${work?.productId}`}
                        aria-label="Link to product detail"
                        className=" cursor-pointer"
                      >
                        <Image
                          src={`${work?.image}`}
                          alt={work?.title}
                          width={100}
                          height={100}
                          className=" w-36 h-[105px] rounded-md sm:w-40 object-fill "
                        />
                      </Link>
                      <div className=" flex flex-col  gap-2 justify-center w-full ">
                        <div className=" flex items-center gap-2 justify-between">
                          <Link
                            href={`/product-detail/${work?.productId}`}
                            aria-label="Link to product detail"
                            className=" text-base sm:text-lg font-semibold line-clamp-1 text-gray-800 dark:text-gray-300  "
                          >
                            {work?.title}
                          </Link>
                        </div>
                        <p className=" line-clamp-2 text-xs sm:text-sm font-medium  text-gray-800 dark:text-gray-400">
                          {work?.description}
                        </p>
                        <p className="text-sm   font-medium  text-gray-800 dark:text-gray-400">
                          {work?.quantity} * {work?.price}$ = $
                          {work?.quantity * work?.price} USD
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyField
          img={img}
          title={"Sorry, You hadn't ordered anything yet!"}
          icon={<BiShoppingBag size={22} />}
          btnText={"Continue Shopping"}
          href={"/products"}
        />
      )}
    </section>
  );
};

export default Orders;
