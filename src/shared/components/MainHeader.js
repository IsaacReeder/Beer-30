import React from "react";
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

const MainHeader = props => {
  return (
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
          justifyContent="around"
          height={150}
        >
          <Box padding={1}>
            <FontAwesomeIcon icon={faBeer} size="6x" pull="right" />
          </Box>
          <Box paddingX={1} flex="grow" alignContent="center">
            <h1 className="header-title " align="center">
              {props.title}
            </h1>
            <h3 className="header-tagline " align="center">
              {props.tagline}
            </h3>
          </Box>
          <Box paddingY={1}>
            <WeatherInfo />
          </Box>
        </Box>
      </Section>
    </Sticky>
  );
};

export default MainHeader;
