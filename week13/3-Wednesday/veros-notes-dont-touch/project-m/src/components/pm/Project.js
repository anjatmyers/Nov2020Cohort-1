import React from "react";
import ProjectItem from './ProjectItem'

const Project = (props) => {
  let reversedData = [...props.projects].reverse();
  
  
  return <div className="projectHover">
  <ul>
    {reversedData.map(project => {
      return <ProjectItem key={project.id}  proj={project} onDelete={props.onDelete} /> 
    })}
    </ul>
    </div>
  
};

export default Project;
