import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/sections/landing/Landing";
import ProjectShow from "./components/sections/projectShow/ProjectsShow";
import Skill from "./components/sections/skill/Skill";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/footer/Footer";
import Menu from "./Components/Menu/menu";

const App = () => {
  return (
    <div className=" relative ">
      {/* <Navbar/> */}
      <Menu />
      <section className=" relative">
        <Landing />
      </section>

      <section className=" relative">
        <Skill/>
      </section>

      <section className=' relative'>
        <ProjectShow />
      </section>

      <section className=" relative">
        <Contact />
      </section>

      <Footer className=" relative" />
    </div>
  );
};

export default App;
