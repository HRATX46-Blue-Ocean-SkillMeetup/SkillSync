import React from "react";
import NotificationDot from "./NotificationDot.jsx";

const NavDrawer = ({ dot, showNavDrawer }) => {
  return (
    <div
      className="navDrawer"
      style={showNavDrawer ? { display: "block" } : { display: "none" }}
    >
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
    </div>
  );
};

export default NavDrawer;
