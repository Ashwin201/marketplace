import React from "react";

const SearchSkeleton = ({ show }) => {
  return (
    <div className="  flex gap-4 mx-6   sm:mx-3 ">
      <div className=" w-36 h-[105px] sm:w-40    rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 "></div>
      <div className=" flex flex-col  gap-2 justify-center w-full ">
        <h2 className=" h-6 w-full   rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300  "></h2>
        <p className=" h-4 w-full rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></p>
        <p className="h-4 w-32 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></p>
      </div>
    </div>
  );
};

export default SearchSkeleton;
