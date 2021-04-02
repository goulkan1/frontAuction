import React from "react";
import { useHistory } from "react-router-dom";
function Header() {
  const history = useHistory();
  return (
    // <div classNameName="header">
    //   <p classNameName="logo-app">Auction</p>
    //   <p classNameName="menu-item" onClick={() => history.push("/login")}>
    //     Logout
    //   </p>
    // </div>
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            ></img>
          </a>
        </div>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div id="navbarBasicExample" class="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" onClick={() => history.push("/")}>
              Home
            </a>
            <a className="navbar-item">Home 2</a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a
                  class="button is-primary "
                  onClick={() => history.push("/register")}
                >
                  <strong>Sign up</strong>
                </a>
                <a
                  class="button is-light"
                  onClick={() => history.push("/login")}
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
