"use client";
import React, { useEffect, useState } from "react";
import CardSkeleton from "./Skeletons/CardSkeleton";
import WorkCard from "./WorkCard";
import { useSession } from "next-auth/react";
import EmptyField from "./EmptyField";
import img from "@/public/nodata.webp";
import { IoIosCreate } from "react-icons/io";
const Dashboard = () => {
  const [workList, setWorkList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const userId = session?.user?._id;
  // console.log(userId);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`/api/user/${userId}/shop`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const work = await res.json();
        setWorkList(work);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching User data => ", error);
      }
    };
    getData();
  }, [userId]);

  // console.log(workList);
  return (
    <div className=" ">
      <div className="   ">
        <h1 className=" text-2xl sm:text-3xl font-bold title-font mb-2 text-blue-700 ">
          Your Product&apos;s
        </h1>
        <div className="h-[2.5px] w-32 bg-blue-700 rounded"></div>
      </div>

      {loading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : workList && workList?.length > 0 ? (
        <div className="grid sm:grid-cols-2  xl:grid-cols-3 gap-6 mt-10">
          {workList &&
            workList
              ?.slice()
              ?.reverse()
              ?.map((item) => <WorkCard key={item._id} work={item} />)}
        </div>
      ) : (
        <div>
          <EmptyField
            img={img}
            title={"You hadn't published any product yet!"}
            icon={<IoIosCreate size={22} />}
            btnText={"Publish Product "}
            href={"/create-product"}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
