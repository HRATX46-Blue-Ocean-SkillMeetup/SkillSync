import React, { useState, useEffect } from "react";
import NotificationDot from "./NotificationDot.jsx";
import Search from "./Search";
import NavDrawer from "./NavDrawer";

export default function NavBar({ dot, handleSelectPost, loggedIn, userInfo }) {
  const [showNavDrawer, setShowNavDrawer] = useState(false);

  const handleNavDrawerClick = () => {
    setShowNavDrawer(!showNavDrawer);
  };
  return (
    <div className="topBar">
      <Search
        handleSelectPost={handleSelectPost}
        handleNavDrawerClick={handleNavDrawerClick}
      />
      <NavDrawer
        dot={dot}
        showNavDrawer={showNavDrawer}
        loggedIn={loggedIn}
        handleNavDrawerClick={handleNavDrawerClick}
        userInfo={userInfo}
      />
    </div>
  );
}
