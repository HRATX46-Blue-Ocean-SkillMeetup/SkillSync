import React, { useState, useEffect } from "react";
import axios from "axios";
import NewPostForm from "./newPostForm";
import PostingDetailsContainer from "./postingDetailsContainer";
import PostingResult from "./PostingResult";

export default function App() {
  const [data, setData] = useState("agata d");
  const [photo, setPhoto] = useState(
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const [activity, setActivity] = useState("Violin");
  const [mentor, setMentor] = useState("Hannah");
  const [location, setLocation] = useState("Austin, Tx");
  const [rating, setRating] = useState(5);
  const [skills, setSkills] = useState(["Polish", "Japanase", "cooking"]);

  useEffect(() => {
    axios
      .get("/test")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios.get("/postingData/15").then(function(response) {
      setActivity(response.data.skill);
    });
  });

  return (
    <div>
      <div>Hello World</div>
      {/* <PostingDetailsContainer
        data={data}
        photo={photo}
        activity={activity}
        mentor={mentor}
        location={location}
        rating={rating}
      /> */}
      {/* <NewPostForm skills={skills} /> */}
    </div>
  );
}
