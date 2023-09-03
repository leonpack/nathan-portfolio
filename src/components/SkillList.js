import React from "react";
import Skill from "./Skill";
import SkillData from "../data/skill-data";


function SkillList() {
    return (
        <div className="skill-list">
            {SkillData.map(skill => (
                <Skill skillObj = {skill} key={skill.name} />
            ))}
        </div>
    )
}

export default SkillList;