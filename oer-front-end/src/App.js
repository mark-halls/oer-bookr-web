import React from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./Components/Nav";
import LoginPage from "./Views/LoginPage";
import BookPage from "./Views/BookPage";
import SignupPage from "./Views/SignupPage";
import HomePage from "./Views/HomePage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/login" render={props => <LoginPage {...props} />} />
        <Route path="/book/:id" render={props => <BookPage {...props} />} />
        <Route path="/signup" render={props => <SignupPage {...props} />} />
        <Route path="/" render={props => <HomePage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
