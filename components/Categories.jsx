"use client";
import React, { useEffect, useState, useMemo } from "react";
import { categories } from "@/data";

import CardSkeleton from "./Skeletons/CardSkeleton";
import WorkContainer from "./WorkContainer";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [workList, setWorkList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWorkList = async () => {
      try {
        const res = await fetch(`/api/work/list/All`);
        if (res.ok) {
          const info = await res.json();
          const data = info.reverse();
          setWorkList(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getWorkList();
  }, []);

  const filteredWorkList = useMemo(() => {
    if (selectedCategory === "All") {
      return workList;
    }
    return workList.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, workList]);

  return (
    <div className="mt-16">
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 py-6 sm:py-8 border-y-2 border-gray-500">
        {categories.map((item, index) => (
          <p
            onClick={() => setSelectedCategory(item)}
            key={index}
            className={`hover:scale-[.99] py-[6px] px-5 w-fit rounded-full transition-all duration-300 cursor-pointer hover:bg-blue-800 text-base font-medium ${
              selectedCategory === item
                ? "bg-blue-700 hover:bg-blue-800 text-white"
                : "text-gray-700 dark:text-gray-400 border-2 border-gray-500 hover:text-white"
            }`}
          >
            {item}
          </p>
        ))}
      </div>
      <section className="text-gray-600 body-font mt-16 mb-6">
        <div className="container mx-auto">
          {loading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            <WorkContainer workList={filteredWorkList} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Categories;
