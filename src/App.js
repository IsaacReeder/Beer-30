import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LandingPage from "./landing/LandingPage";
import ListView from "./shared/components/ListView";
import MainHeader from "./shared/components/MainHeader";
import SearchBar from "./search/components/SearchBar";
import Footer from "./shared/components/Footer";

const App = () => {
  return (
    <Router>
      <MainHeader />
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
