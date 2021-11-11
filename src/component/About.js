import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function About() {
  const [post, setPost] = useState([]);

  async function getData() {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    console.log(result);
    setPost(result.data);
  }

  return (
    <>
      <Navbar />
      <section class="hero-section">
        <p>who we are</p>
        <h1>About the Tesla</h1>
        <h2>Fetching Data from Public API</h2>
        <button type="button" class="btn btn-outline-success btn-lg" onClick={getData}>Fetch</button>
      <div>
        <div className="row">
          <div className="col-10 mx-auto">
            <div class="row">
              {post.slice(0, 9).map((item) => (
                <div class="col-sm-4">
                 <div
                      class="card text-center mt-3"
                      style={{ height: "16rem" }}
                    >
                      <div class="card-header" style={{ fontSize: "18px" }}>
                        {item.title}
                      </div>
                      <div class="card-body">
                        <p class="card-text" style={{ fontSize: "16px" }}>
                          {item.body}
                        </p>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default About;
