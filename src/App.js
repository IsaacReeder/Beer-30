import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LandingPage from "./landing/LandingPage";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import ListView from "./search/listView/ListView";
import MainHeader from "./shared/components/MainHeader";
import SearchBar from "./search/components/SearchBar";

const App = () => {
  return (
    <Router>
      <MainHeader />
      <SearchBar />
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
