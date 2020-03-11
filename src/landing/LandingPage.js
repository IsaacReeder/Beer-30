import React, { Fragment } from "react";
import "./LandingPage.css";
import Giffy from "./components/Giffy";
import Title from "./components/Title";
import LogIn from "../shared/components/LogIn";

import Register from "../shared/components/Register";

const LandingPage = () => {
  return (
    <div id="app">
      <div className="background">
        <Fragment>
          <center>
            <img src={require("../assets/BeerGlasses.png")} alt="BEER-30"></img>
            <Title />
            <Giffy />
            <LogIn />
            <Register header="Register" />
          </center>
        </Fragment>
      </div>
    </div>
  );
};

export default LandingPage;
