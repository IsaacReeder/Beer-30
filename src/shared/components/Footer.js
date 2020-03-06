import React, { Fragment, Component } from "react";
// import { Box, Text, Heading } from "gestalt";
import { Link, Redirect } from "react-router-dom";
import DateInfo from "./Date";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
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
      color: "white",
      fontFamily: "lobster"
    };
    const nameStyle = {
      color: "white",
      textAlign: "center",
      fontFamily: "lobster"
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
            pull="right"
            to={"/"}
            onClick={this.handleClickLogout}
          />
          {/* <Link
            to={"/"}
            onClick={this.handleClickLogout}
            // className="dropdown-item"
            // data-toggle="modal"
            // data-target="#logoutModal"
          >
            Logout
          </Link> */}
        </div>
        {/* <Section>
          <Box />
          <Box
            paddingX={1}
            alignItems="center"
            direction="row"
            display="flex"
            marginStart={-1}
            marginEnd={-1}
            height={100}
            shape="rounded"
            color="gray"
          >
            <Box paddingX={1}>
              <Text weight="bold" align="center">
                Isaac Reeder
              </Text>
              <Text align="center">Software Developer</Text>
              <Text align="center">2020</Text>
              <DateInfo />
            </Box>
            {/* logoutbutton */}
        {/* <Link
              to={"#"}
              onClick={this.handleClickLogout}
              className="dropdown-item"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              Logout
            </Link>
          </Box> */}
        {/* </Section>  */}
      </Fragment>
    );
  }
}
