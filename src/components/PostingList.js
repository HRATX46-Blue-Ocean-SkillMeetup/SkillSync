import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Posting from "./Posting";
import axios from "axios";

const PostingList = () => {
  const [postings, setPostings] = useState([]);
  const location = useLocation();
  const { skill_id, searchTerm } = location.state;

  useEffect(() => {
    if (skill_id) {
      axios
        .get("/postings", {
          params: {
            skill_id
          }
        })
        .then(({ data }) => {
          const postings = [];
          data.forEach(skill => postings.push(skill));
          setPostings(postings);
        })
        .catch(err => console.log(err));
    } else {
      axios
        .get("/search/postings", {
          params: {
            searchTerm
          }
        })
        .then(({ data }) => {
          const postings = [];
          data.forEach(skill => postings.push(skill));
          setPostings(postings);
        })
        .catch(err => console.log(err));
    }
  }, [location]);

  return (
    <div className="postings">
      <ul className="postings-list">
        {postings.length > 0 &&
          postings.map(posting => (
            <Link
              to={{
                pathname: `/postings/${posting.posting_id}`,
                state: {
                  posting
                }
              }}
              key={posting.posting_id}
            >
              <Posting posting={posting} key={posting.posting_id} />
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default PostingList;
