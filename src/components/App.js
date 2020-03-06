import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "./CustomHooks";

import FrontPage from "./FrontPage.jsx";
import UserProfile from "./UserProfile.jsx";
import LoginPage from "./LoginPage.jsx";
import NavBar from "./NavBar.jsx";
import Skills from "./userProfile/Skills";
import WantSkills from "./userProfile/WantSkills";

export default function App() {
  //submits any input data to the database
  // const submit = () => {
  //   // alert(`${inputs.worldName} has been saved`)
  //   var info = inputs;
  //   axios
  //     .post("http://localhost:4321/submit", info)
  //     .then(res => {
  //       // console.log(res);
  //       done();
  //     })
  //     .catch(err => {
  //       console.error("--> jeepers: ", err);
  //     });
  // };

  // useEffect(() => {
  //   axios
  //     .get("/getSkills", {
  //       params: {
  //         ID: 4
  //       }
  //     })
  //     .then(function(response) {
  //       console.log(response);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // });

  //initializes the custom form hook
  // const { inputs, handleInputChange, handleSubmit } = useForm(submit);

  //ROUTES

  //Navigation Bar -- takes in boolean; whether there's a new message; contains search bar
  // <NavBar dot={true} />

  //Front Page
  // <FrontPage />

  //Messages List

  //Single Chat

  //Log In / Sign up, takes in custom form hooks
  /*<LoginPage 
        inputs={inputs}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}/>*/

  //Create Account

  //User Profile
  // <UserProfile />

  //My Bookings

  //New Post

  //Search Results

  //Individual Posting

  /*Leave a Review*/

  return (
    <div>
      {/* <NavBar 
          dot={true}
          inputs={inputs}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}/> */}
      <Skills />
      <WantSkills />
    </div>
  );
}
