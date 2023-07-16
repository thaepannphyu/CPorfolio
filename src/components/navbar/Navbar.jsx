import React, { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setActive, setMenu } from "../../Global/NavLinkSlice";
import DarkMode from "../darkMode/DarkMode";
import { CgMenuRight } from "react-icons/cg";
const Navbar = () => {
  const active = useSelector((state) => state.NavLink.value);
  const dispatch = useDispatch();
  // const [scroll, setScroll] = useState(0);

  // const scrollHandler = () => {
  //   setScroll(window.scrollY);
  //   console.log(window.scrollY);
  // };
  // window.addEventListener("scroll", scrollHandler);
  const menuBarger = useSelector((state) => state.NavLink.menuBarger);
  // console.log(menuBarger);
  return (
    <div className="z-40 * py-4 absolute top-0 left-0 right-0 ">
      {/* logo */}
      <div className=" container  mx-auto flex justify-between items-center gap-10 ">
        <NavHashLink
          to="#0"
          smooth
          onClick={() => {
            dispatch(setActive(0));
          }}>
          <div
            data-aos="fade-down-right"
            data-aos-duration="1200"
            className="logo flex gap-3 justify-between items-center">
            <div className="">
              <p
                className={`${
                  active == 0 && ""
                } btnNav  rounded-3xl text-black dark:text-white flex justify-center items-center  px-4 h-10`}>
                Logo
              </p>
            </div>
            <DarkMode />
          </div>
        </NavHashLink>
        {/* menu */}
        {/*  ${
            scroll > 500 ? " opacity0" : "opacity-100"
          } */}
        <div
          data-aos="fade-down-left"
          data-aos-duration="1200"
          className={`lg:w-[60%] md:w-[80%] hidden bg-violet-200 dark:bg-transparent  lg:block md:block transition2s shadowBox py-4 rounded`}>
          <ul
            className={`  transition2s flex justify-between pC items-center md:gap-3 lg:gap-5 `}>
            <NavHashLink
              to="#0"
              onClick={() => {
                dispatch(setActive(0));
              }}
              smooth>
              <li
                data-aos="fade-down-left"
                data-aos-duration="1200"
                className="btnNav text-black dark:text-white pC  px-4 h-10 rounded-3xl  flex justify-center items-center  ">
                <p> Home</p>
              </li>
            </NavHashLink>
            <NavHashLink
              to="#1"
              onClick={() => {
                dispatch(setActive(1));
              }}
              smooth>
              <li
                data-aos="fade-down-left"
                data-aos-duration="1200"
                className={` ${
                  active == 1 && " "
                } btnNav text-black dark:text-white  pC overflow-hidden px-4 h-10 rounded-3xl  flex justify-center items-center  `}>
                About
              </li>
            </NavHashLink>
            <NavHashLink
              to="#2"
              onClick={() => {
                dispatch(setActive(2));
              }}
              smooth>
              <li
                data-aos="fade-down-left"
                data-aos-duration="1200"
                className="btnNav text-black dark:text-white  pC px-4 h-10 rounded-3xl  flex justify-center items-center  ">
                Education
              </li>
            </NavHashLink>

            <NavHashLink
              to="#3"
              onClick={() => {
                dispatch(setActive(3));
              }}
              smooth>
              <li
                data-aos="fade-down-left"
                data-aos-duration="1200"
                className="btnNav text-black dark:text-white pC  px-4 h-10 rounded-3xl  flex justify-center items-center  ">
                Skill
              </li>
            </NavHashLink>

            <NavHashLink
              to="#4"
              onClick={() => {
                dispatch(setActive(4));
              }}
              smooth>
              <li
                data-aos="fade-down-left"
                data-aos-duration="1200"
                className="btnNav text-black dark:text-white  pC  px-4 h-10 rounded-3xl  flex justify-center items-center  ">
                Projects
              </li>
            </NavHashLink>

            <NavHashLink
              to="#5"
              onClick={() => {
                dispatch(setActive(5));
              }}
              smooth>
              <li
                data-aos="fade-down-left"
                data-aos-duration="1200"
                className={`${
                  active == 4 && ""
                } text-black dark:text-white pC  overflow-hidden btnNav  px-4 h-10 rounded-3xl  flex justify-center items-center`}>
                Contacts
              </li>
            </NavHashLink>
          </ul>
        </div>
        {/* sm buurger */}
        <div
          data-aos="fade-down-left"
          data-aos-duration="1200"
          onClick={() => dispatch(setMenu(!menuBarger))}
          className={`px-4 block bg-violet-50 dark:bg-transparent  lg:hidden md:hidden transition2s shadowBox py-4 rounded`}>
          <div>
            <CgMenuRight className=" inline hover:text-rose-800 text-3xl text-rose-400 text-shadow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
