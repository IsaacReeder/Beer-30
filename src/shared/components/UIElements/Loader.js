import React, { Component } from "react";
import { BeatLoader } from "react-spinners";
import { Box } from "gestalt";

export default class Loader extends Component {
  render() {
    return (
      <Box
        position="fixed"
        dangerouslySetInlineStyle={{
          __style: {
            bottom: 559,
            left: "50%",
            transform: "translateX(-50%)"
          }
        }}
      >
        <BeatLoader color="black" size={50} margin="3px" />;
      </Box>
    );
  }
}
