import React from "react";

const Suggestion = ({
  searchSuggestions,
  showSuggestions,
  handleSuggestionClick
}) => {
  return (
    <div
      className="search-suggestions"
      style={showSuggestions ? { display: "block" } : { display: "none" }}
    >
      <ul className="search">
        {searchSuggestions.length > 0 &&
          searchSuggestions.map(({ skill, skill_id }) => (
            <li
              className="suggestion-item"
              key={skill_id}
              value={skill_id}
              onClick={handleSuggestionClick}
            >
              {skill}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Suggestion;
