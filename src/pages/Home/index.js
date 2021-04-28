import React from "react";
import { BlogItem, Gap, Pagination, Sidebar } from "../../components";
import "./home.scss";

const Home = () => {
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
            <div class="content"></div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
              <BlogItem />
            </div>
            <Pagination />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;
