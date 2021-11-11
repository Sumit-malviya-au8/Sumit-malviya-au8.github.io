import React from "react";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Service from "./component/Service";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
      <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </>
  );
}

export default App;


