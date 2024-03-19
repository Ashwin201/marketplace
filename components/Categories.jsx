"use client";
import React, { useEffect, useState } from "react";
import { categories } from "@/data";
import WorkList from "./WorkList";
import CardSkeleton from "./Skeletons/CardSkeleton";
import WorkContainer from "./WorkContainer";
const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [workList, setWorkList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getWorkList = async () => {
    const res = await fetch(`/api/work/list/${selectedCategory}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res) {
      const info = await res.json();
      const data = info.reverse();
      setWorkList(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getWorkList();
  }, [selectedCategory]);
  // console.log(workList);
  return (
    <div className="mt-16 ">
      <div className=" flex flex-wrap justify-center sm:justify-start  gap-4 sm:gap-6 py-6 sm:py-8 border-y-2 border-gray-500  ">
        {categories.map((item, index) => (
          <p
            onClick={() => setSelectedCategory(item)}
            key={index}
            className={`hover:scale-[.99] py-[6px] px-5 w-fit rounded-full transition-all duration-300 cursor-pointer
             hover:bg-blue-800 text-base  font-medium ${
               selectedCategory === item
                 ? " bg-blue-700 hover:bg-blue-800 text-white"
                 : "text-gray-700 dark:text-gray-400 border-2  border-gray-500   hover:text-white "
             }`}
          >
            {item}
          </p>
        ))}
      </div>
      <section className="text-gray-600 body-font mt-16 mb-6">
        <div className="container   mx-auto">
          {loading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            <WorkContainer workList={workList} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Categories;
