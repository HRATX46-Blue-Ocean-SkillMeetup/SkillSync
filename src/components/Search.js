import React, { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import axios from "axios";
import Suggestion from "./Suggestion";
import PostingList from "./PostingList";

const Search = ({handleSelectPost}) => {
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
    axios
      .get("/search", {
        params: {
          searchTerm
        }
      })
      .then(({ data }) => {
        if (data.length === 0) {
          setSearchSuggestions([]);
          setShowSuggestions(false);
          return;
        }
        const searchSuggestions = [];
        data.forEach(skill => searchSuggestions.push(skill));
        setSearchSuggestions(searchSuggestions);
        if (showSuggestions !== true) setShowSuggestions(true);
      })
      .catch(err => console.log(err));
  }, [searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSuggestionClick = e => {
    const skill_id = e.target.value;
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
        setShowSuggestions(false);
      })
      .catch(err => console.log(err));
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
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
                  onClick={handleSearchClick}
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
        handleSuggestionClick={handleSuggestionClick}
      />
      <PostingList postings={postings} handleSelectPost={handleSelectPost}/>
    </div>
  );
};

export default Search;
