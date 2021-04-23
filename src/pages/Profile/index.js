import React from "react";
import { Gap, Sidebar } from "../../components";

function Profile() {
  return (
    <div>
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
          <div class="tile is-4 is-parent pt-4 ">
            <article class="tile is-child notification is-danger">
              <div class="content">
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <label>
                      <strong class="is-size-4">Register</strong>
                      <Gap height={10}></Gap>
                    </label>
                    <div class="field is-grouped is-grouped-multiline">
                      <input
                        class="input tile is-4"
                        type="nama"
                        placeholder="Nama"
                      ></input>
                      <Gap width={10}></Gap>
                      <input
                        class="input tile is-4"
                        type="nama"
                        placeholder="Nama"
                      ></input>
                    </div>
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
                    ></input>

                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
              </div>
              <Gap height={5}></Gap>
              <button class="button is-success">Register</button>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
