"use client";
import React, { useEffect, useState } from "react";
import CardSkeleton from "./Skeletons/CardSkeleton";

import WorkCard from "./WorkCard";
const MoreProducts = ({ productId }) => {
  const [workList, setWorkList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWorkList = async () => {
      const res = await fetch(`/api/work/new`);
      const data = await res.json();
      setWorkList(data);
      setLoading(false);
    };
    getWorkList();
  }, [productId]);

  // const works = workList.filter(
  //   (product) => product && product._id !== productId
  // );

  return (
    <div className=" mt-20 ">
      <div className=" sm:ml-4 ">
        <h1 className=" text-2xl sm:text-3xl font-bold title-font mb-2 text-blue-700 ">
          More Products
        </h1>
        <div className="h-[2.5px] w-32 bg-blue-700 rounded"></div>
      </div>

      {loading ? (
        <CardSkeleton />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {workList &&
            workList?.map &&
            workList
              ?.slice(0, 4)
              ?.map(
                (item) =>
                  item._id !== productId && (
                    <WorkCard key={item._id} work={item} />
                  )
              )}
        </div>
      )}
    </div>
  );
};

export default MoreProducts;
