import React from "react";
import "./blogitem.scss";

function BlogItem() {
  return (
    <div className="blog-item">
      <img
        src="https://loremipsum.io/assets/images/lorem-ipsum-magazine-layout.jpg"
        alt="post"
      ></img>
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author Blog - Date post</p>
        <p className="body">Lorem ipsum</p>
      </div>
    </div>
  );
}

export default BlogItem;
