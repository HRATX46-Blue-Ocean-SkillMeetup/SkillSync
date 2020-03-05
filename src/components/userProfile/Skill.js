import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Skill({ getSkills }) {
  const [skill, setSkill] = useState("a sample");

  return (
    <div>
      <div className="userProfile-skill">{skill}</div>
    </div>
  );
}
