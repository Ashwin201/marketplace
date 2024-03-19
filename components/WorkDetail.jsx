"use client";
import Breadcrumb from "./Breadcrumb";
import ShareButtons from "./ShareButtons";
import WorkDetailSkeleton from "./Skeletons/WorkDetailSkeleton";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MoreProducts from "./MoreProducts";
import { useSession } from "next-auth/react";
import { IoIosArrowBack, IoIosArrowForward, IoIosImages } from "react-icons/io";
import WishListButton from "./WishListButton";
import CartButton from "./CartButton";
import { useRouter } from "next/navigation";
import { MdOutlineEditNote } from "react-icons/md";
const WorkDetail = ({ work, workId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibility, setVisibility] = useState(4);
  const { data: session } = useSession();
  const router = useRouter();
  const goToPrevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  const goToNextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  useEffect(() => {
    setProduct(work);
    setLoading(false);
  }, [workId]);

  const handleImages = (index) => {
    setCurrentIndex(index);
  };
  // console.log(product);

  return loading ? (
    <WorkDetailSkeleton />
  ) : (
    <section className="text-gray-600  overflow-hidden">
      <div className=" gap-2 flex items-center justify-between">
        <div className=" line-clamp-1">
          <Breadcrumb first={"product-detail"} second={workId} />
        </div>
        {session?.user?.email === product?.creator?.email && (
          <div className=" flex items-center ">
            <Link
              href={`/edit-product/${product?._id}`}
              aria-label="Login"
              className=" text-gray-900 dark:text-gray-200 animate-pulse duration-300"
            >
              <MdOutlineEditNote size={30} />
            </Link>
          </div>
        )}
      </div>
      <div className="container  my-5 mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20  items-start ">
          <div className=" col-span-1 w-full h-auto">
            <div className=" relative ">
              <img
                src={product.images?.[currentIndex]}
                alt="ecommerce"
                width={100}
                height={100}
                className=" w-full h-[240px] sm:h-[300px]  object-cover object-center rounded-md"
              />
              {/* Wishlist button */}
              <WishListButton
                work={product}
                className={" absolute top-2 right-2"}
              />
              {currentIndex > 0 && (
                <span
                  onClick={goToPrevSlide}
                  className=" cursor-pointer absolute top-[50%] left-3 rounded-full p-1 bg-white "
                >
                  <IoIosArrowBack />
                </span>
              )}
              {currentIndex < work?.images?.length - 1 && (
                <span
                  onClick={goToNextSlide}
                  className=" cursor-pointer absolute top-[50%] right-3 rounded-full p-1 bg-white "
                >
                  <IoIosArrowForward />
                </span>
              )}
            </div>
            <div className="mt-6 grid grid-cols-4  sm:grid-cols-5 gap-3">
              {product.images?.slice(0, visibility).map((work, index) => (
                <div className=" col-span-1 w-full h-auto " key={index}>
                  <img
                    src={work}
                    alt="Images"
                    width={100}
                    height={100}
                    onClick={() => handleImages(index)}
                    className={`cursor-pointer object-cover rounded-md w-full h-12 sm:h-14                    ${
                      work === product.images[currentIndex]
                        ? "border-blue-700  border-[3px] "
                        : "border-2 border-gray-500 "
                    }`}
                  />
                </div>
              ))}
              {visibility < product?.images?.length && (
                <div
                  onClick={() => setVisibility(visibility + 4)}
                  className=" hover:scale-[.99] transition-all duration-300 cursor-pointer text-gray-800 dark:text-gray-300 flex flex-col 
                   items-center justify-center text-sm font-medium col-span-1 w-full h-12 sm:h-14        p-2 py-3 rounded-md border-2 border-gray-500"
                >
                  <span className="  hidden sm:flex">
                    <IoIosImages />
                  </span>
                  more
                </div>
              )}
            </div>
          </div>
          <div className=" col-span-1 flex flex-col gap-5 lg:gap-4">
            <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
              category : {product.category}
            </h2>
            <h1 className="text-gray-900 dark:text-gray-200 text-2xl font-semibold mb-1">
              {product.title}
            </h1>

            <p className="text-base font-medium text-gray-800 dark:text-gray-300">
              {product.description}
            </p>

            <p className="title-font font-semibold text-base  text-gray-800 dark:text-gray-300">
              ${product.price}.00 USD
            </p>

            <CartButton workId={workId} work={work} />
            <hr className=" mt-4 mb-2" />
            <div className=" flex items-center ">
              <span className=" text-base font-semibold text-gray-700 dark:text-gray-300">
                Share :{" "}
              </span>{" "}
              <ShareButtons id={workId} />
            </div>
            {/* 

            <div className=" flex gap-3 items-center ">
              <Image
                src={product?.creator?.profilePhoto}
                width={40}
                height={40}
                className=" rounded-full border-2 border-gray-500 object-contain"
              />
              <span className="text-base font-semibold text-gray-700 dark:text-gray-300">
                Posted by{" "}
                <span className=" font-bold"> {product?.creator?.name}</span>
              </span>
            </div>
            <hr /> */}
          </div>
        </div>
      </div>
      <MoreProducts productId={workId} />
    </section>
  );
};

export default WorkDetail;
