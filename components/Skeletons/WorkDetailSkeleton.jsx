import React from "react";

const WorkDetailSkeleton = () => {
  return (
    <section className="  overflow-hidden">
      <div className="container  my-10 mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 place-content-center items-center ">
          <div className=" col-span-1 w-full h-96 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>
          <div className=" col-span-1 flex flex-col gap-5">
            <h2 className="h-4 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></h2>
            <h1 className="h-16 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></h1>
            <p className="h-40 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></p>
            <p className="h-5 w-32 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></p>
            <div className=" flex  gap-5 items-center mb-3">
              <button className="h-14 w-44 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></button>
              <button className="h-10 w-10  rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 "></button>
            </div>
            <span className="h-4 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkDetailSkeleton;
