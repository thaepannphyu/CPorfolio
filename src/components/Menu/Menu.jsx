import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillHome,
  AiOutlineMail,
  AiOutlineContacts,
  AiFillFolderOpen,
  AiOutlineUser,
} from "react-icons/ai";
import { SlGraduation } from "react-icons/sl";
import { NavHashLink as NavLink } from "react-router-hash-link";
// import { HashNavigations as NavLink } from "swiper/modules";
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../Global/NavLinkSlice";

const Menu = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [toogle, settoogle] = useState(false);
  const active = useSelector((state) => state.NavLink.value);
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(0);

  const scrollHandler = () => {
    setScroll(window.scrollY);
    // console.log(window.scrollY);
  };
  window.addEventListener("scroll", scrollHandler);

  let x = windowSize.width - 220;
  let xS = windowSize.width - 150;
  let ys = windowSize.height - 280;
  let y = windowSize.height - 200;
  const setPosition = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    x = windowSize.width - 220;
    xS = windowSize.width - 150;
    y = windowSize.height - 200;
    ys = windowSize.height - 280;
  };

  window.addEventListener("resize", setPosition);
  const menuBarger = useSelector((state) => state.NavLink.menuBarger);
  // console.log(scroll > 50 || menuBarger == true);
  // useEffect(() => {
  //   // console.log(scroll);
  //   if (0 > scroll / 600) {
  //     dispatch(setActive(0));
  //   }
  //   if (0 < scroll / 600 < 1) {
  //     dispatch(setActive(1));
  //   }
  //   if (1 < scroll / 600 < 2) {
  //     dispatch(setActive(2));
  //   }
  //   if (2 < scroll / 600 < 3) {
  //     dispatch(setActive(3));
  //   }
  //   if (3 < scroll / 600 < 4) {
  //     dispatch(setActive(4));
  //   }
  //   if (4 < scroll / 600 < 5) {
  //     dispatch(setActive(5));
  //   }
  //   console.log(0 > scroll / 600);
  // }, [scroll]);
  return (
    <Draggable
      axis="y"
      // handle=".handle"
      defaultClassNameDragging="drag"
      defaultClassNameDragged="dragend"
      defaultPosition={
        windowSize.width > 600 ? { x, y: y * 0.5 } : { x: xS, y: y * 0.5 }
      }
      bounds={
        windowSize.width > 600
          ? { top: 10, bottom: y }
          : { top: 20, bottom: ys }
      }>
      <div className={`fixed z-50 `}>
        <div
          className={`${
            scroll > 50 || menuBarger == true ? " opacity-100 " : " opacity-0"
          }  menu  transition2s  py-1 bg-transparent flex flex-col  justify-center items-center h-[200px] w-[200px]`}>
          <div
            id="#drag1"
            onClick={() => {
              settoogle(!toogle);
            }}
            className={`${
              toogle == true ? " " : " md:scale-125 lg:scale-125 scale-110"
            }  relative z-40  w-10 h-10 bg-pink-200 dark:bg-black parentMenu  transition2s shadow rounded-[50%] flex justify-center items-center`}>
            <AiOutlineMenu
              id="#drag2"
              className={`lg:text-2xl md:text-lg  transition-all absolute ${
                toogle == true ? " opacity-0" : " "
              } dark:text-cyan-600 text-cyan-400  back-shadow8`}
            />

            <AiOutlineClose
              className={`lg:text-2xl md:text-lg transition-all absolute ${
                toogle == false ? " opacity-0" : ""
              } dark:text-cyan-600 text-cyan-400  back-shadow8 `}
            />
          </div>
          <ul
            className={` max-sm:rotate
             flex justify-center items-center `}>
            <NavLink
              to="#0"
              onClick={() => {
                dispatch(setActive(0));
              }}
              smooth>
              <li
                style={{ "--i": 1 }}
                className={`${
                  toogle == true
                    ? "lg:li md:li liHalf opacity-100"
                    : "  liS  opacity-0"
                } parentMenu absolute w-10 h-10  rounded-[50%] flex justify-center items-center`}>
                <div className="  flex  justify-center flex-col items-center">
                  <div
                    className={`${
                      active == 0 && "selected"
                    } btn w-10 parentMenu   h-10 bg-pink-200 dark:bg-black  rounded-[50%] flex justify-center items-center`}>
                    <AiFillHome
                      className={`${
                        toogle == true && "md:inner  lg:inner innerS"
                      }  text-2xl parentMenu  dark:text-cyan-600  text-cyan-400 back-shadow8`}
                    />
                  </div>
                  <p
                    className={` childMenu dark:text-cyan-600  text-cyan-400 absolute top-[19%] left-[-144%] md:top-[-14%] lg:top-[-14%] md:left-[-96%] lg:left-[-96%] md:inner lg:inner specialRotate`}>
                    Home
                  </p>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="#1"
              onClick={() => {
                dispatch(setActive(1));
              }}
              smooth>
              <li
                style={{ "--i": 2 }}
                className={`${
                  toogle == true
                    ? "lg:li md:li liHalf opacity-100"
                    : "  liS opacity-0"
                } parentMenu absolute w-10 h-10  rounded-[50%] flex justify-center items-center`}>
                <div className="  flex  justify-center flex-col items-center">
                  <div
                    className={`${
                      active == 1 && "selected"
                    } btn  w-10 parentMenu   h-10 bg-pink-200 dark:bg-black  rounded-[50%] flex justify-center items-center`}>
                    <AiOutlineUser
                      className={`${
                        toogle == true && "md:inner  lg:inner innerS"
                      }  text-2xl parentMenu  dark:text-cyan-600 text-cyan-400 back-shadow8`}
                    />
                  </div>
                  <p
                    className={`dark:text-cyan-600 text-cyan-400 childMenu absolute top-[16%] left-[-133%] md:top-[69%] lg:top-[69%] md:left-[-89%] lg:left-[-89%] md:inner lg:inner specialRotate`}>
                    About
                  </p>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="#2"
              onClick={() => {
                dispatch(setActive(2));
              }}
              smooth>
              <li
                style={{ "--i": 3 }}
                className={`${
                  toogle == true
                    ? "lg:li md:li liHalf opacity-100"
                    : "  liS opacity-0"
                } parentMenu absolute w-10 h-10  rounded-[50%] flex justify-center items-center`}>
                <div className="  flex  justify-center flex-col items-center">
                  <div
                    className={`${
                      active == 2 && "selected"
                    } btn w-10 parentMenu   h-10 bg-pink-200 dark:bg-black  rounded-[50%] flex justify-center items-center`}>
                    <SlGraduation
                      className={`${
                        toogle == true && "md:inner  lg:inner innerS"
                      }  text-2xl parentMenu  dark:text-cyan-600 text-cyan-400 back-shadow8`}
                    />
                  </div>
                  <p
                    className={`dark:text-cyan-600 text-cyan-400 childMenu absolute bottom-[16%] left-[-183%] lg:bottom-[100%] lg:left-[-30%]  md:bottom-[100%] md:left-[-30%] md:inner lg:inner innerSpecify`}>
                    Education
                  </p>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="#3"
              onClick={() => {
                dispatch(setActive(3));
              }}
              smooth>
              <li
                style={{ "--i": 4 }}
                className={`${
                  toogle == true
                    ? "lg:li md:li liHalf  opacity-100"
                    : "  liS opacity-0"
                }  absolute `}>
                <div className="parentMenu  flex  justify-center flex-col items-center">
                  <div
                    className={`${
                      active == 3 && "selected"
                    }  btn w-10 parentMenu h-10 bg-pink-200 dark:bg-black  rounded-[50%] flex justify-center items-center`}>
                    <AiFillFolderOpen
                      className={`${
                        toogle == true && "md:inner lg:inner innerS"
                      } text-2xl parentMenu  dark:text-cyan-600 text-cyan-400 back-shadow8`}
                    />
                  </div>
                  <p
                    className={`dark:text-cyan-600 text-cyan-400 childMenu  absolute bottom-[40%] left-[-103%] md:bottom-[60%] md:left-[-69%] lg:bottom-[60%] lg:left-[-69%] md:inner lg:inner innerS`}>
                    Skill
                  </p>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="#4"
              onClick={() => {
                dispatch(setActive(4));
              }}
              smooth>
              <li
                style={{ "--i": 5 }}
                className={`${
                  toogle == true
                    ? "lg:li md:li liHalf   opacity-100"
                    : " liS opacity-0"
                }  absolute parentMenu`}>
                <div className="  flex justify-center flex-col items-center">
                  <div
                    className={`${
                      active == 4 && "selected"
                    }  btn w-10 parentMenu h-10 bg-pink-200 dark:bg-black  rounded-[50%] flex justify-center items-center`}>
                    <AiOutlineContacts
                      className={`${
                        toogle == true && "md:inner lg:inner innerS"
                      } text-2xl parentMenu  dark:text-cyan-600 text-cyan-400 back-shadow8`}
                    />
                  </div>
                  <p
                    className={`dark:text-cyan-600 text-cyan-400 childMenu  absolute top-[16%] left-[-180%] md:top-[63%] md:left-[-104%] lg:top-[63%] lg:left-[-104%] md:inner lg:inner textrotateSkill `}>
                    Projects
                  </p>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="#5"
              onClick={() => {
                dispatch(setActive(5));
              }}
              smooth>
              <li
                className={`${
                  toogle == true
                    ? "lg:li md:li liHalf opacity-100"
                    : "  liS opacity-0"
                } absolute  `}>
                <div className=" parentMenu flex justify-center flex-col items-center">
                  <div
                    className={`${
                      active == 5 && "selected"
                    } btn w-10 parentMenu h-10 bg-pink-200 dark:bg-black  rounded-[50%] flex justify-center items-center`}>
                    <AiOutlineMail
                      style={{ "--i": 6 }}
                      className={`${
                        toogle == true && "md:inner lg:inner innerSpecify"
                      } text-2xl parentMenu  dark:text-cyan-600 text-cyan-400 back-shadow8`}
                    />
                  </div>
                  <p
                    className={`dark:text-cyan-600 text-cyan-400 childMenu absolute top-[16%] left-[-189%] lg:top-[100%] lg:left-[-30%]  md:top-[100%] md:left-[-30%] md:inner lg:inner innerSpecify`}>
                    Contacts
                  </p>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </Draggable>
  );
};

export default Menu;
