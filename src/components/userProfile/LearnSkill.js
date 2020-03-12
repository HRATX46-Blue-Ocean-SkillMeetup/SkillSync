import React from "react";

export default function LearnSkill({ menteeSkills }) {
  return (
    <div>
      <div className="userProfile-overLearn">
        {menteeSkills.map((x, index) => (
          <li className="userProfile-learn-skill" key={index}>{x.skill}</li>
        ))}
      </div>
    </div>
  );
}
