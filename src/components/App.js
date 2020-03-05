import React, { useState, useEffect } from "react";
import axios from "axios";
import Skills from "./userProfile/Skills";
import WantSkills from "./userProfile/WantSkills";

export default function App() {
  useEffect(() => {
    axios
      .get("/getMentorSkills", {
        params: {
          ID: 3
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  return (
    <div>
      <div>
        <Skills />
      </div>
      <div>
        <WantSkills />
      </div>
    </div>
  );
}
