import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../Global/NavLinkSlice";
const Navbar = () => {
  const active = useSelector((state) => state.NavLink.value);
  const dispatch = useDispatch();
  return (
    <>
      {/* logo */}
      <div className=" my-4 z-40  fixed top-0 left-0 right-0 container mx-auto flex justify-between items-center gap-10 bg-transparent">
        <NavHashLink
          to="#0"
          smooth
          onClick={() => {
            dispatch(setActive(0));
          }}>
          <div
            data-aos="fade-down-right"
            data-aos-duration="1200"
            className=" z-50     logo  flex justify-between items-center">
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
      </div>
      {/* menu */}
      <div className=" z-50  container mx-auto flex flex-row-reverse justify-between items-center ">
        <div
          data-aos="fade-down-left"
          data-aos-duration="1200"
          className=" w-[60%] hidden md:block lg:block shadowBox py-4 rounded">
          <ul className=" flex justify-between items-center gap-5">
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
                }btnNav overflow-hidden  w-28 h-10 rounded-3xl text-white dark:text-black flex justify-center items-center  `}>
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
