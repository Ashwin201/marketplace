"use client";
import { MdDeleteOutline, MdOutlineDelete } from "react-icons/md";

import img from "@/public/wishlist.webp";
import { useSession } from "next-auth/react";
import { BiShoppingBag } from "react-icons/bi";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const WishListButton = dynamic(() => import("./WishListButton"));
const EmptyField = dynamic(() => import("./EmptyField"));
import Link from "next/link";
const Wishlist = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const wishlist = session?.user?.wishlist?.slice().reverse() || [];
  // console.log(wishlist);

  if (!session) {
    // Redirect or handle the case where there's no session
    router.push("/login");
    return null; // or a loading spinner or something
  }

  return (
    <div>
      <div className=" mb-8   ">
        <h1 className=" text-2xl sm:text-3xl font-bold tracking-wide  mb-2 text-blue-700 ">
          Your Wishlist
        </h1>

        <div className="h-[3px] w-24 bg-blue-700 rounded"></div>
      </div>

      {wishlist && wishlist.length > 0 ? (
        <>
          {wishlist?.map((work, index) => (
            <div
              className=" flex flex-col gap-6  justify-center px-2 py-2 sm:py-3 sm:px-4 mt- "
              key={index}
            >
              <div className="rounded-md shadow-sm flex gap-4  p-4 ">
                <Link
                  href={`/product-detail/${work?._id}`}
                  aria-label="Link to product detail"
                  className=" cursor-pointer"
                >
                  <img
                    src={work?.images[0]}
                    width={100}
                    height={100}
                    alt="product-image"
                    className=" w-36 h-[105px] rounded-md sm:w-40  object-fill "
                  />
                </Link>
                <div className=" flex flex-col  gap-2 justify-center w-full ">
                  <div className=" flex items-center gap-2 justify-between">
                    <Link
                      href={`/product-detail/${work?._id}`}
                      aria-label="Link to product detail"
                      className=" text-base sm:text-lg font-semibold line-clamp-1 text-gray-800 dark:text-gray-300  "
                    >
                      {work?.title}
                    </Link>
                    <WishListButton
                      work={work}
                      className={" text-red-600"}
                      icon={<MdDeleteOutline size={25} />}
                      fromWishlist={true}
                    />
                  </div>
                  <p className=" line-clamp-2 text-xs sm:text-sm font-medium  text-gray-800 dark:text-gray-400">
                    {work?.description}
                  </p>
                  <p className="text-sm   font-medium  text-gray-800 dark:text-gray-400">
                    {work?.price}.00 $
                  </p>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <EmptyField
          img={img}
          title={"Your Wishlist is Empty!"}
          icon={<BiShoppingBag size={22} />}
          btnText={"Continue Shopping"}
          href={"/products"}
        />
      )}
    </div>
  );
};

export default Wishlist;
