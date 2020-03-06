import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LearnSkill() {
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
            mentorSkill.push(skill.skill);
          } else {
            menteeSkill.push(skill.skill);
          }
        });
        setMenteeSkill(menteeSkill);
        setMentorSkill(mentorSkill);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  console.log(mentorSkill);
  console.log(menteeSkill);

  const testArray = ["one", "two", "three", "four"];
  return (
    <div>
      <div className="userProfile-overLearn">
        {menteeSkill.map(x => (
          <li className="userProfile-learn-skill">{x}</li>
        ))}
      </div>
    </div>
  );
}
