import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { BlogItem, Gap, Sidebar } from "../../components";

function DetailBlog() {
  const history = useHistory();
  const { id } = useParams();
  console.log(id);
  const [data, sedivata] = useState();
  const [dataUser, setDatauser] = useState();
  useEffect(async () => {
    try {
      await axios
        .get("http://localhost:8002/v1/project/project/" + id)
        .then((res) => {
          sedivata(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });

      await axios
        .get("http://localhost:8003/v1/taken/bid/" + id)
        .then((res) => {
          setDatauser(res.data);
          console.log(res.data);
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
        {data && (
          <div class="tile is-8 pl-6 is-vertical is-parent">
            <div className=" box border-2 border-green-200" key={data.title}>
              <p className="h-20 overflow-hidden font-medium text-lg text-center">
                {data.title}
              </p>
              <div className="grid grid-cols-1 gap-2 mt-2">
                <div className="w-full font-medium text-white text-center bg-gradient-to-r from-green-400 to-blue-500">
                  {data.category}
                </div>
                <div className="font-medium">{data.method}</div>

                <div className="flex justify-between">
                  <div className="font-medium">Value : </div>
                  <div className="font-medium text-green-400">{data.value}</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Start Date : </div>
                  <div className="font-medium text-green-400">{data.date}</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">End Date : </div>
                  <div className="font-medium text-green-400">
                    {data.endProject}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Expire : </div>
                  <div className="font-medium text-green-400">
                    {data.expires}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Information : </div>
                  <div className="font-medium text-green-400">
                    {data.information}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Term : </div>
                  <div className="font-medium text-green-400">{data.term}</div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="is-vertical is-parent">
                  <div className=" box border-2 border-green-200">
                    Project Owner
                    <div class="card-content">
                      <div class="media">
                        <div class="media-left">
                          <figure class="image is-48x48">
                            <img
                              src="https://bulma.io/images/placeholders/96x96.png"
                              alt="Placeholder image"
                            ></img>
                          </figure>
                        </div>
                        <div class="media-content">
                          <p class="title is-4">John Smith</p>
                          <p class="subtitle is-6">@johnsmith</p>
                          <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-3  is-vertical is-parent">
                <div className=" box border-2 border-green-200">
                  <div className="column">
                    <p className="  ">Accepted Worker</p>
                    <p></p>
                  </div>
                  <div class="buttons">
                    <button
                      class="button is-success"
                      onClick={() => history.push(`/project/bid/${id}`)}
                    >
                      Place New Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="tile is-12 is-parent  ">
              <article class="tile is-child notification is-danger">
                <div class="content"></div>
                <div className="grid grid-cols-1 gap-5   xl:grid-cols-4 2xl:grid-cols-6 ">
                  {dataUser &&
                    dataUser.map((value) => (
                      <Link to={`/profile/${value.userBid._id}`}>
                        <div className="box border-1 border-green-300">
                          <div class="card">
                            <div class="card-image">
                              <figure class="image is-128x128">
                                <img
                                  src="https://bulma.io/images/placeholders/128x128.png"
                                  alt="Placeholder image"
                                />
                              </figure>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-2 mt-2">
                            <div className="w-full font-medium text-white text-center bg-gradient-to-r from-green-400 to-blue-500">
                              {value.category}
                            </div>
                            <div className="font-medium">{value.method}</div>

                            <div className="flex justify-between">
                              <div className="font-medium text-green-400">
                                {value.userBid.nama}
                              </div>
                            </div>
                            <div className="font-medium">Location</div>
                            <div>{value.location}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </article>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DetailBlog;
