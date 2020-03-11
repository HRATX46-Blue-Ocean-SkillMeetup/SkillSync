import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { UserState } from "./AppRouter.jsx";

function NewPostForm(props) {
  const [selectedSkill, setSelectedSkill] = useState({});
  const [skills, setSkills] = useState([]);
  const [newDescription, setNewDescription] = useState("");
  const context = useContext(UserState);
  const { userInfo } = context;
  const { user_id } = userInfo;

  // const { userInfo} = useContext(UserState);
  // const user_id = userInfo.user_id;

  const handleChange = event => {
    setNewDescription(event.target.value);
  };

  const handleSkillChange = event => {
    setSelectedSkill(event.target.value);
  };

  const handleNewPostClick = event => {
    console.log(selectedSkill);
    console.log(newDescription);
    axios
      .post("/addPosting", {
        skillId: selectedSkill,
        description: newDescription,
        userId: user_id
      })
      .then();
  };

  useEffect(() => {
    axios.get(`/getSkills/${user_id}`).then(function(response) {
      const skillsArray = [];
      response.data.forEach(obj => {
        skillsArray.push({
          skill: obj.skill,
          id: obj.skill_id
        });
      });
      setSkills(skillsArray);
    });
  }, []);

  return (
    <div className="posting-mainContainer">
      <h1 className="posting-header">New Post</h1>
      <div className="posting-newForm">
        <div className="posting-inputDropdown">
          <p className="posting-newPostText">What do you want to teach?</p>
          <select onChange={handleSkillChange} className="posting-dropdown">
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
        <div className="posting-inputText">
          <p className="posting-newPostText">Enter a brief description:</p>
          <textarea
            className="posting-newPostDescription"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="posting-postButton" onClick={handleNewPostClick}>
          POST
        </button>
      </div>
    </div>
  );
}

export default NewPostForm;
