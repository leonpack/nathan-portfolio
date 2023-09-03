import React from "react";
import Project from "./Project";
import projectData from "../data/project-data";

function ProjectList() {
    return (
        <div>
            <h1>My Projects</h1>
            {projectData.map(project => (
                <Project  projectObj={project} key={project.name}/>
            ))}    
        </div>
    )
}

export default ProjectList;