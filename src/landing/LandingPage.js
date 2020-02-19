import React, { Fragment } from "react";
import "./LandingPage.css";
import Giffy from "./components/Giffy";
import Title from "./components/Title";
import AuthButtons from "./components/AuthButtons";
import Tagline from "./components/Tagline";

const LandingPage = () => {
  return (
    <div className="background">
      <Fragment>
        <center>
          <Title />
          <Giffy />
          <AuthButtons />
          <Tagline />
        </center>
      </Fragment>
    </div>
  );
};

export default LandingPage;
