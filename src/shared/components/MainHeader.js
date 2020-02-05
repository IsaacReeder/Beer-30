import React from "react";
import "./MainHeader.css";
import { Box, Heading, Text, Icon, Sticky } from "gestalt";
import "gestalt/dist/gestalt.css";
import WeatherInfo from "./WeatherInfo";
import DateInfo from "./Date";

const Section = ({ children, title }) => (
  <Box padding={2}>
    <Box marginBottom={1}>
      <Heading size="xs">{title}</Heading>
    </Box>
    {children}
  </Box>
);

const MainHeader = () => {
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
          <Box paddingX={1}>
            <Icon
              icon="flash"
              accessibilityLabel="Flash"
              color="blue"
              size="100"
            />
          </Box>
          <Box paddingX={1} flex="grow">
            {/* <Text align="center">Tuesday, Feb 4, 200020</Text> */}
            <DateInfo />
            <Text weight="bold" align="center">
              BEER-30
            </Text>
            <Text align="center">Lets grab a drink</Text>
          </Box>
          <Box paddingX={1}>
            {/* <Icon
              icon="alert"
              accessibilityLabel="Alert"
              color="blue"
              size="50"
            /> */}
            {/* <Text align="center">Current weather</Text> */}

            <WeatherInfo />
          </Box>
        </Box>
      </Section>
    </Sticky>
  );
};

export default MainHeader;
