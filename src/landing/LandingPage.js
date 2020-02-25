import React, { Fragment } from "react";
import "./LandingPage.css";
import Giffy from "./components/Giffy";
import Title from "./components/Title";
import LogInForm from "./components/LogInForm";
import Register from "../shared/components/Register";

const LandingPage = () => {
  return (
    // <div className="background">
    <Fragment>
      <center>
        <Title title="Beer-30" Tagline="Let's grab a drink" />
        <Giffy />
        <LogInForm />
        <Register />
      </center>
    </Fragment>
    // </div>
  );
};

export default LandingPage;
