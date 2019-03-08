import React from 'react';

Search() => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      value={this.state.value}
      onChange={this.handleInputChange.bind(this)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
