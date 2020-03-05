import React, { useState, useEffect } from "react";
import NotificationDot from "./NotificationDot.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function NavBar({dot, inputs, handleInputChange, handleSubmit, handleNavClick}) {
  //will take in a boolean that determines whether notification dot component will be visible

  //should use handleSubmit with custom route for search

  //NAVBARICON IN SEARCH BAR WILL SHOW NAVDRAWER ON PRESS

  if (!inputs.showNavDrawer) {
    return (

      <div className="topBar">
        {/* SEARCH BAR */}
        <div className="searchBarContainer">
          <img name="showNavDrawer" onClick={handleNavClick} className="navClosed" src="imgs/logos/navBarClosed.png" width="35px" height="38px"/>
          {dot ? <NotificationDot/> : <></>}

          <form onSubmit={handleSubmit}>
          <input
            className="inputText" 
            name="searchQuery"
            placeholder="search skills"
            onChange={handleInputChange}
            value={inputs.searchQuery}
            ></input>

          <button className="searchButton"><img src="imgs/logos/searchButton.png" height="35px"/></button>
          </form>

        </div>
    </div>

    )
    

  } else {

    return (

      <div className="topBar">
        {/* SEARCH BAR */}
        <div className="searchBarContainer">
          
          <img name="showNavDrawer" onClick={handleNavClick} className="navClosed" src="imgs/logos/navBarClosed.png" width="35px" height="38px"/>
          {dot ? <NotificationDot/> : <></>}
          <form onSubmit={handleSubmit}>
          <input
            className="inputText" 
            name="searchQuery"
            placeholder="search skills"
            onChange={handleInputChange}
            value={inputs.searchQuery}
            ></input>

          <button className="searchButton"><img src="imgs/logos/searchButton.png" height="35px"/></button>
          </form>
   
        </div>
        {/* NAVIGATION DRAWER */}
        <div className="navDrawer">
          <span className="navLink">
            {/* <Link to="/"> */}
              MESSAGES{dot ? <NotificationDot/> : <></>}
            {/* </Link>  */}
          </span>
            <hr color="#98C460"/>
          <span className="navLink">
          MY BOOKINGS
          </span>
            <hr color="#98C460"/>
          <span className="navLink">
          MY PROFILE
          </span>
            <hr color="#98C460"/>
          <span className="navLink">
          NEW POSTING
          </span>
            <hr color="#98C460"/>
          <span className="navLink">
          
          </span>
          
          <div className="navDrawerBottom">
            {/* <hr color="#98C460"/> */}
          </div>
        </div>
      </div>

    );

  }

}