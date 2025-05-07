"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "@/public/banner.webp";
const Home = () => {
  return (
    <section className="relative mx-auto sm:py-10 flex flex-col-reverse lg:flex-row gap-10 lg:gap-32 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.2, x: "-200px" }}
        animate={{ opacity: 1, scale: 1, x: "0px" }}
        transition={{ duration: 0.9 }}
        className="flex flex-col md:items-start lg:text-left mb-10 flex-1 md:mb-0 items-center text-center"
      >
        <h1 className="flex flex-col gap-1  font-extrabold text-3xl  text-gray-700 dark:text-gray-200 md:text-5xl  mb-4">
          <strong className="block text-3xl md:text-5xl lg:text-6xl font-extrabold text-blue-700 sm:block">
            Discover, Shop & Sell!
          </strong>
          Your Marketplace for Endless Possibilities.
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-4">
          It provides a centralized space for users to browse, buy, or sell
          products, fostering a dynamic online marketplace with diverse
          offerings and transactions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.2, x: "200px" }}
        animate={{ opacity: 1, scale: 1, x: "0px" }}
        transition={{ duration: 0.9 }}
      >
        <Image
          src={img}
          alt="Banner"
          priority={true}
          className="w-full h-auto sm:h-[420px] sm:w-auto object-cover object-center rounded"
        />
      </motion.div>
    </section>
  );
};

export default Home;
