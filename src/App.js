import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState, useQuery } from "react";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import Home from "./Pages/Home";
import Movies from "./components/Movies";
import Details from "./components/Details";
import Shows from "./components/Shows";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container-fluid movie-app">
        <NavBar />
        <Switch>
        <Route path="/movies/:id" exact>
            <Details url="movies" />
          </Route>
          <Route path="/shows/:id" exact>
            <Details url="shows" />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/shows" exact>
            <Shows />
          </Route>
     
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
