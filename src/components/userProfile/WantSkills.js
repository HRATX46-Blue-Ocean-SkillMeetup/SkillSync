import React, { useState, useEffect } from "react";
import axios from "axios";
import LearnSkill from "./LearnSkill";

export default function WantToLearn() {
  return (
    <div>
      <div className="userProfile-want-to-learn-container">
        <div className="userProfile-want-to-learn">I WANT TO LEARN</div>
        <div className="userProfile-learn-skill-container">
          <LearnSkill />
        </div>
      </div>
    </div>
  );
}
//
