import axios from "axios";
import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components";
import moment from "moment";

function Profile() {
  const [data, sedivata] = useState();
  const id = localStorage.getItem("user");
  const [nama, setNama] = useState();
  const [email, setEmail] = useState();
  const [date, setDate] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [website, setWebsite] = useState();
  const [about, setAbout] = useState();
  const handleProfile = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(
          // v1/auth/islogin
          "http://localhost:8001/v1/auth/login",
          // "http://127.0.0.1:8001/v1/auth/login",
          {
            email: email,
          },
          { withCredentials: true }
        )
        .then((response) => {});
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8001/v1/user/user/` + id, {
          withCredentials: true,
        })
        .then((res) => {
          sedivata(res.data);
          console.log(res.data);
          setNama(res.data.nama);
          setEmail(res.data.email);
          setAddress(res.data.address);
          setWebsite(res.data.website);
          setPhone(res.data.phone);
          setAbout(res.data.about);
          setDate(moment(res.data.dob).format("YYYY-MM-DD"));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
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
              <div class="content"></div>
              <div className="container box">
                <div className="columns">
                  <div className="column has-text-xl">Profil</div>
                </div>
                <div className="columns">
                  <div className="column">
                    Kelola informasi profil Anda untuk mengontrol, melindungi
                    dan mengamankan akun
                  </div>
                </div>
                <div className="columns">
                  <form className="column is-8">
                    <div className="field is-horizontal columns">
                      <label className="field-label column is-4">Name</label>
                      <div className="control column is-8">
                        <input
                          className="input"
                          type="text"
                          placeholder="Name"
                          value={nama}
                          onChange={(e) => {
                            setNama(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="field is-horizontal columns">
                      <label className="field-label column is-4">Email</label>
                      <div className="control column is-8">
                        <input
                          className="input"
                          type="email"
                          placeholder="e.g. name@example.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="field is-horizontal columns">
                      <label className="field-label column is-4">Address</label>
                      <div className="control column is-8">
                        <textarea
                          className="textarea"
                          type="address"
                          placeholder=""
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="field is-horizontal columns">
                      <label className="field-label column is-4">Website</label>
                      <div className="control column is-8">
                        <input
                          className="input"
                          type="website"
                          placeholder="google.com"
                          value={website}
                          onChange={(e) => {
                            setWebsite(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="field is-horizontal columns">
                      <label className="field-label column is-4">
                        Phone Number
                      </label>
                      <div className="control column is-8">
                        <input
                          className="input"
                          type="number"
                          placeholder="e.g. 08123456789"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="field is-horizontal columns">
                      <label className="field-label column is-4">Gender</label>
                      <div className="control column is-8">
                        <label class="radio">
                          <input type="radio" name="gender" value="Male" />
                          Male
                        </label>
                        <label class="radio">
                          <input type="radio" name="gender" value="Female" />
                          Female
                        </label>
                      </div>
                    </div>

                    <div className="field is-horizontal columns">
                      <label className="field-label column is-4">
                        Date of Birth
                      </label>
                      <div className="control column is-8 is-flex is-justify-content-space-between">
                        <input type="date" value={date}></input>
                      </div>
                    </div>

                    <div className="field is-horizontal columns">
                      <label className="field-label column is-4">About</label>
                      <div className="control column is-8">
                        <textarea
                          className="textarea"
                          type="About"
                          placeholder="About"
                          value={about}
                          onChange={(e) => {
                            setAbout(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </form>

                  <div className="column ml-4 is-flex is-justify-content-center is-align-items-center">
                    <div>
                      <div className="is-flex is-justify-content-center">
                        <div className="image is-128x128 ">
                          <img
                            src="https://bulma.io/images/placeholders/128x128.png"
                            className=""
                          />
                        </div>
                      </div>
                      <div class="file mt-2">
                        <label className="file-label">
                          <input
                            className="file-input"
                            type="file"
                            name="resume"
                          />
                          <span className="file-cta">
                            <span className="file-icon">
                              <i className="fas fa-upload"></i>
                            </span>
                            <span className="file-label">Choose a file…</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column has-text-xl">
                    <button className="button is-primary">Save</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
