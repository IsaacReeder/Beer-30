import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import MainNavigation from "./shared/components/MainNavigation";
import LandingPage from "./landing/LandingPage";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import ListView from "./search/listView/ListView";
import MapView from "./search/mapView/MapView";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/sign-up" exact>
            <SignUp />
          </Route>
          <Route path="/search/list-view" exact>
            <ListView />
          </Route>
          <Route path="/search/map-view" exact>
            <MapView />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
