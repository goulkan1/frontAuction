import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Sidebar } from "../../components";

function ProfilePublic() {
  const { id } = useParams();
  const [nama, setNama] = useState();
  console.log(id);
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8001/v1/user/user/` + id, {
          withCredentials: true,
        })
        .then((res) => {
          setNama(res.data.nama);
          console.log(res.data.nama);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
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

        <div class="tile is-8 is-parent pt-4 ">
          <article class="tile is-child notification is-danger">
            <div class="tile">
              <div class="tile is-parent is-7">
                <article class="tile is-child notification is-primary">
                  <p class="title">Vertical...</p>
                  <p class="subtitle"></p>
                </article>
              </div>

              <div class="tile is-parent is-5">
                <article class="tile is-child notification is-primary">
                  <div class="card">
                    <button class="button is-success">Hire Me</button>
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img
                          src="https://bulma.io/images/placeholders/1280x960.png"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media">
                        <div class="media-left">
                          <figure class="image is-48x48">
                            <img
                              src="https://bulma.io/images/placeholders/96x96.png"
                              alt="Placeholder image"
                            />
                          </figure>
                        </div>
                        <div class="media-content">
                          <p class="title is-4">{nama}</p>
                          <p class="subtitle is-6">@johnsmith</p>
                        </div>
                      </div>
                      <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                      </div>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th>Display Name</th>
                            <th>condcond</th>
                          </tr>
                          <tr>
                            <th>Display Name</th>
                            <th>condcond</th>
                          </tr>
                          <tr>
                            <th>Display Name</th>
                            <th>condcond</th>
                          </tr>
                          <tr>
                            <th>Display Name</th>
                            <th>condcond</th>
                          </tr>
                          <tr>
                            <th>Display Name</th>
                            <th>condcond</th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default ProfilePublic;
