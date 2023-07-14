import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../Global/NavLinkSlice";
const Navbar = () => {
  const active = useSelector((state) => state.NavLink.value);
  const dispatch = useDispatch();
  return (
    <div className="fixed  z-50 left-0 top-0 right-0 mb-5">
      <div className=" container mx-auto flex justify-between items-center gap-10">
        {/* logo */}
        <NavHashLink
          to="#0"
          smooth
          onClick={() => {
            dispatch(setActive(0));
          }}>
          <div
            data-aos="fade-down-right"
            data-aos-duration="1200"
            className="  shadowBox py-4 rounded w-[20%] flex justify-between items-center">
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
        <div
          data-aos="fade-down-left"
          data-aos-duration="1200"
          className=" w-[60%] shadowBox py-4 rounded">
          <ul className=" flex justify-between items-center">
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
                className="btnNav  w-28 h-10 rounded-3xl text-white dark:text-black flex justify-center items-center  ">
                Skill
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
                Projects
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
                className={`${
                  active == 3 && ""
                } overflow-hidden btnNav  w-28 h-10 rounded-3xl text-white dark:text-black flex justify-center items-center`}>
                Contacts
              </li>
            </NavHashLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
