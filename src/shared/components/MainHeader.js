import React, { Component } from "react";

import "./MainHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "gestalt/dist/gestalt.css";
import WeatherInfo from "./WeatherInfo";
import { faBeer } from "@fortawesome/free-solid-svg-icons";

export default class MainHeader extends Component {
  render() {
    const nameStyle = {
      color: "black",
      textAlign: "center",
      fontFamily: "lobster",
      fontSize: "3rem",
      marginRight: "2rem",
      marginLeft: "2rem"
      // pull: "left"
    };
    return (
      <div className="main-header">
        <FontAwesomeIcon icon={faBeer} size="6x" pull="right" />
        <h1 style={nameStyle} align="center">
          {this.props.title}
        </h1>

        <WeatherInfo pull="right" pull="right" />
      </div>
    );
  }
}
