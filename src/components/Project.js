import React from "react";

function Project({projectObj}) {
    return (
        <div>
            <h3>{projectObj.name}</h3>
            <p><h4>Brief description:</h4> {projectObj.description} </p>
            <p><h4>Tech usage:</h4> {projectObj.tech} </p>
            <p><h4>Members:</h4> {projectObj.members}</p>
            <span><h4>Duration:</h4> {projectObj.duration}  <h4>Reference:</h4><a href={projectObj.reference}>{projectObj.name}</a></span>
            <p></p>
        </div>
    )
}

export default Project;