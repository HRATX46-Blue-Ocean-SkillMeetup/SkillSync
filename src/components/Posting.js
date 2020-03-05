import React from "react";

const Posting = ({ posting }) => {
  return (
    <div>
      <div>{posting.skill}</div>
      <div>{posting.username}</div>
      <div>{posting.location}</div>
      <div>{posting.user_photo}</div>
      <div>{posting.role}</div>
      <div>{posting.creation_date}</div>
    </div>
  );
};

export default Posting;
