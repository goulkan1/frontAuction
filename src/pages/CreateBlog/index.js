import React from "react";
import { Button, Input, Link, Upload } from "../../components";
import { useHistory } from "react-router-dom";

function CreateBlog() {
  const history = useHistory();
  return (
    <div>
      <p>Crete New Blog Post</p>
      <Link title="kembali" onClick={() => history.push("/")}></Link>
      <Input label="Post Title"></Input>
      <Upload></Upload>
      <textarea></textarea>
      <Button title="Save"></Button>
    </div>
  );
}

export default CreateBlog;
