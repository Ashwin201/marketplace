"use client";
import React, { useState, useEffect } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import search from "@/public/search.png.webp";
import nodata from "@/public/noproduct.webp";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const SearchSkeleton = dynamic(() => import("./Skeletons/WishlistSkeleton"));
const EmptyField = dynamic(() => import("./EmptyField"));
const SearchItem = () => {
  const [query, setQuery] = useState("");
  const [workList, setWorkList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleSearch = async () => {
      if (query.length > 0) {
        try {
          const res = await fetch(`/api/work/search/${query}`, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();
          setWorkList(data);
          setLoading(false);
        } catch (error) {
          console.log("Query Results not found", error);
        }
      }
    };
    handleSearch();
  }, [query]);

  return (
    <div
      className={` z-50  w-screen h-screen overflow-y-scroll mb-10 absolute top-0 bottom-0 left-0 right-0 bg-white dark:bg-gray-950   min-[470px]:px-3 sm:px-8 md:px-16 lg:px-20 xl:px-44 `}
    >
      <div className=" py-3    w-[100%]  relative flex items-center justify-center     sm:py-5  border-b-2 border-gray-100 dark:border-gray-950  ">
        <input
          type="text"
          className="  w-[70%]  bg-[#ffffff] dark:bg-gray-950 placeholder:bg-[#ffffff] dark:placeholder:bg-gray-950  outline-none hover:outline-none placeholder:text-lg text-lg 
          sm:placeholder:text-4xl sm:text-4xl
           placeholder:text-gray-600 dark:placeholder:text-gray-500 text-gray-600 dark:text-gray-500 font-semibold text-center "
          placeholder=" Search for products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className=" flex py-1 pr-0 pl-3 bg-white dark:bg-black gap-3 items-center absolute top-3 sm:top-6 right-3 sm:right-8 md:right-16">
          {query?.length > 0 && (
            <button
              className=" cursor-pointer   text-gray-500 dark:text-gray-400"
              onClick={() => setQuery("")}
            >
              <FaDeleteLeft size={25} />
            </button>
          )}

          <Link
            href={"/"}
            arial-label={"Home"}
            className="  cursor-pointer   text-gray-500 dark:text-gray-400  "
          >
            <MdClose size={26} />
          </Link>
        </div>
      </div>

      {query ? (
        loading ? (
          <div className=" flex flex-col gap-8 mt-8">
            <SearchSkeleton />
            <SearchSkeleton />
            <SearchSkeleton />
            <SearchSkeleton />
            <SearchSkeleton />
          </div>
        ) : workList && workList.length > 0 ? (
          <div className=" ">
            {workList?.map((work) => (
              <div
                key={work?._id}
                className=" flex flex-col gap-6  justify-center px-2 py-2 sm:py-3 sm:px-4  "
              >
                <div className="rounded-md shadow-sm flex gap-4  p-4 ">
                  <Link
                    href={`/product-detail/${work._id}`}
                    aria-label="Link to product detail"
                    className=""
                  >
                    <img
                      src={work.images[0]}
                      alt="product-image"
                      className=" w-36 h-[105px] rounded-md sm:w-40  object-fill "
                    />
                  </Link>
                  <div className=" flex flex-col  gap-2 justify-center w-full ">
                    <div className=" flex items-center gap-2 justify-between">
                      <Link
                        href={`/product-detail/${work._id}`}
                        aria-label="Link to product detail"
                        className=" text-base sm:text-lg font-semibold line-clamp-1 text-gray-800 dark:text-gray-300  "
                      >
                        {work.title}
                      </Link>
                    </div>
                    <p className=" line-clamp-2 text-xs sm:text-sm font-medium  text-gray-800 dark:text-gray-400">
                      {work.description}
                    </p>
                    <p className="text-sm   font-medium  text-gray-800 dark:text-gray-400">
                      {work.price}.00 $
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className=" flex justify-center items-center w-full h-[80%]">
            <EmptyField
              img={nodata}
              title={`No results found on ${query.slice(0, 25)}`}
            />
          </div>
        )
      ) : (
        <div className=" flex justify-center items-center w-full h-[80%]">
          <div className=" flex flex-col justify-center items-center w-full mt-10 -mb-6 sm:mt-4">
            <Image
              src={search}
              alt="Empty Cart "
              priority={true}
              className="w-[300px] h-auto"
            />

            <div className="mt-6">
              <h1 className=" font-bold text-xl text-center sm:text-3xl text-gray-500 mb-6">
                Search for products...
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchItem;
