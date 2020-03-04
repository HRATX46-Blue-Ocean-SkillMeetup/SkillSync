import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";

export default function App() {
  useEffect(() => {
    axios
      .get("/test")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  return (
    <div>
      <Search />
    </div>
  );
}
