import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BlogItem, Gap, Pagination, Sidebar } from "../../components";

function DetailBlog() {
  const { id } = useParams();
  console.log(id);
  const [asd, sedivata] = useState();
  useEffect(async () => {
    try {
      await axios
        // http://localhost:8002/v1/project/project/605dd52b2afbed28100e6a0c
        .get("http://localhost:8002/v1/project/project/" + id)
        .then((res) => {
          sedivata(res.data.data);
          console.log(res.data.data);
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
      {asd && (
        <div className="h-72 box border-2 border-green-200" key={asd.title}>
          <p className="h-20 overflow-hidden font-medium text-lg text-center">
            {asd.title}
          </p>
          <div className="grid grid-cols-1 gap-2 mt-2">
            <div className="w-full font-medium text-white text-center bg-gradient-to-r from-green-400 to-blue-500">
              {asd.category}
            </div>
            <div className="font-medium">{asd.method}</div>

            <div className="flex justify-between">
              <div className="font-medium">Value : </div>
              <div className="font-medium text-green-400">{asd.value}</div>
            </div>
            <div className="font-medium">Location</div>
            <div>{asd.location}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailBlog;
