import React from "react";

const CardSkeleton = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
      <div className="col-span-1 p-4 gap-4">
        <div className=" h-48  rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>
        <div className=" h-6 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 my-3"></div>
        <div className=" h-4 w-[90%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>
        <div className=" h-4 w-[20%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 my-3"></div>
        <div className=" flex justify-between items-center">
          <div className=" flex gap-2 items-center">
            <div className=" h-8 w-8  rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 mt-2"></div>
            <div className=" h-4 w-16 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 mt-2"></div>
          </div>
          <div className=" h-10 w-28 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 mt-2"></div>
        </div>
      </div>
      <div className="col-span-1 p-4 gap-4">
        <div className=" h-48   rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>
        <div className=" h-6 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 my-3"></div>
        <div className=" h-4 w-[90%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>
        <div className=" h-4 w-[20%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 my-3"></div>
        <div className=" flex justify-between items-center">
          <div className=" flex gap-2 items-center">
            <div className=" h-8 w-8  rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 mt-2"></div>
            <div className=" h-4 w-16 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 mt-2"></div>
          </div>
          <div className=" h-10 w-28 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 mt-2"></div>
        </div>
      </div>
      <div className="col-span-1 p-4 gap-4 ">
        <div className=" h-48  rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>
        <div className=" h-6 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 my-3"></div>
        <div className=" h-4 w-[90%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>
        <div className=" h-4 w-[20%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 my-3"></div>
        <div className=" flex justify-between items-center">
          <div className=" flex gap-2 items-center">
            <div className=" h-8 w-8  rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 mt-2"></div>
            <div className=" h-4 w-16 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 mt-2"></div>
          </div>
          <div className=" h-10 w-28 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
