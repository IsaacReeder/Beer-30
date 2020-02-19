import React, { Component } from "react";
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
  faBeer,
  faMapMarkerAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

import LandingPage from "./landing/LandingPage";
// import ListView from "./shared/components/ListView";
// import MainHeader from "./shared/components/MainHeader";
// import SearchBar from "./search/components/SearchBar";
// import Footer from "./shared/components/Footer";
// import BarList from "./shared/components/BarList";
import "../src/shared/components/BarList.scss";
import MainPage from "./shared/components/MainPage";

library.add(fab, faCheckSquare, faCoffee, faBeer, faMapMarkerAlt, faPhone);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocationQuery: null
    };
  }

  onFormSubmit = searchLocationQuery => {
    this.setState({
      searchLocationQuery: searchLocationQuery
    });
  };

  render() {
    return (
      <Router>
        <main>
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/WheresMyBrew" exact>
              <MainPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
