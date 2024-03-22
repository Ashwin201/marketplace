import dynamic from "next/dynamic";
const WorkCard = dynamic(() => import("./WorkCard"));
const EmptyField = dynamic(() => import("./EmptyField"));

import img from "@/public/noposts.webp";
import { IoCreate } from "react-icons/io5";
const WorkList = ({ data }) => {
  return data && data.length > 0 ? (
    <div className="grid sm:grid-cols-2  xl:grid-cols-3 gap-6">
      {data?.map &&
        data?.map((work) => <WorkCard key={work._id} work={work} />)}
    </div>
  ) : (
    <EmptyField
      img={img}
      title={`Products are not available for this category.`}
      icon={<IoCreate size={22} />}
      btnText={"Create Product"}
      href="/create-product"
    />
  );
};

export default WorkList;
