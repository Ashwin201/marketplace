"use client";
import React, { useState } from "react";
import Image from "next/image";
import payments from "@/public/assets/payment.png";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const [email, setEmail] = useState("ashminsharma203@gmail.com");
  return (
    <>
      <footer className=" border-t-2 border-gray-200 dark:border-gray-800">
        <div className=" pb-5 ">
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-42">
            <div className="mx-auto">
              <h1 className="font-bold text-blue-700 text-xl text-center lg:text-left ">
                About Me{" "}
              </h1>
              <p className="mt-4  text-center  dark:text-gray-400 lg:text-left text-base font-medium">
                I&apos;m Ashmin Sharma, a web developer and UI designer,
                dedicated to crafting visually compelling, functional, and
                responsive designs. Fueled by a profound passion, I specialize
                in transforming pixels into captivating user experiences.
              </p>

              <div className="mt-4 flex justify-center  gap-3 lg:justify-start">
                <Link
                  className=" dark:text-gray-300 text-gray-900 transition "
                  href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <Link
                  className=" dark:text-gray-300 text-gray-900 transition "
                  href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Linkedin </span>

                  <FaLinkedin size={22} />
                </Link>

                <Link
                  className=" dark:text-gray-300 text-gray-900 transition "
                  href="https://github.com/Ashwin201"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> GitHub </span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
              <div>
                <strong className="text-lg font-medium  dark:text-gray-300 text-gray-900">
                  {" "}
                  Services{" "}
                </strong>

                <ul className="mt-6 space-y-1  flex flex-col gap-3">
                  <li className=" text-base font-medium">Fast Website</li>

                  <li className=" text-base font-medium">Design Thinking</li>

                  <li className=" text-base font-medium">SEO</li>
                </ul>
              </div>

              <div>
                <strong className="text-lg font-medium  dark:text-gray-300 text-gray-900">
                  {" "}
                  About{" "}
                </strong>

                <ul className="mt-6 space-y-1 text-base font-medium flex flex-col  gap-4">
                  <li>
                    <Link
                      className=" dark:text-gray-300 text-gray-900 transition "
                      href="https://profile-iota-five.vercel.app/about"
                    >
                      {" "}
                      About{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className=" dark:text-gray-300 text-gray-900 transition "
                      href="https://profile-iota-five.vercel.app/skills"
                    >
                      Skills
                    </Link>
                  </li>

                  <li>
                    <Link
                      className=" dark:text-gray-300 text-gray-900 transition "
                      href="https://profile-iota-five.vercel.app/projects"
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <strong className=" text-lg font-medium  dark:text-gray-300 text-gray-900">
                  {" "}
                  Support{" "}
                </strong>

                <ul className="mt-6 flex flex-col  gap-3 space-y-1 text-base font-medium">
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
                      href="https://profile-iota-five.vercel.app/contact"
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
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
  );
};

export default Footer;