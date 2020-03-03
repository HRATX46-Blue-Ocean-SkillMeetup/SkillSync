import React from "react";

function NewPostForm(props) {
  return (
    <div className="newPostForm">
      <div className="inputDropdown">
        <label className="newPostText">
          What do you want to teach?
          <select>
            <option value="">choose from your skills</option>
            {props.skills.map(skill => {
              return <option value={skill}>{skill}</option>;
            })}
          </select>
        </label>
      </div>
      <div className="inputText">
        <label className="newPostText">
          Enter a brief description
          <textarea>how long you have practiced this skill, etc</textarea>
        </label>
      </div>
      <button>POST</button>
    </div>
  );
}

export default NewPostForm;
