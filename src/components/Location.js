import React from "react";

function Location(props) {
  return (
    <div>
      <i className="fas fa-map-marker-alt locationSym"></i>
      <p>{props.location}</p>
    </div>
  );
}

export default Location;
