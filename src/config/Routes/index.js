import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Register, Login, MainApp } from "../../pages";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/">
            <MainApp></MainApp>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
