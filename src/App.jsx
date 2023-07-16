import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/sections/landing/Landing";
import ProjectShow from "./components/sections/projectShow/ProjectsShow";
import Skill from "./components/sections/skill/Skill";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/footer/Footer";
import Menu from "./Components/Menu/menu";
import Education from "./components/sections/education/Education";
import About from "./components/sections/about/About";
import "./components/darkMode/darkMode.css";

const App = () => {
  return (
    // bg-[rgb(206,205,194)]  bg-[rgb(24,24,24)]

    <div className=" relative bg-white dark:bg-[rgb(24,24,24)] ">
      {<Navbar />}

      {/* <Menu /> */}
      {/* <section id="0" className=" relative">
        <Landing />
      </section>

      <section id="1" className=" relative">
        <About />
      </section>

      <section id="2" className=" relative">
        <Education />
      </section> */}

      <section id="3" className=" relative">
        <Skill />
      </section>

      <section id="4" className=" relative">
        <ProjectShow />
      </section>

      <section id="5" className=" ">
        <Contact />
      </section>

      <Footer className=" relative" />
    </div>
  );
};

export default App;
