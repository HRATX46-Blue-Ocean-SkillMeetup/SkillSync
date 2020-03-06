import React from "react";

function NewPostForm(props) {
  return (
    <div className="newPostForm">
      <div className="inputDropdown">
        <p className="newPostText">What do you want to teach?</p>
        <select onChange={props.handleSkillChange}>
          <option value="">Choose from your skills</option>
          {props.skills.map((skill, index) => {
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
        <textarea onChange={props.handleChange}>
          {props.skillDescription}
        </textarea>
      </div>
      <button onClick={props.handleClickPost}>POST</button>
    </div>
  );
}

export default NewPostForm;
