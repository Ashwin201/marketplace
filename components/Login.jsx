"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.webp";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { redirect, usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session } = useSession();
  const pathname = usePathname();
  if (session && pathname === "/login") {
    router.push("/");
    return null;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        toast.error("Email and password are required.");
        setError("Email and password are required.");
        return;
      }
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.ok) {
        toast.success("Congratulations, you have successfully logged in.");
      } else {
        toast.error("Invalid email and password. Please try again!");
        return;
      }
    } catch (error) {
      console.log("Error during login : ", error);
    }
  };

  const loginWithGoogle = () => {
    signIn("google");
  };
  const loginWithGithub = () => {
    signIn("github");
  };
  return (
    <>
      <section className=" -mt-8">
        <div className="lg:grid  lg:grid-cols-12">
          <aside className="relative h-16 ml-8 xl:ml-12 hidden lg:flex lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Login"
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center  lg:col-span-7 xl:col-span-6 lg:mr-12  ">
            <div className="max-w-xl lg:max-w-3xl">
              <Link className="block text-blue-700" href="/">
                <Image src={logo} className=" h-16 w-auto " alt="Logo" />
              </Link>

              <h1 className="mt-6 text-2xl font-bold  sm:text-3xl md:text-4xl text-blue-700">
                Login to EZShop
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 text-sm font-medium dark:text-gray-400">
                Access a comprehensive range of features by logging in,
                including the ability to explore product listings, Dark mode,
                add items to your cart and wishlist, add your own products ,
                view orders and proceed to checkout. Unlock additional
                functionalities for an enhanced user experience.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="relative block rounded-md border border-gray-200 dark:border-gray-600 shadow-sm focus-within:border-blue-600 "
                  >
                    <input
                      type="email"
                      id="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      className=" p-2 w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="Email"
                    />

                    <span
                      className="py-1 px-2 text-gray-500 dark:text-gray-400 pointer-events-none bg-[#f8f9fa] dark:bg-black absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs 
                     transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                      Email
                    </span>
                  </label>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Password"
                    className="relative block rounded-md border border-gray-200 dark:border-gray-600 shadow-sm focus-within:border-blue-600 "
                  >
                    <input
                      type="password"
                      id="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      className=" p-2 w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="Password"
                    />

                    <span className="py-1 px-2 text-gray-500 dark:text-gray-400 pointer-events-none bg-[#f8f9fa] dark:bg-black absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Password
                    </span>
                  </label>
                </div>

                <div className="col-span-6 flex  flex-col gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-800  bg-blue-700 px-12 py-3 text-sm font-medium text-white   hover:bg-blue-800 transition-all duration-300"
                  >
                    Login
                  </button>
                  {error && (
                    <p className="-mt-2 text-red-600 font-semibold text-sm">
                      {error}
                    </p>
                  )}

                  <p className="mt-4  text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    Don&apos;t have an account?
                    <Link
                      href="/register"
                      className=" text-blue-700 font-semibold underline ml-1"
                    >
                      Register Now
                    </Link>
                  </p>
                </div>
                <div className=" col-span-6 flex  -mt-2 flex-col gap-4 items-center">
                  <span className="block font-medium">or</span>
                  <div className="flex flex-col  gap-3 items-center w-full ">
                    <div
                      className=" flex gap-4 justify-center items-center w-full  py-[6px]  border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer 
                    bg-gray-100 hover:bg-gray-200 transition-all duration-500"
                      onClick={loginWithGoogle}
                    >
                      <FcGoogle size={30} />{" "}
                      <span className="font-medium text-black  ">
                        Sign In with Google
                      </span>
                    </div>
                    <div
                      className="  flex gap-4 justify-center items-center w-full text-black  py-[6px]  border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer
                     bg-gray-900 hover:bg-gray-950 transition-all duration-500"
                      onClick={loginWithGithub}
                    >
                      <FaGithub size={30} color="white" />{" "}
                      <span className="font-medium text-white  ">
                        Sign In with Github
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Login;
