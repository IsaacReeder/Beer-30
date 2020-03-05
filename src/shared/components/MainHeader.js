import React, { Component } from "react";

import "./MainHeader.css";
import { Box, Heading, Sticky } from "gestalt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "gestalt/dist/gestalt.css";
import WeatherInfo from "./WeatherInfo";
import { faBeer } from "@fortawesome/free-solid-svg-icons";

const Section = ({ children, title }) => (
  <Box padding={2}>
    <Box marginBottom={1}>
      <Heading size="xs">{title}</Heading>
    </Box>
    {children}
  </Box>
);

export default class MainHeader extends Component {
  render() {
    return (
      <div className="header-shadow">
        <Sticky top={1}>
          <Section>
            <Box
              alignItems="center"
              direction="row"
              display="flex"
              marginStart={-1}
              marginEnd={-1}
              shape="rounded"
              color="gray"
              opacity={0.4}
              justifyContent="around"
              height={150}
            >
              <Box padding={1}>
                <FontAwesomeIcon icon={faBeer} size="6x" pull="right" />
              </Box>
              <Box paddingX={1} flex="grow" alignContent="center">
                <h1 className="header-title " align="center">
                  {this.props.title}
                </h1>
                <h3 className="header-tagline " align="center">
                  {this.props.tagline}
                </h3>
              </Box>
              <Box paddingY={1}>
                <WeatherInfo pull="left" />
              </Box>
            </Box>
          </Section>
        </Sticky>
      </div>
    );
  }
}
