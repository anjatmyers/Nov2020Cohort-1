import React, {useState, useEffect} from "react";
import AddProject from './AddProject';

import Project from './Project';
import { v4 as uuidv1 } from 'uuid';

const ProjectManagement = () => {

    const [projects, setProjects] = useState([]);  //[{id, category, title}, {}, {}]

    //set initial data for project array
    useEffect(() => {
        setProjects(
            [
              {
                  id: uuidv1(), //unique id
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
        //prevents mutation of old state by spreading the old state and adding
        // the newProject object to the end of the new array

        setProjects([newProject, ...projects]);
    }

    const handleRemoveProject = (id) => { //3  [3, 4, 5, 6, 7]

        //spread to prevent mutation of old state.
        let oldProjects = [...projects];

        let filteredProjects = oldProjects.filter(project =>{
            return id !== project.id
        })
        //state is updated with new filtered projects
        setProjects(filteredProjects);
        
    }

  return <>
    
    <div className="row mt-5">
        <div className="col-6 offset-3 text-center">
            <h3>Project Management</h3>
        </div>
    </div>

    <div className="row">
        <div className="col-6 offset-3">
            <div className="card">
                <h5 className="card-header">Add a Project</h5>
                <div className="card-body">
                    <AddProject addProject={(project)=>handleAddProject(project)} />
                </div>
            </div>
            {/* end of card */}
        </div>
        {/* end of col-6 */}
        
    </div>
    {/* end of row */}

    <div className="row">
        <div className="col-6 offset-3 mt-4">
            <Project onDelete={(id)=>handleRemoveProject(id)} projects={projects} />
        </div>
    </div>

  </>
};

export default ProjectManagement;
