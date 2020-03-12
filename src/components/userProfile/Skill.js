import React from "react";

export default function Skill({ mentorSkills }) {

  return (
    <div>
      <div className="userProfile-overSkill">
        {mentorSkills.map((x, index) => (
          <li className="userProfile-skill" key={index}>{x.skill}</li>
        ))}
      </div>
    </div>
  );
}

