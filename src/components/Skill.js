import React from "react";

function Skill({skillObj}) {
    return (
        <div className="skill" style={{ backgroundColor: skillObj.color }}>
            <span> {skillObj.name} </span>
            <span> {skillObj.level} </span>
        </div>
    )
}

export default Skill;