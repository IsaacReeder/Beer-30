import React, { Fragment } from "react";
import { Box, Text, Heading } from "gestalt";
import DateInfo from "./Date";

const Section = ({ children, title }) => (
  <Box padding={2}>
    <Box marginBottom={1}>
      <Heading size="xs">{title}</Heading>
    </Box>
    {children}
  </Box>
);

const Footer = () => {
  return (
    <Fragment>
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
          shape="roundedBottom"
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
        </Box>
      </Section>
    </Fragment>
  );
};

export default Footer;
