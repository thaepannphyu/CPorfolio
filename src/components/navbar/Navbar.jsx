import React, { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../Global/NavLinkSlice";
const Navbar = () => {
  const active = useSelector((state) => state.NavLink.value);
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(0);

  const scrollHandler = () => {
    setScroll(window.scrollY);
    console.log(window.scrollY);
  };
  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      {/* logo */}
      <div className="  z-40 my-4 fixed  left-0 right-0 container mx-auto flex justify-between items-center gap-10 bg-transparent">
        <NavHashLink
          to="#0"
          smooth
          onClick={() => {
            dispatch(setActive(0));
          }}>
          <div
            data-aos="fade-down-right"
            data-aos-duration="1200"
            className="      logo  flex justify-between items-center">
            <div className="  ">
              <p
                className={`${
                  active == 0 && ""
                } btnNav  rounded-3xl text-white dark:text-black flex justify-center items-center  w-28 h-10`}>
                Logo
              </p>
            </div>
          </div>
        </NavHashLink>
        {/* menu */}
        {/*  */}
        <div
          data-aos="fade-down-left"
          data-aos-duration="1200"
          className={`${
            scroll > 600 ? " opacity0" : "opacity-100"
          } w-[60%] hidden bg-black lg:block md:block transition2s shadowBox py-4 rounded`}>
          <ul
            className={`${
              scroll > 600 ? " opacity-0" : "opacity-100"
            }  transition2s flex justify-between items-center gap-5`}>
            <NavHashLink
              to="#0"
              onClick={() => {
                dispatch(setActive(0));
              }}
              smooth>
              <li
                data-aos="fade-down-left"
                data-aos-duration="1200"
                className="btnNav  w-28 h-10 rounded-3xl text-white dark:text-black flex justify-center items-center  ">
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
                } btnNav overflow-hidden  w-28 h-10 rounded-3xl text-white dark:text-black flex justify-center items-center  `}>
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
                className="btnNav  w-28 h-10 rounded-3xl text-white dark:text-black flex justify-center items-center  ">
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
                className="btnNav  w-28 h-10 rounded-3xl text-white dark:text-black flex justify-center items-center  ">
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
                className="btnNav  w-28 h-10 rounded-3xl text-white dark:text-black flex justify-center items-center  ">
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
                } overflow-hidden btnNav  w-28 h-10 rounded-3xl text-white dark:text-black flex justify-center items-center`}>
                Contacts
              </li>
            </NavHashLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
