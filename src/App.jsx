import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/sections/landing/Landing";
import ProjectShow from "./components/sections/projectShow/ProjectsShow";
import Skill from "./components/sections/skill/Skill";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/footer/Footer";
import Menu from "./Components/Menu/menu";

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
    <div className=" relative">
      {/* <Navbar/> */}
      <Menu />
      <section className=" relative">
        <Landing />
      </section>

      <section className=" relative">
        <Skill />
      </section>

      <section className=" relative">
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
