import React, { useState } from "react";
import { Button, Gap, Header, Input, Link, Sidebar } from "../../components";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const history = useHistory();
  const register = async () => {
    try {
      await axios
        .post(
          "http://localhost:8001/v1/auth/register",
          {
            email: email,
            nama: nama,
            password: password,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log("salah");
    }
  };
  return (
    <div>
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
                    <strong class="is-size-4">Register</strong>
                    <Gap height={10}></Gap>
                  </label>
                  <input
                    class="input"
                    type="nama"
                    placeholder="Nama"
                    onChange={(e) => {
                      setNama(e.target.value);
                    }}
                  ></input>
                  <Gap height={5}></Gap>
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
                    type="Email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                  <Gap height={5}></Gap>
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
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
            <Gap height={5}></Gap>
            <button class="button is-success" onClick={register}>
              Register
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

export default Register;
