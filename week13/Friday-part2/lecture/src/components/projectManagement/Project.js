import React from "react";
import ProjectItem from './ProjectItem'

const Project = ({projects, onDelete}) => {
  
  return <ul>


    {projects.map(project =>{

      return <ProjectItem key={project.id} proj={project} onDelete={onDelete} />

    })}

  </ul>;
};

export default Project;
