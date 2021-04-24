import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogItem() {
  const [asd, sedivata] = useState();
  useEffect(() => {
    try {
      axios
        .get("http://localhost:8002/v1/project/projects")
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
      {asd &&
        asd.map((value) => (
          <Link to={`/project/${value._id}`}>
            <div
              className="h-72 box border-2 border-green-200"
              key={value.title}
            >
              <p className="h-20 overflow-hidden font-medium text-lg text-center">
                {value.title}
              </p>
              <div className="grid grid-cols-1 gap-2 mt-2">
                <div className="w-full font-medium text-white text-center bg-gradient-to-r from-green-400 to-blue-500">
                  {value.category}
                </div>
                <div className="font-medium">{value.method}</div>

                <div className="flex justify-between">
                  <div className="font-medium">Value : </div>
                  <div className="font-medium text-green-400">
                    {value.value}
                  </div>
                </div>
                <div className="font-medium">Location</div>
                <div>{value.location}</div>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}

export default BlogItem;
