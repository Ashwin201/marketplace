import dynamic from "next/dynamic";
const WorkList = dynamic(() => import("./WorkList"));

const WorkContainer = ({ workList }) => {
  return (
    <div className="container   mx-auto">
      <WorkList data={workList} />
    </div>
  );
};

export default WorkContainer;
