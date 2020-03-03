import React from "react";

function Location(props) {
  return (
    <div>
      <div className="locationSym">
        <img src="https://via.placeholder.com/15" alt="" />
      </div>
      <p>{props.location}</p>
    </div>
  );
}

export default Location;
