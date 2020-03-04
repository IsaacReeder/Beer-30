import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";

import MainHeader from "./MainHeader";
import SearchBar from "../../search/components/SearchBar";
import BarList from "./BarList";
import Footer from "./Footer";

import axios from "axios";

class MainPage extends Component {
  state = {
    employees: [],
    toDashboard: false,
    isLoading: false
  };

  constructor(props) {
    super(props);
    this.state = {
      searchLocationQuery: null
    };
    this.url = "https://gowtham-rest-api-crud.herokuapp.com/employees";
    this.token = localStorage.getItem("token");
  }

  onFormSubmit = searchLocationQuery => {
    this.setState({
      searchLocationQuery: searchLocationQuery
    });
  };

  componentDidMount() {
    axios
      .get(this.url, { params: { token: this.token } })
      .then(response => {
        const employees = response.data.data.employees;
        this.setState({ employees });
      })
      .catch(error => {
        this.setState({ toDashboard: true });
        console.log(error);
      });
  }
  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/" />;
    }
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
