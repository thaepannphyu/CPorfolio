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

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  onWindowMatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };



  return (
    // bg-[rgb(206,205,194)]  bg-[rgb(24,24,24)]




    <div className=" relative bg-light">



      {/* {<Navbar/>} */}

      <Menu />
      <section id="0" className=" relative">
        <Landing />
      </section>

      <section id="0" className=" relative">
        <About />
      </section>

      <section id="1" className=" relative">
        <Skill />
      </section>

      <section id="2" className=" relative">
        <ProjectShow />
      </section>


      <section className=" relative">

        <Education />
      </section>

      

      <section id="3" className=" relative">

        <Contact />
      </section>

      <Footer className=" relative" />
    </div>
  );
};

export default App;
