import React, { useState } from "react";
import { Footer, Header, Sidebar } from "../../components";
import { Gap, Input, Link } from "../../components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwt from "jwt-decode";
import { useCookies } from "react-cookie";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  axios.default.withCredentials = true;
  const login = () => {
    axios
      .post(
        "https://api.zubiaskitchen.com/v1/auth/login",
        // "http://127.0.0.1:8001/v1/auth/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
      });
  };

  const history = useHistory();
  return (
    <div>
      <Header></Header>
      <div class="tile is-ancestor">
        <div class="tile is-3 pl-6 is-vertical is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Project</p>
              <Sidebar></Sidebar>
              <div class="content"></div>
            </div>
          </article>
        </div>
        <div class="tile is-3 is-parent pt-4 ">
          <article class="tile is-child notification is-danger">
            <div class="content">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <label>
                    <strong class="is-size-4">Email</strong>
                    <Gap height={10}></Gap>
                  </label>
                  <input
                    class="input"
                    type="email"
                    placeholder="Email"
                    control-padding-vertical="10"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                  <Gap height={10}></Gap>
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
            </div>
            <label class="checkbox">
              <input type="checkbox"></input> Remember Me
            </label>
            <Gap height={10}></Gap>
            <button class="button is-success" onClick={login}>
              Login
            </button>
          </article>
        </div>
        <div class="tile is-5 is-parent pt-4 ">
          <article class="tile is-child notification is-danger">
            <div class="content"></div>
            <p>
              Tips Keamanan Jagalah kerahasiaan akun Anda. Jangan memberitahukan
              password kepada orang lain. Gantilah password secara berkala untuk
              mengurangi resiko pembajakan akun oleh orang lain. Hindari memakai
              password yang mudah ditebak, seperti tanggal lahir, nama anda,
              kata-kata umum, dsb. Projects.co.id tidak pernah meminta username
              dan password Anda melalui email. Jika ada email seperti itu,
              jangan di-klik link di dalamnya, karena kemungkinan besar adalah
              upaya phising. Sebelum login, pastikan dahulu bahwa URL di browser
              diawali https://projects.co.id, bukan yang lainnya.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Login;
