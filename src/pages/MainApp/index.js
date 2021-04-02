import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Header } from "../../components";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import "./mainApp.scss";
function MainApp() {
  return (
    <div className="main-app-wrapper">
      <Header></Header>
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route path="/create-blog">
              <CreateBlog></CreateBlog>
            </Route>
            <Route path="/detail-blog">
              <DetailBlog></DetailBlog>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainApp;
