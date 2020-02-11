import React, { Component } from "react";

import { Box, Text, IconButton } from "gestalt";

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
      <Box
        color="white"
        shape="rounded"
        padding={3}
        display="flex"
        direction="row"
        alignItems="center"
      >
        <Box padding={3}>
          <Text align="center">I am looking for a brewery near</Text>
          {/* <Icon
          icon="flashlight"
          color="red"
          size={20}
          accessibilityLabel="Flashlight"
        /> */}
        </Box>
        {/* <Box flex="grow" paddingX={2}>
          <SearchField
            onSubmit={e => this.handleFormSubmit(e)}
            accessibilityLabel="Search Field"
            id="searchField"
            value={this.state.searchLocationQuery}
            onChange={({ searchLocationQuery }) =>
              this.setState({ searchLocationQuery })
            }
            placeholder="Address, neighborhood, city, province, or postal code"
          />
        </Box> */}
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
              placeholder="address, neighbourhood, city, province or postal code"
              value={this.state.searchLocationQuery}
              onChange={this.handleSearchChange}
              className="searchForm__input"
            />
            <button type="submit" className="searchForm__button">
              Search
              {/* <FontAwesomeIcon
                icon="search-location"
                className="searchForm__icon"
              /> */}
            </button>
          </form>
        </div>
        <Box paddingX={2}>
          <IconButton
            accessibilityLabel="Notifications"
            icon="speech-ellipsis"
            size="md"
          />
        </Box>
        {/* <Box paddingX={2}>
        <IconButton accessibilityLabel="Profile" icon="person" size="md" />
      </Box> */}
      </Box>
    );
  }
}

export default SearchBar;
