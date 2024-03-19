"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.webp";
import Link from "next/link";
import { ImSearch } from "react-icons/im";
import { TbLogin2, TbTruckDelivery } from "react-icons/tb";
import { GoFileSubmodule } from "react-icons/go";
import { RiLogoutCircleLine } from "react-icons/ri";
import ThemeSwitcher from "./ThemeSwitcher";
import { signOut, useSession } from "next-auth/react";
import SearchItem from "./SearchItem";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdDashboardCustomize,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { BiHeart } from "react-icons/bi";
import { HiDotsVertical, HiOutlineHeart } from "react-icons/hi";
import { useRouter } from "next/navigation";
function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { status, data: session } = useSession();
  const router = useRouter();
  const popupRef = useRef(null);

  //code to off the popup when click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    if (!openMenu) {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openMenu]);

  const wishlist = session?.user?.wishlist;
  const cart = session?.user?.cart;
  return (
    <>
      <header className="">
        <div className="flex items-center justify-between ">
          {/* Left Side */}
          <Link
            href={"/"}
            aria-label="Home Link"
            className=" flex items-center gap-2 cursor-pointer"
          >
            <Image
              src={logo}
              alt="Logo"
              className=" w-[37px] sm:w-[40px] h-auto filter saturate-150 "
            />
            <span className=" text-sm sm:text-base font-bold max-[400px]:hidden block  text-blue-700 ">
              EZShop
            </span>
          </Link>

          {/* Right Side */}
          <div className="flex  items-center justify-between gap-3 sm:gap-5 sm:justify-end  ">
            <Link href={"/search"} aria-label="Search" className=" mr-2  ">
              <ImSearch size={20} />
            </Link>

            <div className=" hidden lg:flex ">
              <ThemeSwitcher showText={false} />
            </div>
            {/* Cart */}
            <Link
              href={"/cart"}
              aria-label="Cart"
              className=" min-w-[50px] text-sm group relative flex  gap-[6px] font-semibold items-center transition shadow-sm  rounded-full justify-between py-[6px] sm:py-2 px-3 max-[380px]:px-4 border dark:border-gray-700 shadow-gray-200 dark:shadow-gray-800 "
            >
              <MdOutlineShoppingCart size={21} /> ({cart?.length || 0})
            </Link>
            {/* WishList */}
            <Link
              href={"/wishlist"}
              aria-label="Wishlist"
              className=" hidden min-[430px]:flex text-sm group relative font-semibold  gap-[6px] items-center transition shadow-sm  rounded-full justify-between py-[6px] sm:py-2 px-3 max-[380px]:px-4 border dark:border-gray-700 shadow-gray-200 dark:shadow-gray-800 "
            >
              <HiOutlineHeart size={22} />({wishlist?.length || 0})
            </Link>

            {status === "unauthenticated" && (
              <>
                {/* Login Register */}
                <div className=" hidden min-[820px]:flex gap-3 items-center">
                  {/* <Link
                    className="block w-fit rounded px-2 py-[6px]   sm:px-6  text-sm font-medium bg-white hover:bg-gray-100 transition duration-300 text-blue-700 shadow hover:text-blue-800  active:text-blue-800 "
                    href="/login"
                  >
                    Login
                  </Link> */}
                  <Link
                    className="block w-fit rounded bg-blue-700 px-2 py-[6px]   sm:px-6 sm:py-2 text-sm font-medium text-white shadow hover:bg-blue-800  active:bg-blue-800 transition duration-300 "
                    href="/register"
                  >
                    Register
                  </Link>
                </div>

                <div className=" flex lg:hidden ">
                  <div className="group relative flex   mr-2  ">
                    <span
                      onClick={() => {
                        setOpenMenu((prev) => !prev);
                      }}
                    >
                      <HiDotsVertical size={25} />
                    </span>

                    {openMenu && (
                      <div className=" absolute top-14 right-0  py-4 px-8  dark:bg-black bg-[#feffff] shadow-lg shadow-gray-200 dark:shadow-gray-800 z-50 border border-gray-200 dark:border-gray-950 ">
                        <div
                          ref={popupRef}
                          className={` w-[150px] text-start flex-col gap-1  ${
                            openMenu ? "flex" : "hidden"
                          }`}
                        >
                          <div onClick={() => setMenuOpen(false)}>
                            <ThemeSwitcher showText={true} />
                          </div>
                          <hr className="mb-2 mt-1" />
                          <Link
                            onClick={() => setMenuOpen(false)}
                            href={"/login"}
                            aria-label="Login"
                            className="  flex items-center gap-2 hover:scale-[.99]  
            transition-all duration-300 cursor-pointer"
                          >
                            <TbLogin2 size={24} />{" "}
                            <span className=" font-semibold text-base  ">
                              Log In
                            </span>
                          </Link>
                          <Link
                            onClick={() => setMenuOpen(false)}
                            href={"/register"}
                            aria-label="Register"
                            className="  flex items-center gap-2 hover:scale-[.99] mt-2
            transition-all duration-300 cursor-pointer"
                          >
                            <GoFileSubmodule size={24} />{" "}
                            <span className=" font-semibold text-base  ">
                              Register
                            </span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
            {status === "authenticated" && (
              <>
                <div
                  onClick={() => {
                    setOpenMenu((prev) => !prev);
                  }}
                  className="group mr-2 relative flex  items-center  transition shadow-sm  rounded-full justify-center py-[4px] px-2 max-[380px]:px-4 border dark:border-gray-700 shadow-gray-200 dark:shadow-gray-800 "
                >
                  <span className=" text-sm tracking-wide font-medium text-gray-800 pb-[1px] pl-1  dark:text-gray-200">
                    {session?.user?.name.split(" ")[0]}
                  </span>
                  {openMenu ? (
                    <span className="-pr-1 ">
                      <MdArrowDropUp size={25} />
                    </span>
                  ) : (
                    <span className="-pr-1 ">
                      <MdArrowDropDown size={25} />
                    </span>
                  )}

                  {openMenu && (
                    <div className=" absolute top-20 right-0  py-4 px-8  dark:bg-black bg-[#feffff] shadow-lg shadow-gray-200 dark:shadow-gray-800 z-50 ">
                      <div
                        ref={popupRef}
                        className={` w-fit min-w-[200px] text-start flex-col gap-1  ${
                          openMenu ? "flex" : "hidden"
                        }`}
                      >
                        <div className=" text-sm text-start pb-3 ">
                          <strong className=" line-clamp-1 text-gray-800 dark:text-gray-200 text-base font-semibold">
                            {session?.user?.name}
                          </strong>

                          <span className="text-gray-700 dark:text-gray-300 text-xs line-clamp-1">
                            {session?.user?.email}
                          </span>
                        </div>
                        <hr />
                        {/* Theme button */}
                        <ThemeSwitcher showText={true} />
                        {/* Cart button */}
                        <Link
                          href={"/cart"}
                          aria-label="Cart"
                          className="flex items-center gap-2 hover:scale-[.99] 
                        transition-all duration-300 cursor-pointer"
                        >
                          <MdOutlineShoppingCart size={22} />{" "}
                          <span className=" font-semibold text-base  ">
                            {" "}
                            Cart ({cart?.length || 0})
                          </span>
                        </Link>
                        <Link
                          href={"/wishlist"}
                          aria-label="Wishlist"
                          className="flex items-center gap-2 hover:scale-[.99] mt-2
                        transition-all duration-300 cursor-pointer"
                        >
                          <BiHeart size={22} />{" "}
                          <span className=" font-semibold text-base  ">
                            {" "}
                            Wishlist ({wishlist?.length || 0})
                          </span>
                        </Link>
                        <Link
                          href={"/orders"}
                          aria-label="Orders"
                          className="flex items-center gap-2 hover:scale-[.99] mt-2 
                        transition-all duration-300 cursor-pointer"
                        >
                          <TbTruckDelivery size={22} />{" "}
                          <span className=" font-semibold text-base  ">
                            {" "}
                            Orders
                          </span>
                        </Link>

                        {/* Dashboard button */}
                        <Link
                          href={"/dashboard"}
                          aria-label="Create"
                          className="flex items-center gap-2 hover:scale-[.99] mt-3
                        transition-all duration-300 cursor-pointer"
                        >
                          <MdDashboardCustomize size={22} />
                          <span className=" font-semibold text-base  ">
                            {" "}
                            Dashboard
                          </span>
                        </Link>
                        {/* Create work button */}
                        <Link
                          href={"/create-product"}
                          aria-label="Create"
                          className="flex items-center gap-2 hover:scale-[.99] mt-3 mb-2
                        transition-all duration-300 cursor-pointer"
                        >
                          <IoIosCreate size={22} />{" "}
                          <span className=" font-semibold text-base  ">
                            {" "}
                            Sale Your Product
                          </span>
                        </Link>

                        <hr className="mt-2" />

                        {/* Logout button */}
                        <button
                          type="button"
                          onClick={() => {
                            signOut();
                            router.refresh();
                            router.push("/");
                          }}
                          className="  flex items-center gap-2 hover:scale-[.99] py-3  
            transition-all duration-300 cursor-pointer"
                        >
                          <RiLogoutCircleLine size={22} />{" "}
                          <span className=" font-semibold text-base  ">
                            Log Out
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
            {status === "loading" && (
              <div className="h-[36px] w-24 rounded-lg bg-gray-300 dark:bg-gray-800 animate-pulse duration-300 "></div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
{
  /* */
}

export default Navbar;
