import React, { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import axios from "axios";
import Suggestion from "./Suggestion";
import { Link } from "react-router-dom";

const Search = ({ handleNavDrawerClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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

  const handleSuggestionClick = () => {
    setShowSuggestions(false);
  };

  const handleSearchClick = () => {
    setShowSuggestions(false);
  };

  return (
    <div className="search">
      <div id="searchbar">
        <HamburgerMenu handleNavDrawerClick={handleNavDrawerClick} />
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
                <Link
                  to={{
                    pathname: `/search/postings/`,
                    state: {
                      searchTerm
                    }
                  }}
                  onClick={handleSearchClick}
                >
                  <button
                    aria-label="Search Submit"
                    className="btn btn-default layout-navbar-search-btn"
                    type="submit"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
        <div className="brand"></div>
      </div>
      <Suggestion
        searchSuggestions={searchSuggestions}
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
        handleSuggestionClick={handleSuggestionClick}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Search;
