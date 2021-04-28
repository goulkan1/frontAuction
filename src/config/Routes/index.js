import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../../components";
import { Register, Login, MainApp, Profile, Home } from "../../pages";
import CreateProject from "../../pages/CreateProject";
import DetailBlog from "../../pages/DetailBlog";
import NewBid from "../../pages/NewBid";
import ProfilePublic from "../../pages/ProfilePublic";

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
      <section>
        <Router>
          <Header user={user} userLogout={userLogout}></Header>
          <Switch>
            <Route path="/login">
              <Login userLogin={userLogin}></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/create">
              <CreateProject></CreateProject>
            </Route>
            <Route path="/project/bid/:id">
              <NewBid></NewBid>
            </Route>
            <Route path="/project/:id">
              <DetailBlog></DetailBlog>
            </Route>
            <Route path="/project">
              <Home></Home>
            </Route>
            <Route exact path="/profile">
              <Profile></Profile>
            </Route>
            <Route path="/profile/:id">
              <ProfilePublic></ProfilePublic>
            </Route>
            <Route exact path="/">
              <MainApp></MainApp>
            </Route>
          </Switch>
        </Router>
      </section>
    </div>
  );
};

export default Routes;
