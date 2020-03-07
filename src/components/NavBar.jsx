import React, { useState, useEffect } from "react";
import NotificationDot from "./NotificationDot.jsx";
import Search from "./Search";

export default function NavBar({
  dot,
  inputs,
  handleInputChange,
  handleSubmit,
  handleSelectPost
}) {
  //will take in a boolean that determines whether notification dot component will be visible

  //should use handleSubmit with custom route for search

  //NAVBARICON IN SEARCH BAR WILL SHOW NAVDRAWER ON PRESS

  return (
    <div className="topBar">
      {/* SEARCH BAR */}
      <Search handleSelectPost={handleSelectPost}/>
      {/* NAVIGATION DRAWER */}
      {/* <div className="navDrawer">
        <span className="navLink">
          MESSAGES{dot ? <NotificationDot /> : <></>}
        </span>
        <hr color="#98C460" />
        <span className="navLink">MY BOOKINGS</span>
        <hr color="#98C460" />
        <span className="navLink">MY PROFILE</span>
        <hr color="#98C460" />
        <span className="navLink">NEW POSTING</span>
        <hr color="#98C460" />

        <div className="navDrawerBottom"><hr color="#98C460"/></div>
      </div> */}
    </div>
  );
}
