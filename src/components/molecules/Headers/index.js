import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Gap } from "../../atoms";

const Header = ({ user, userLogout }) => {
  const history = useHistory();
  const [register, setRegister] = useState();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    user = localStorage.getItem("user");
    if (user) {
      setIsLogin(true);
    }
  }, [user]);
  console.log(isLogin);
  const logout = (e) => {
    e.preventDefault();
    fetch("https://api.zubiaskitchen.com/v1/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((response) => {
      localStorage.clear();
      setIsLogin(false);
      console.log("logout");
      userLogout();
      history.push("/login");
    });
  };

  return (
    <div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              maxHeight="70px"
              class="py-2 px-2"
            ></img>
          </a>
          <a class="navbar-burger" href="#">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className="navbar-start">
          <a className="navbar-item" onClick={() => history.push("/")}>
            Home
          </a>
          <a className="navbar-item">Home 2</a>
        </div>

        <div className="navbar-end">
          <a
            className={`button is-light ${isLogin ? "is-hidden" : ""}`}
            onClick={() => history.push("/register")}
          >
            Sign up
          </a>
          <a
            className={`button is-light ${isLogin ? "is-hidden" : ""}`}
            onClick={() => history.push("/login")}
          >
            Log in
          </a>
          <Gap width={30}></Gap>
          <a
            className={`button is-light ${isLogin ? "" : "is-hidden"}`}
            onClick={logout}
          >
            Log out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
