import axios from "axios";
import React, { useState } from "react";
import { Sidebar } from "../../components";

function CreateProject() {
  const [title, setTitle] = useState();
  const [information, setInformation] = useState();
  const [deadline, setDeadline] = useState();
  const [category, setCategory] = useState();
  const [value, setValue] = useState();
  const [payment, setPayment] = useState();
  const [location, setLocation] = useState();
  const [qualification, setQualification] = useState();
  const [term, setTerm] = useState();
  const [idUser, setIdUser] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(
          "http://localhost:8002/v1/project/project",
          {
            title: title,
            information: information,
            deadline: deadline,
            category: category,
            value: value,
            payment: payment,
            location: location,
            qualification: qualification,
            term: term,
            idUser: localStorage.getItem("user"),
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {}
  };

  return (
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
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <label>
                <p class="is-size-6">Title</p>
              </label>
              <input
                class="input"
                type="input"
                placeholder="Title"
                control-padding-vertical="10"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
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
                <p class="is-size-6">information</p>
              </label>
              <input
                class="input"
                type="information"
                placeholder="information"
                control-padding-vertical="10"
                value={information}
                onChange={(e) => {
                  setInformation(e.target.value);
                }}
              ></input>
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>

          <div className="field is-horizontal columns">
            <label className="field-label column is-4">Deadline</label>
            <div className="control column is-8 is-flex is-justify-content-space-between">
              <input
                type="date"
                value={deadline}
                onChange={(e) => {
                  setDeadline(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <label>
                <p class="is-size-6">category</p>
              </label>
              <input
                class="input"
                type="email"
                placeholder="Email"
                control-padding-vertical="10"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
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
                <p class="is-size-6">Budget</p>
              </label>
              <input
                class="input"
                type="email"
                placeholder="Email"
                control-padding-vertical="10"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
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
                <p class="is-size-6">payment</p>
              </label>
              <input
                class="input"
                type="email"
                placeholder="Email"
                control-padding-vertical="10"
                value={payment}
                onChange={(e) => {
                  setPayment(e.target.value);
                }}
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
                <p class="is-size-6">location</p>
              </label>
              <input
                class="input"
                type="email"
                placeholder="Email"
                control-padding-vertical="10"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
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
                <p class="is-size-6">qualification</p>
              </label>
              <input
                class="input"
                type="email"
                placeholder="Email"
                control-padding-vertical="10"
                value={qualification}
                onChange={(e) => {
                  setQualification(e.target.value);
                }}
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
                <p class="is-size-6">term</p>
              </label>
              <input
                class="input"
                type="email"
                placeholder="Email"
                control-padding-vertical="10"
                value={term}
                onChange={(e) => {
                  setTerm(e.target.value);
                }}
              ></input>
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <button class="button is-success" onClick={(e) => handleSubmit(e)}>
            Save
          </button>
        </article>
      </div>
    </div>
  );
}

export default CreateProject;
