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
    console.log(window.scrollY);
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
            scroll > 50 ? "opacity-100" : "opacity-0"
          }  menu  transition2s  py-1 bg-transparent flex flex-col  justify-center items-center h-[200px] w-[200px]`}>
          <div
            id="#drag1"
            onClick={() => {
              settoogle(!toogle);
            }}
            className={`${
              toogle == true ? " " : " md:scale-125 lg:scale-125 scale-110"
            }  relative z-40  w-10 h-10 bg-black parentMenu  transition2s shadow rounded-[50%] flex justify-center items-center`}>
            <AiOutlineMenu
              id="#drag2"
              className={`lg:text-2xl md:text-lg  transition-all absolute ${
                toogle == true ? " opacity-0" : " "
              } text-cyan-600 back-shadow2`}
            />

            <AiOutlineClose
              className={`lg:text-2xl md:text-lg transition-all absolute ${
                toogle == false ? " opacity-0" : ""
              }  text-cyan-600 back-shadow2 `}
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
                    } btn w-10 parentMenu   h-10 bg-black rounded-[50%] flex justify-center items-center`}>
                    <AiFillHome
                      className={`${
                        toogle == true && "md:inner  lg:inner innerS"
                      }  text-2xl parentMenu  text-cyan-600 back-shadow2`}
                    />
                  </div>
                  <p
                    className={` childMenu text-cyan-600 absolute top-[19%] left-[-144%] md:top-[19%] lg:top-[19%] md:left-[68%] lg:left-[68%] md:inner lg:inner specialRotate`}>
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
                    } btn w-10 parentMenu   h-10 bg-black rounded-[50%] flex justify-center items-center`}>
                    <AiOutlineUser
                      className={`${
                        toogle == true && "md:inner  lg:inner innerS"
                      }  text-2xl parentMenu  text-cyan-600 back-shadow2`}
                    />
                  </div>
                  <p
                    className={`text-cyan-600 childMenu absolute top-[16%] left-[-133%] md:top-[19%] lg:top-[19%] md:left-[68%] lg:left-[68%] md:inner lg:inner specialRotate`}>
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
                    } btn w-10 parentMenu   h-10 bg-black rounded-[50%] flex justify-center items-center`}>
                    <SlGraduation
                      className={`${
                        toogle == true && "md:inner  lg:inner innerS"
                      }  text-2xl parentMenu  text-cyan-600 back-shadow2`}
                    />
                  </div>
                  <p
                    className={`text-cyan-600 childMenu absolute bottom-[16%] left-[-183%] lg:bottom-[100%] lg:left-[-30%]  md:bottom-[100%] md:left-[-30%] md:inner lg:inner innerSpecify`}>
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
                    }  btn w-10 parentMenu h-10 bg-black rounded-[50%] flex justify-center items-center`}>
                    <AiFillFolderOpen
                      className={`${
                        toogle == true && "md:inner lg:inner innerS"
                      } text-2xl parentMenu  text-cyan-600 back-shadow2`}
                    />
                  </div>
                  <p
                    className={`text-cyan-600 childMenu  absolute bottom-[50%] left-[-158%] md:bottom-[50%] md:left-[-110%] lg:bottom-[50%] lg:left-[-110%] md:inner lg:inner innerS`}>
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
                    }  btn w-10 parentMenu h-10 bg-black rounded-[50%] flex justify-center items-center`}>
                    <AiOutlineContacts
                      className={`${
                        toogle == true && "md:inner lg:inner innerS"
                      } text-2xl parentMenu  text-cyan-600 back-shadow2`}
                    />
                  </div>
                  <p
                    className={`text-cyan-600 childMenu  absolute top-[27%] left-[-100%] md:top-[27%] md:left-[-71%] lg:top-[27%] lg:left-[-71%] md:inner lg:inner textrotateSkill `}>
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
                    } btn w-10 parentMenu h-10 bg-black rounded-[50%] flex justify-center items-center`}>
                    <AiOutlineMail
                      style={{ "--i": 6 }}
                      className={`${
                        toogle == true && "md:inner lg:inner innerSpecify"
                      } text-2xl parentMenu  text-cyan-600 back-shadow2`}
                    />
                  </div>
                  <p
                    className={`text-cyan-600 childMenu absolute top-[16%] left-[-154%] lg:top-[100%] lg:left-[-30%]  md:top-[100%] md:left-[-30%] md:inner lg:inner innerSpecify`}>
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
