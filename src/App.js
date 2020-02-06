import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faBeer
} from "@fortawesome/free-solid-svg-icons";

import LandingPage from "./landing/LandingPage";
import ListView from "./shared/components/ListView";
import MainHeader from "./shared/components/MainHeader";
import SearchBar from "./search/components/SearchBar";
import Footer from "./shared/components/Footer";

library.add(fab, faCheckSquare, faCoffee, faBeer);

const App = () => {
  return (
    <Router>
      <MainHeader title="Beer-30" tagline="Lets Grab a drink" />
      <SearchBar />
      <ListView />
      <Footer />
      <main>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/search" exact>
            <ListView />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
