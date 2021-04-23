import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../../components";
import { Register, Login, MainApp, Profile } from "../../pages";

const Routes = () => {
  const [user, setUser] = useState();
  const userLogin = () => {
    setUser(localStorage.getItem("user"));
    console.log(user);
  };
  const userLogout = () => {
    setUser(undefined);
  };
  return (
    <div>
      <Router>
        <Header user={user} userLogout={userLogout}></Header>
        <Switch>
          <Route path="/login">
            <Login userLogin={userLogin}></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
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
