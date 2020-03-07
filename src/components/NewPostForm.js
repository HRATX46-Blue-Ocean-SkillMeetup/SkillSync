import React, { useState, useEffect } from "react";
import axios from "axios";

function NewPostForm(props) {
  const [selectedSkill, setSelectedSkill] = useState({});
  const [skills, setSkills] = useState([]);
  const [newDescription, setNewDescription] = useState("");

  const handleChange = event => {
    setNewDescription(event.target.value);
  };

  const handleSkillChange = event => {
    setSelectedSkill(event.target.value);
  };

  const handleNewPostClick = event => {
    console.log(selectedSkill);
    console.log(props.userId);
    console.log(newDescription);
    axios
      .post("/addPosting", {
        skillId: selectedSkill,
        description: newDescription,
        userId: props.userId
      })
      .then();
  };

  useEffect(() => {
    axios.get(`/getSkills/${props.userId}`).then(function(response) {
      const skillsArray = [];
      response.data.forEach(obj => {
        skillsArray.push({
          skill: obj.skill,
          id: obj.skill_id
        });
      });
      setSkills(skillsArray);
    });
  });

  return (
    <div className="newPostForm">
      <div className="inputDropdown">
        <p className="newPostText">What do you want to teach?</p>
        <select onChange={handleSkillChange}>
          <option value="">Choose from your skills</option>
          {skills.map((skill, index) => {
            return (
              <option key={index} value={skill.id}>
                {skill.skill}
              </option>
            );
          })}
        </select>
      </div>
      <div className="inputText">
        <p className="newPostText">Enter a brief description</p>
        <textarea onChange={handleChange}>{props.skillDescription}</textarea>
      </div>
      <button onClick={handleNewPostClick}>POST</button>
    </div>
  );
}

export default NewPostForm;
