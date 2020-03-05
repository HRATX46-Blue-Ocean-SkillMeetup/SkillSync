import React, { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Axios from "axios";
import Suggestion from "./Suggestion";
import PostingList from "./PostingList";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [postings, setPostings] = useState([]);

  useEffect(() => {
    if (searchTerm === "") {
      if (showSuggestions !== false) setShowSuggestions(false);
      setSearchSuggestions([]);
      return;
    }
    console.log(searchTerm);
    Axios.get("/search", {
      params: {
        searchTerm
      }
    })
      .then(({ data }) => {
        console.log(data);
        const searchSuggestions = [];
        data.forEach(skill => searchSuggestions.push(skill));
        setSearchSuggestions(searchSuggestions);
        if (data.length && showSuggestions !== true) setShowSuggestions(true);
      })
      .catch(err => console.log(err));
  }, [searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleClick = e => {
    console.log(e.target.value);
    const skill_id = e.target.value;
    Axios.get("/postings", {
      params: {
        skill_id
      }
    })
      .then(({ data }) => {
        console.log("postings", data);
        const postings = [];
        data.forEach(skill => postings.push(skill));
        setPostings(postings);
        setShowSuggestions(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="search">
      <div id="searchbar">
        <HamburgerMenu />
        <form role="search" action="/q" acceptCharset="UTF-8" method="GET">
          <div className="search-layout">
            <div className="input-group">
              <label className="sr-only" htmlFor="query_string">
                Search Bar
              </label>
              <input
                type="search"
                name="query_string"
                id="query_string"
                className="form-control card-auto main-search layout-search-input ui-autocomplete-input"
                autoFocus="autofocus"
                autoComplete="off"
                value={searchTerm}
                onChange={e => handleChange(e)}
              ></input>
              <div className="input-group-btn">
                <button
                  aria-label="Search Submit"
                  className="btn btn-default layout-navbar-search-btn"
                  type="submit"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="brand"></div>
      </div>
      <Suggestion
        searchSuggestions={searchSuggestions}
        showSuggestions={showSuggestions}
        handleClick={handleClick}
      />
      <PostingList postings={postings} />
    </div>
  );
};

export default Search;
