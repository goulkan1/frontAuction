import React from "react";
import "./upload.scss";
function Upload() {
  return (
    <div className="upload">
      <img
        className="preview"
        src="https://loremipsum.io/assets/images/lorem-ipsum-magazine-layout.jpg"
        alt="preview"
      ></img>
      <input type="file"></input>
    </div>
  );
}

export default Upload;
