import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "normalize.css";

import Nav from "./Components/Nav";
import LoginPage from "./Views/LoginPage";
import LogoutPage from "./Views/LogoutPage";
import BookPage from "./Views/BookPage";
import SignupPage from "./Views/SignupPage";
import HomePage from "./Views/HomePage";

const GlobalStyles = createGlobalStyle`
html {
  font-size: 62.5%;
}

  body {
    @import url('https://fonts.googleapis.com/css?family=Crimson+Text&display=swap');
    font-family: 'Crimson Text', serif;
    color: #222222;
    background-color: #ffffef;
    font-size: 2.25rem;
  }

  a {
    color: #222222;
  }

  button {
    background-color: #c8ab8c;
    color: #222222;
  }

  img {
    max-width: 100%;
  }
`;

function App() {
  const [loginToken, setLoginToken] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
      <GlobalStyles />
      <Nav token={loginToken} />
      <Switch>
        <Route
          path="/login"
          render={props => (
            <LoginPage {...props} setLoginToken={setLoginToken} />
          )}
        />
        <Route
          path="/logout"
          render={props => (
            <LogoutPage {...props} setLoginToken={setLoginToken} />
          )}
        />
        <Route path="/book/:id" render={props => <BookPage {...props} />} />
        <Route path="/signup" render={props => <SignupPage {...props} />} />
        <Route
          path="/"
          render={props => (
            <HomePage {...props} setLoginToken={setLoginToken} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
