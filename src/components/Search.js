import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
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
  );
};

export default Search;
