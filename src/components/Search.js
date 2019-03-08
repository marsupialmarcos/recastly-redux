import React from 'react';
import SearchContainer from '../containers/SearchContainer.js';

var Search = ({ handleSearchInputChange, value }) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      value={value}
      onChange={(value) => handleSearchInputChange(value)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
