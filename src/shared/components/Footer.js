import React, { Fragment, Component } from "react";
import { Box, Text, Heading } from "gestalt";
import { Link, Redirect } from "react-router-dom";
import DateInfo from "./Date";
import "./Footer.scss";

const Section = ({ children, title }) => (
  <Box padding={2}>
    <Box marginBottom={1}>
      <Heading size="xs">{title}</Heading>
    </Box>
    {children}
  </Box>
);

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
    return (
      <Fragment>
        <div className="footer"></div>
        <Section>
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
            <Link
              to={"#"}
              onClick={this.handleClickLogout}
              className="dropdown-item"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              Logout
            </Link>
          </Box>
        </Section>
      </Fragment>
    );
  }
}
