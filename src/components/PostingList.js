import React from "react";
import Posting from "./Posting";

const PostingList = ({ postings, handleSelectPost }) => {
  return (
    <div className="postings">
      <ul className="postings-list">
        {postings.length > 0 &&
          postings.map(posting => (
            <Posting
              posting={posting}
              handleSelectPost={handleSelectPost}
              key={posting.posting_id}
            />
          ))}
      </ul>
    </div>
  );
};

export default PostingList;
