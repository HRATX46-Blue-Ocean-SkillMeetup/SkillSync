import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "./CustomHooks";

import FrontPage from "./FrontPage.jsx";
import UserProfile from "./UserProfile.jsx";
import LoginPage from "./LoginPage.jsx";
import NavBar from "./NavBar.jsx";
import NewPostForm from "./NewPostForm";
import PostingDetailsContainer from "./PostingDetailsContainer";

export default function App() {
  const [postingId, setPostingId] = useState(4);
  const [photo, setPhoto] = useState("http://lorempixel.com/640/480/");
  const [activity, setActivity] = useState("JavaScript");
  const [mentor, setMentor] = useState("frodriguez");
  const [postingDescription, setPostingDescription] = useState(
    "Fugit excepturi et corporis autem possimus. Aut qui minima aliquam dicta eos. Est consequatur aut adipisci iure qui."
  );
  const [selectedSkill, setSelectedSkill] = useState({});
  const [location, setLocation] = useState("53936");
  const [rating, setRating] = useState(0);
  const [skills, setSkills] = useState([]);
  const [userId, setUserId] = useState(1);

  //submits any input data to the database
  const submit = () => {
    // alert(`${inputs.worldName} has been saved`)
    var info = inputs;
    axios
      .post("http://localhost:4321/submit", info)
      .then(res => {
        // console.log(res);
        done();
      })
      .catch(err => {
        console.error("--> jeepers: ", err);
      });
  };

  const handleChange = event => {
    setPostingDescription(event.target.value);
  };

  const handleSkillChange = event => {
    setSelectedSkill(event.target.value);
  };

  const handleClickPost = event => {
    console.log(selectedSkill);
    console.log(userId);
    console.log(postingDescription);
    axios
      .post("/addPosting", {
        skillId: selectedSkill,
        description: postingDescription,
        userId: userId
      })
      .then();
  };

  //QUERY FOR INDIVIDUAL POSTING
  // axios.get(`/postingData/${postingId}`).then(function(response) {
  //   setPhoto(response.data.user_photo);
  //   setActivity(response.data.skill);
  //   setMentor(response.data.username);
  //   setPostingDescription(response.data.description);
  //   setLocation(response.data.location);
  //   setUserId(response.data.user_id);

  //   axios.get(`/user/rating/${userId}`).then(function(response) {
  //     setRating(response.data[0].rating);
  //   });
  // });

  //QUERY FRO NEW POST FORM
  // axios.get(`/getSkills/${userId}`).then(function(response) {
  //   const skillsArray = [];
  //   response.data.forEach(obj => {
  //     skillsArray.push({
  //       skill: obj.skill,
  //       id: obj.skill_id
  //     });
  //   });
  //   setSkills(skillsArray);
  // });

  //initializes the custom form hook
  const { inputs, handleInputChange, handleSubmit } = useForm(submit);

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
  // <NewPostForm
  //   skills={skills}
  //   skillDescription={postingDescription}
  //   handleChange={handleChange}
  //   selectedSkill={selectedSkill}
  //   handleSkillChange={handleSkillChange}
  //   handleClickPost={handleClickPost}
  // />

  //Search Results

  //Individual Posting

  // <PostingDetailsContainer
  //     photo={photo}
  //     activity={activity}
  //     mentor={mentor}
  //     location={location}
  //     rating={rating}
  //   />

  /*Leave a Review*/

  return (
    <div>
      <NavBar
        dot={true}
        inputs={inputs}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
