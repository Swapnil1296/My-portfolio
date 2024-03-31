import React, { useState } from "react";
import { CurrentProjectsArray } from "../../Utils/currentProjects";
import Card from "../Card/Card";

const CurrentProjects = () => {
  const [currentProject, setCurrentProject] = useState(
    CurrentProjectsArray.slice(0, 4)
  );
  return (
    <div>
      {currentProject.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default CurrentProjects;
