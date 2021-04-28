import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Header, Sidebar } from "../../components";
import CreateProject from "../CreateProject";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import Profile from "../Profile";
function MainApp() {
  return (
    <div className="main-app-wrapper">
      <div className="content-wrapper"></div>
      <div>
        <div class="tile is-ancestor">
          <div class="tile is-3 pl-6 is-vertical is-parent">
            <article class="tile is-child ">
              <div class="content">
                <p class="title">Project</p>
                <Sidebar></Sidebar>
                <div class="content"></div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainApp;
