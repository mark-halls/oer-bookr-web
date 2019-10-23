import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./Components/Nav";
import LoginPage from "./Views/LoginPage";
import LogoutPage from "./Views/LogoutPage";
import BookPage from "./Views/BookPage";
import SignupPage from "./Views/SignupPage";
import HomePage from "./Views/HomePage";

function App() {
  const [loginToken, setLoginToken] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
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
        <Route path="/signup" render={props => <SignupPage />} />
        <Route path="/" render={props => <HomePage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
