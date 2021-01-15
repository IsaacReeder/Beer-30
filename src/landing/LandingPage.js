import React, { Fragment } from "react";
import "./LandingPage.css";
import Title from "./components/Title";
import LogIn from "../shared/components/LogIn";
import Register from "../shared/components/Register";
import { CSSTransition } from "react-transition-group";

const LandingPage = () => {
  return (
    <div id="app">
      <div className="background">
        <Fragment>
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
          >
            <center>
              <img src={require("../assets/BeerGlasses.png")} alt="Welp"></img>
              <Title />
              <LogIn />
              <Register header="Register" />
            </center>
          </CSSTransition>
        </Fragment>
      </div>
    </div>
  );
};

export default LandingPage;
