import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium cum quas sint eos assumenda libero, quia, aspernatur
            impedit eaque ullam hic odit magni at doloremque aliquam. Quisquam
            nobis enim quo?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Tony Stark</div>
          <div>October 22, 3:00am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
