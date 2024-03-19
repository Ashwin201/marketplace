"use client";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const EmptyField = ({ img, title, icon, btnText, href }) => {
  return (
    <>
      <div className=" px-3 flex flex-col justify-center items-center w-full mt-10 -mb-6 sm:mt-4 overflow-x-hidden ">
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={img}
            alt="Empty Cart "
            priority={true}
            loading="eager"
            className="w-[300px] h-auto"
          />
        </motion.div>

        <div className="mt-6">
          <h1 className=" font-bold text-xl text-center sm:text-3xl text-blue-700 mb-6 line-clamp-2 px-6">
            {title}
          </h1>
        </div>
        {href && (
          <Link
            href={`${href}`}
            aria-label="Home Link"
            className=" flex gap-2 items-center justify-center align-middle py-2  px-3 sm:px-4 text-gray-200 font-medium text-sm bg-blue-700 hover:bg-blue-800 
                rounded-md cursor-pointer  transition-all duration-300 "
          >
            {icon}

            {btnText}
          </Link>
        )}
      </div>
    </>
  );
};

export default EmptyField;
