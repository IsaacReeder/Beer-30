import React, { Component, Fragment } from "react";

import MainHeader from "./MainHeader";
import SearchBar from "../../search/components/SearchBar";
import BarList from "./BarList";
import Footer from "./Footer";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocationQuery: null
    };
  }

  onFormSubmit = searchLocationQuery => {
    this.setState({
      searchLocationQuery: searchLocationQuery
    });
  };
  render() {
    return (
      <Fragment>
        <MainHeader title="Beer-30" />
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <BarList searchLocationQuery={this.state.searchLocationQuery} />
        <Footer />
      </Fragment>
    );
  }
}

export default MainPage;
