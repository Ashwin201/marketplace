import React from "react";

const CartSkeleton = () => {
  return (
    <div>
      <div className="mx-auto  justify-center  lg:flex">
        <div className="rounded-lg lg:w-2/3 flex flex-col gap-6  ">
          <div className="justify-between  rounded-lg  p-4   shadow-md shadow-gray-200 dark:shadow-gray-800 animate-pulse duration-300 sm:flex sm:justify-start">
            <div className="w-full h-auto rounded-lg hidden sm:flex sm:w-40  bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>

            <div className="sm:ml-4 sm:flex flex-col sm:w-full sm:justify-between  ">
              <div className=" w-[100%] h-6 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 mb-2 "></div>
              <div className=" mt-1 h-4 w-full rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300  my-2"></div>
              <div className=" flex justify-between ">
                <div className=" w-[50%] h-auto gap-3 flex flex-col">
                  <div className=" h-5 w-[40%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 my-2"></div>
                  <div className=" h-10 w-[50%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>
                </div>
                <div className="w-[120px] h-[80px]  rounded-lg  sm:hidden mt-3 bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>
              </div>
            </div>
          </div>
          <div className="justify-between  rounded-lg  p-4   shadow-md shadow-gray-200 dark:shadow-gray-800 animate-pulse duration-300 sm:flex sm:justify-start">
            <div className="w-full h-auto rounded-lg hidden sm:flex sm:w-40  bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>

            <div className="sm:ml-4 sm:flex flex-col sm:w-full sm:justify-between  ">
              <div className=" w-[100%] h-6 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 mb-2 "></div>
              <div className=" mt-1 h-4 w-full rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300  my-2"></div>
              <div className=" flex justify-between ">
                <div className=" w-[50%] h-auto gap-3 flex flex-col">
                  <div className=" h-5 w-[40%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 my-2"></div>
                  <div className=" h-10 w-[50%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>
                </div>
                <div className="w-[120px] h-[80px]  rounded-lg  sm:hidden mt-3 bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>
              </div>
            </div>
          </div>
          <div className="justify-between  rounded-lg  p-4   shadow-md shadow-gray-200 dark:shadow-gray-800 animate-pulse duration-300 sm:flex sm:justify-start">
            <div className="w-full h-auto rounded-lg hidden sm:flex sm:w-40  bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>

            <div className="sm:ml-4 sm:flex flex-col sm:w-full sm:justify-between  ">
              <div className=" w-[100%] h-6 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 mb-2 "></div>
              <div className=" mt-1 h-4 w-full rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300  my-2"></div>
              <div className=" flex justify-between ">
                <div className=" w-[50%] h-auto gap-3 flex flex-col">
                  <div className=" h-5 w-[40%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 my-2"></div>
                  <div className=" h-10 w-[50%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>
                </div>
                <div className="w-[120px] h-[80px]  rounded-lg  sm:hidden mt-3 bg-gray-200 dark:bg-gray-800 animate-pulse duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 h-full rounded-lg  p-4 shadow-md shadow-gray-200 dark:shadow-gray-800 animate-pulse duration-300 lg:mt-0 lg:ml-5 lg:w-1/3">
          <div className="flex justify-between items-center my-2">
            <p className="h-[28px] w-[20%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 "></p>
            <p className="h-[28px] w-[27%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300  "></p>
          </div>
          <hr className="my-4 sr-only" />
          <div className="flex justify-between items-center my-2">
            <p className="h-[28px] w-[35%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 "></p>
            <p className="h-[28px] w-[33%] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300  "></p>
          </div>
          <button className=" h-12 w-full rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse duration-300 mt-1"></button>
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;
