import React from "react";

const HamburgerMenu = ({ handleNavDrawerClick }) => {
  return (
    <div className="hamburger-container" onClick={() => handleNavDrawerClick()}>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
    </div>
  );
};

export default HamburgerMenu;
