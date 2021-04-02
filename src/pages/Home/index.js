import React from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);

  axios
    .get("https://api.zubiaskitchen.com/v1/user/users", {
      // .get("http://127.0.0.1:8001/v1/user/users", {
      withCredentials: true,
    })
    .then((res) => console.log(res))
    .catch((err) => {});

  // axios
  //   // .get("http://167.71.171.235:8001/v1/user/users", {
  //   .get("http://localhost:8001/v1/user/users", {
  //     withCredentials: true,
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // setAuth(true);

  // if (localStorage.jwt) {
  //   const user = jwt.decode(localStorage.jwt);
  //   console.log(user);
  // }

  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create Blog"
          onClick={() => history.push("/create-blog")}
        ></Button>
      </div>
      <Gap height={20}></Gap>
      <div className="content-wrapper">
        <BlogItem></BlogItem>
        <BlogItem></BlogItem>
        <BlogItem></BlogItem>
        <BlogItem></BlogItem>
      </div>
      <div className="pagination">
        <Button title="Previous"></Button>
        <Gap width={20}></Gap>
        <Button title="Next"></Button>
      </div>
      <Gap height={20}></Gap>
      {message}
    </div>
  );
};

export default Home;
