import React, { useContext } from "react";
import NotificationDot from "./NotificationDot.jsx";
import { Link } from "react-router-dom";
import { socket } from "./AppRouter.jsx";

const NavDrawer = ({
  dot,
  showNavDrawer,
  loggedIn,
  handleNavDrawerClick,
  userInfo,
  dispatchContext
}) => {
  const handleLogout = () => {
    dispatchContext({ type: "logout" });
    socket.emit("logout", userInfo.user_id);
  };
  if (!loggedIn) {
    return (
      <div
        className="navDrawer"
        style={showNavDrawer ? { display: "block" } : { display: "none" }}
      >
        <Link to="/login/" onClick={handleNavDrawerClick}>
          <span className="navLink">LOGIN</span>
        </Link>
        <hr color="#98C460" />
        <Link to="/signup/" onClick={handleNavDrawerClick}>
          <span className="navLink">SIGN UP</span>
        </Link>
        <hr color="#98C460" />
        <Link to="/">
          <span className="navLink" onClick={handleNavDrawerClick}>
            HOME
          </span>
        </Link>
        <hr color="#98C460" />
      </div>
    );
  } else {
    return (
      <div
        className="navDrawer"
        style={showNavDrawer ? { display: "block" } : { display: "none" }}
      >
        <Link to="/message/log/" onClick={handleNavDrawerClick}>
          <span className="navLink">
            MESSAGES{dot ? <NotificationDot /> : <></>}
          </span>
        </Link>
        <hr color="#98C460" />
        <Link to="/newpost/" onClick={handleNavDrawerClick}>
          <span className="navLink">NEW POSTING</span>
        </Link>
        <hr color="#98C460" />
        <Link
          to={`/profile/${userInfo.username}/`}
          onClick={handleNavDrawerClick}
        >
          <span className="navLink">MY PROFILE</span>
        </Link>
        <hr color="#98C460" />
        <Link to="/">
          <span className="navLink" onClick={handleNavDrawerClick}>
            HOME
          </span>
        </Link>
        <hr color="#98C460" />
        <Link to="/">
          <span className="navLink" onClick={handleLogout}>
            LOGOUT
          </span>
        </Link>
        <hr color="#98C460" />
      </div>
    );
  }
};
export default NavDrawer;
