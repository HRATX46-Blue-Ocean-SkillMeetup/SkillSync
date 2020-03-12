import React from "react";

function Location({ city, state }) {
  return (
    <div className="posting-locationContainer">
      <i className="fas fa-map-marker-alt locationSym"></i>
      <p className="posting-zipcode">{`${city}, ${state}`}</p>
    </div>
  );
}

export default Location;
