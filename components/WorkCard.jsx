"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  IoMdHeart,
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosCreate,
} from "react-icons/io";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";
const WishListButton = dynamic(() => import("./WishListButton"));

import { MdAccountCircle } from "react-icons/md";
const WorkCard = ({ work }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();
  const goToPrevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  const goToNextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const [firstName] = work?.creator?.name.split(" ");

  return (
    work && (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, marginBottom: "-60px" }}
        animate={{ opacity: 1, scale: 1, marginBottom: "0px" }}
        transition={{ duration: 0.3 }}
        className=" cursor-pointer relative col-span-1 p-4 lg:p-5 flex flex-col gap-2 rounded-md  shadow-sm
      hover:shadow-xl shadow-gray-300 dark:shadow-gray-900 translate-all duration-300"
      >
        <div className=" relative">
          <img
            src={work.images[currentIndex]}
            alt="Content"
            width="400"
            height="400"
            className="h-56 w-full   rounded-md object-fill  object-center  "
          />
          <WishListButton work={work} className={" absolute top-2 right-2"} />
          {currentIndex > 0 && (
            <span
              onClick={goToPrevSlide}
              className=" absolute top-[48%] left-3 rounded-full p-1 bg-white "
            >
              <IoIosArrowBack />
            </span>
          )}
          {currentIndex < work.images.length - 1 && (
            <span
              onClick={goToNextSlide}
              className=" absolute top-[48%] right-3 rounded-full p-1 bg-white "
            >
              <IoIosArrowForward />
            </span>
          )}
        </div>

        <h2 className="text-lg text-gray-900 dark:text-gray-200 line-clamp-1 font-semibold title-font my-2 ">
          {work.title}
        </h2>
        <p className="leading-relaxed text-sm font-medium line-clamp-1 -mt-3 text-gray-700 dark:text-gray-300">
          {work.description}
        </p>
        <p className="leading-relaxed text-sm font-semibold  -mt-1 text-gray-700 dark:text-gray-300 ">
          ${work.price}.00
        </p>
        <div className="  flex  justify-between items-center">
          <div className="  flex gap-2  items-center">
            <MdAccountCircle size={25} />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {firstName}
            </span>
          </div>
          <Link
            href={`/product-detail/${work._id}`}
            aria-label={work.title}
            className="  w-fit bg-blue-700 hover:bg-blue-800 duration-300 transition-all text-white rounded-br-md rounded-tl-md py-2 px-4 font-medium text-sm "
          >
            Learn more
            <span className=" sr-only">View details for {work.title}</span>
          </Link>
        </div>
      </motion.div>
    )
  );
};

export default WorkCard;
