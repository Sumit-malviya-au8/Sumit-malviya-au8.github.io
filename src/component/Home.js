import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section class="hero-section">
        <p>Welcome to</p>
        <h1>Tesla Vehicle</h1>
        <iframe
          width="320"
          height="300"
          src="https://www.youtube.com/embed/XB2g7-HgE_g?controls=0&loop=1&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

export default Home;
