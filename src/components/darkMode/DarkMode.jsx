import React, { useEffect, useState } from "react";
import "./darkMode.css";
import { FiMoon } from "react-icons/fi";
import { BiSolidSun } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../Global/NavLinkSlice";

const DarkMode = () => {
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  // );

  const theme = useSelector((state) => state.NavLink.theme);
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const dispatch = useDispatch();
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
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };
  console.log(theme);
  return (
    <div className="">
      <button
        onClick={handleThemeSwitch}
        className={`${
          theme === "dark"
            ? " bg-gray-700 text-gray-400 box-shadow3"
            : " bg-gray-50 text-yellow-400 box-shadow2"
        } w-10 h-10 rounded-full flex justify-center items-center`}>
        {theme === "dark" ? (
          <FiMoon className=" text-2xl" />
        ) : (
          <BiSolidSun className=" text-2xl" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
