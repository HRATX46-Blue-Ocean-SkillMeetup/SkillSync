import React from "react";
import { Link } from "react-router-dom";

const Suggestion = ({
  searchSuggestions,
  handleSuggestionClick,
  searchTerm,
  showSuggestions
}) => {
  return (
    <div
      className="search-suggestions"
      style={showSuggestions ? { display: "block" } : { display: "none" }}
    >
      <ul className="search">
        {searchSuggestions.length > 0 &&
          searchSuggestions.map(({ skill, skill_id }) => (
            <Link
              to={{
                pathname: `/search?q=${searchTerm}`,
                state: {
                  skill_id: skill_id
                }
              }}
              onClick={handleSuggestionClick}
              key={skill_id}
            >
              <li className="suggestion-item" value={skill_id}>
                {skill}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Suggestion;
