import React from "react";

function Location(props) {
  return (
    <div className="posting-locationContainer">
      <i className="fas fa-map-marker-alt locationSym"></i>
      <p className="posting-zipcode">{props.location}</p>
    </div>
  );
}

export default Location;
