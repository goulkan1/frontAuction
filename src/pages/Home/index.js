import React from "react";
import { BlogItem, Button, Gap, Header, Sidebar } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [message, setMessage] = useState("");
  const [data, sedivata] = useState();

  // useEffect(() => {
  //   try {
  //     axios
  //       .get("http://localhost:8002/v1/project/projects")
  //       .then((res) => {
  //         sedivata(res.data);
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);
  const history = useHistory();
  return (
    <div>
      <div class="tile is-ancestor">
        <Gap height={20}></Gap>
        <div class="tile is-3 pl-6 is-vertical is-parent">
          <article class="tile is-child notification is-success">
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
              <BlogItem />
            </div>
          </article>
        </div>
      </div>
      <div className="pagination">
        <Button utton title="Previous"></Button>
        <Gap width={20}></Gap>
        <Button title="Next"></Button>
      </div>
    </div>
  );
};

export default Home;
