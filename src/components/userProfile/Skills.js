import React, { useState, useEffect } from "react";
import axios from "axios";
import Skill from "./Skill.js";

export default function Skills({mentorSkills}) {
  return (
    <div>
      <div className="userProfile-skills-container">
        <div className="userProfile-skills">SKILLS I TEACH</div>
        <div className="userProfile-skill-container">
          <Skill mentorSkills={mentorSkills}/>
        </div>
      </div>
    </div>
  );
}
//
