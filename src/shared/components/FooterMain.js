import React, { Fragment, Component } from "react";
// import { Box, Text, Heading } from "gestalt";
import { Redirect } from "react-router-dom";
import DateInfo from "./Date";
import "./FooterMain.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default class FooterMain extends Component {
  constructor(props) {
    super(props);
    this.handleClickLogout = this.handleClickLogout.bind(this);
  }

  state = {
    toMainPage: false
  };

  handleClickLogout() {
    localStorage.removeItem("token");
    localStorage.setItem("isLoggedIn", false);
    this.setState({ toMainPage: true });
  }

  render() {
    if (this.state.toMainPage === true) {
      return <Redirect to="/" />;
    }

    const dateStyle = {
      color: "black",
      fontFamily: "lobster",
      marginLeft: "25%",
      marginRight: "30%"
    };
    const nameStyle = {
      color: "black",
      textAlign: "center",
      fontFamily: "lobster",
      pull: "left"
    };
    return (
      <Fragment>
        <div className="footer">
          <h2 style={nameStyle}>Isaac Reeder</h2>
          <h1 style={dateStyle}>
            <DateInfo />
          </h1>
          <FontAwesomeIcon
            icon={faSignOutAlt}
            size="3x"
            // pull="right"
            to={"/"}
            onClick={this.handleClickLogout}
          />
        </div>
      </Fragment>
    );
  }
}
