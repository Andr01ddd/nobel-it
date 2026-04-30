import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.js";
import Home from "./components/Home.js";
import About from "./about-us/about.js";
import Contact from "./contact-us/contact.js";
import Services from "./services/service.js";
import Technical from "./courses/technical.js";
import Personality from "./courses/personality.js";
import NonTechnical from "./courses/non-technical.js";

function App() {
  return (
    <>
      <BrowserRouter basename="/nobel-it">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="technical-courses" element={<Technical />} />
          <Route path="personality-development-courses" element={<Personality />} />
          <Route path="non-technical-courses" element={<NonTechnical />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

