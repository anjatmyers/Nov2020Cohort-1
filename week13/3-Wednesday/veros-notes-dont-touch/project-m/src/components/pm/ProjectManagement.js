import React, {useState, useEffect} from "react";
import AddProject from "./AddProject";
import Project from './Project'
import { v1 as uuidv1 } from 'uuid';
import "../../assets/styles.css";
import {Row} from 'react-bootstrap'

const ProjectManagement = () => {

  const [projects, setProjects] = useState([])

  useEffect(()=>{
    setProjects(
      [
        {
            id: uuidv1(),
            category: "Front-End",
            title: "Javascript"
        },
        {
            id: uuidv1(),
            category: "Back-End",
            title: "Node"
        },
        {
            id: uuidv1(),
            category: "Front-End",
            title: "React"
        }

    ]
    )
  }, [])

  const handleAddProject = (newProject) => {
    
    setProjects([...projects, newProject]);

    console.log(`add project ${JSON.stringify(projects)}`);
  }

  const handleDeleteProject = (id) => {
    let oldProjects = [...projects];

    let filteredProjects = oldProjects.filter(project =>{
      return id !== project.id;
    })

    setProjects(filteredProjects);
  }

  return (
    <>
      <Row className="mt-5">
        <div className="col-6 offset-3 text-center">
          <h3>Project Management</h3>
        </div>
      </Row>

      <Row>
        <div className="col-6 offset-3">
          <div className="card">
            <div className="card-header text-center">Add a Project</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                  <AddProject addProject={(project)=> handleAddProject(project)} />
                 
              </blockquote>
            </div>
          </div>
          {/* end of card */}
          
          
        </div>
        {/* end of col 6 */}

        <div className="col-6 offset-3 mt-4">
        <Project onDelete={(id)=>handleDeleteProject(id)} projects={projects} />
        </div>
      </Row>
      {/* end of row */}
    </>
  );
};

export default ProjectManagement;
