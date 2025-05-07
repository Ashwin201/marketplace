"use client";
import React, { useState } from "react";
import Image from "next/image";
import payments from "@/public/assets/payment.png";
import Link from "next/link";
import logo from "@/public/logo.webp";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
const Footer = () => {
  const [email, setEmail] = useState("ashminsharma203@gmail.com");
  const pathName = usePathname();
  return (
    pathName !== "/search" && (
      <>
        <footer className=" border-t-2 border-gray-200 dark:border-gray-800">
          <div className=" pb-5 ">
            <div className="mt-10  flex sm:flex-row flex-col gap-6 w-full justify-between sm:gap-16 md:gap-28">
              <div className="mx-auto">
                <Link
                  href="/"
                  className=" w-full flex sm:justify-start justify-center mb-2"
                >
                  <Image src={logo} className=" h-16 w-auto " alt="Logo" />
                </Link>
                <h1 className="font-bold text-blue-700 text-xl text-center  sm:text-left ">
                  EZShop
                </h1>
                <p className="mt-4 text-center dark:text-gray-300 text-gray-600 sm:text-left text-base font-medium">
                  EZShop provides a centralized space for users to browse, buy,
                  or sell products, fostering a dynamic online marketplace with
                  diverse offerings and transactions.
                </p>
              </div>

              <div className="flex flex-col  sm:mt-0 mt-6 sm:justify-end sm:items-end justify-center items-center">
                <strong className=" text-lg font-medium  dark:text-gray-300 text-gray-900">
                  {" "}
                  Support{" "}
                </strong>

                <ul className="mt-6 flex flex-col sm:items-start items-center  gap-3 space-y-1 text-base font-medium">
                  <li>
                    <Link
                      className=" dark:text-gray-300 text-gray-900 transition"
                      href="/"
                    >
                      {" "}
                      FAQs{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className=" dark:text-gray-300 text-gray-900 transition "
                      href="https://ashminsharma.vercel.app#Contact"
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t-2 border-gray-200 dark:border-gray-800 pt-8">
              <div className=" flex  flex-col-reverse md:flex-row gap-2 justify-between">
                <p className="text-center md:text-start text-xs/relaxed text-gray-500">
                  © Company 2022. All rights reserved.
                  <br />
                  Created by Ashmin Sharma.
                </p>
                <Image src={payments} alt="Payments" className=" h-6 w-auto" />
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  );
};

export default Footer;
