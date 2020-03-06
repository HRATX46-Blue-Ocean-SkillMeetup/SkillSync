import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Skill({ getSkills }) {
  const [menteeSkill, setMenteeSkill] = useState([]);
  const [mentorSkill, setMentorSkill] = useState([]);

  useEffect(() => {
    axios
      .get("/getSkills", {
        params: {
          ID: 20
        }
      })
      .then(function(response) {
        const menteeSkill = [];
        const mentorSkill = [];
        response.data.forEach(skill => {
          if (skill.role === "mentee") {
            menteeSkill.push(skill.skill);
          } else {
            mentorSkill.push(skill.skill);
          }
        });
        setMenteeSkill(menteeSkill);
        setMentorSkill(mentorSkill);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  console.log(
    "mentorSkill is",
    Array.isArray(mentorSkill),
    typeof mentorSkill,
    mentorSkill
  );
  const testArray = ["one", "two", "three", "four"];

  return (
    <div>
      <div className="userProfile-overSkill">
        {mentorSkill.map(x => (
          <li className="userProfile-skill">{x}</li>
        ))}
      </div>
    </div>
  );
}
