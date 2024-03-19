import React from "react";
import WorkList from "./WorkList";
const WorkContainer = ({ workList }) => {
  return (
    <div className="container   mx-auto">
      <WorkList data={workList} />
    </div>
  );
};

export default WorkContainer;
