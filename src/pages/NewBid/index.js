import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Sidebar } from "../../components";

function NewBid() {
  const { id } = useParams();
  console.log(id);
  const [data, sedivata] = useState();
  const [title, setTitle] = useState();
  const [user, setUser] = useState();
  const [description, setDescription] = useState();
  const [value, setValue] = useState();
  const [amount, setAmount] = useState();
  const [userId, setUserId] = useState();
  const [prices, setPrices] = useState();
  useEffect(() => {
    try {
      axios
        .get("http://localhost:8002/v1/project/project/" + id)
        .then((res) => {
          sedivata(res.data.data);
          console.log(res.data.data);
          setTitle(res.data.data.title);
          setUser(res.data.data.idUser.nama);
          setDescription(res.data.data.information);
          setValue(res.data.data.value);
          setAmount(res.data.data.amount);
          setUserId(res.data.data.idUser._id);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:8003/v1/taken/taken",
          {
            idProject: id,
            idUser: userId,
            userBid: localStorage.getItem("user"),
            specific: "asd",
            prices: prices,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      throw error;
    }
  };
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
            <div class="content">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <label>
                    <p class="is-size-6">Project Title:</p>
                  </label>
                  <input
                    class="input"
                    type="input"
                    placeholder="Title"
                    control-padding-vertical="10"
                    value={title}
                  ></input>
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <label>
                    <p class="is-size-6">Project Owner:</p>
                  </label>
                  <input
                    class="input"
                    type="input"
                    placeholder="Title"
                    value={user}
                    control-padding-vertical="10"
                  ></input>
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <label>
                    <p class="is-size-6">Description:</p>
                  </label>
                  <input
                    value={description}
                    class="input"
                    type="input"
                    placeholder="Title"
                    control-padding-vertical="10"
                  ></input>
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <label>
                    <p class="is-size-6">Published Budget:</p>
                  </label>
                  <input
                    value={value}
                    class="input"
                    type="input"
                    placeholder="Title"
                    control-padding-vertical="10"
                  ></input>
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <label>
                    <p class="is-size-6">Amount: </p>
                  </label>
                  <input
                    class="input"
                    type="input"
                    placeholder="Title"
                    control-padding-vertical="10"
                    onChange={(e) => {
                      setPrices(e.target.value);
                    }}
                  ></input>
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
                <button
                  class="button is-success"
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default NewBid;
