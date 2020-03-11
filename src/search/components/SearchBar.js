import React, { Component } from "react";

import { Box } from "gestalt";

import "./SearchBar.scss";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchLocationQuery: ""
    };
  }

  handleSearchChange = e => {
    this.setState({
      searchLocationQuery: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.searchLocationQuery);
  };
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <Box
          shape="rounded"
          padding={3}
          display="flex"
          direction="row"
          alignItems="center"
        >
          {/* /////////////////////////// */}
          <div className="searchForm">
            {/*add an event listener of form submit so the state only get set when the form is submitted*/}
            <form onSubmit={e => this.handleFormSubmit(e)}>
              <label
                htmlFor="location"
                arialabel="enter address, neighbourhood, city, province or postal code"
                className="searchForm__label"
              ></label>
              <input
                type="text"
                id="location"
                placeholder="address, city, or postal code"
                value={this.state.searchLocationQuery}
                onChange={this.handleSearchChange}
                className="searchForm__input"
              />
              <button type="submit" className="searchForm__button">
                Search
              </button>
            </form>
          </div>
        </Box>
      </React.Fragment>
    );
  }
}

export default SearchBar;
