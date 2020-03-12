import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LearnSkill({ menteeSkills }) {
  return (
    <div>
      <div className="userProfile-overLearn">
        {menteeSkills.map(x => (
          <li className="userProfile-learn-skill">{x.skill}</li>
        ))}
      </div>
    </div>
  );
}
