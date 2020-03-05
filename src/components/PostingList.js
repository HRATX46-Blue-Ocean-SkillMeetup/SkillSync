import React from "react";
import Posting from "./Posting"

const PostingList = ({ postings }) => {
  return (
    <div className="postings">
      <ul className="postings-list">
        {postings.length > 0 &&
          postings.map(posting => <Posting posting={posting} />)}
      </ul>
    </div>
  );
};

export default PostingList;
