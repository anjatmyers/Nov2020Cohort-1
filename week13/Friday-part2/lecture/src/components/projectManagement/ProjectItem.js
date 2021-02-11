import React from "react";

const ProjectItem = (props) => {
  return <>

          <li>
                <div className="row">
                  <div className="col-8">
                  {props.proj.title} - 
                  &nbsp;
                  <span className="quote">{props.proj.category}</span>
                  </div>
                  <div className="col-4 text-right pr-5">
                    <a href="#" onClick={() => props.onDelete(props.proj.id)}> X 🔥 </a>
                  </div>
                </div>
                

                
            </li>

  </>;
};

export default ProjectItem;
