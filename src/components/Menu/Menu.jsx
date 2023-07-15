import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillHome,
  AiOutlineMail,
  AiOutlineContacts,
  AiFillFolderOpen,
} from "react-icons/ai";
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

  // console.log(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", setPosition);
  }, [windowSize]);
  // console.log(windowSize.width);

  return (
    <Draggable
      axis="y"
      handle=".handle"
      defaultClassNameDragging="drag"
      defaultClassNameDragged="dragend"
      defaultPosition={
        windowSize.width > 600 ? { x, y: y * 0.5 } : { x: xS, y: y * 0.5 }
      }
      // bounds={
      //   windowSize.width > 600
      //     ? { top: 10, bottom: y }
      //     : { top: 20, bottom: ys }
      // }
      bounds={
        windowSize.width > 600
          ? { top: 10, bottom: 700 }
          : { top: 20, bottom: 500 }
      }>
      <div className=" fixed z-50">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="menu    py-1 bg-transparent flex flex-col  justify-center items-center h-[200px] w-[200px]">
          <div
            id="#drag1"
            onClick={() => {
              settoogle(!toogle);
            }}
            className={`${
              toogle == true ? " " : " md:scale-125 lg:scale-125 scale-110"
            } handle relative z-40  w-10 h-10 bg-black parentMenu  transition2s shadow rounded-[50%] flex justify-center items-center`}>
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
                  toogle == true ? "lg:li md:li liHalf" : "  liS"
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
                    className={` childMenu absolute top-[19%] left-[68%] md:top-[19%] lg:top-[19%] md:left-[68%] lg:left-[68%] md:inner lg:inner innerS`}>
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
                style={{ "--i": 1 }}
                className={`${
                  toogle == true ? "lg:li md:li liHalf" : "  liS"
                } parentMenu absolute w-10 h-10  rounded-[50%] flex justify-center items-center`}>
                <div className="  flex  justify-center flex-col items-center">
                  <div
                    className={`${
                      active == 1 && "selected"
                    } btn w-10 parentMenu   h-10 bg-black rounded-[50%] flex justify-center items-center`}>
                    <AiFillHome
                      className={`${
                        toogle == true && "md:inner  lg:inner innerS"
                      }  text-2xl parentMenu  text-cyan-600 back-shadow2`}
                    />
                  </div>
                  <p
                    className={` childMenu absolute top-[19%] left-[68%] md:top-[19%] lg:top-[19%] md:left-[68%] lg:left-[68%] md:inner lg:inner innerS`}>
                    About
                  </p>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="#0"
              onClick={() => {
                dispatch(setActive(0));
              }}
              smooth>
              <li
                style={{ "--i": 1 }}
                className={`${
                  toogle == true ? "lg:li md:li liHalf" : "  liS"
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
                    className={` childMenu absolute top-[19%] left-[68%] md:top-[19%] lg:top-[19%] md:left-[68%] lg:left-[68%] md:inner lg:inner innerS`}>
                    Home
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
                style={{ "--i": 2 }}
                className={`${
                  toogle == true ? "lg:li md:li liHalf" : "  liS"
                }  absolute `}>
                <div className="parentMenu  flex  justify-center flex-col items-center">
                  <div
                    className={`${
                      active == 3 && "selected"
                    }  btn w-10 parentMenu h-10 bg-black rounded-[50%] flex justify-center items-center`}>
                    <AiOutlineMail
                      className={`${
                        toogle == true && "md:inner lg:inner innerS"
                      } text-2xl parentMenu  text-cyan-600 back-shadow2`}
                    />
                  </div>
                  <p
                    className={` childMenu absolute top-[-70%] left-[4px] md:top-[-64%] md:left-[-17%] lg:top-[-64%] lg:left-[-17%] md:inner lg:inner innerS`}>
                    Contact
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
                style={{ "--i": 3 }}
                className={`${
                  toogle == true ? "lg:li md:li liHalf" : " liS"
                }  absolute `}>
                <div className=" parentMenu flex justify-center flex-col items-center">
                  <div
                    className={`${
                      active == 1 && "selected"
                    }  btn w-10 parentMenu h-10 bg-black rounded-[50%] flex justify-center items-center`}>
                    <AiOutlineContacts
                      className={`${
                        toogle == true && "md:inner lg:inner innerS"
                      } text-2xl parentMenu  text-cyan-600 back-shadow2`}
                    />
                  </div>
                  <p
                    className={`childMenu  absolute top-[27%] left-[-100%] md:top-[27%] md:left-[-71%] lg:top-[27%] lg:left-[-71%] md:inner lg:inner innerS`}>
                    skill
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
                className={`${
                  toogle == true ? "lg:li md:li liHalf" : "  liS"
                } absolute  `}>
                <div className="parentMenu  flex justify-center flex-col items-center">
                  <div
                    className={`${
                      active == 2 && "selected"
                    } btn w-10 parentMenu h-10 bg-black rounded-[50%] flex justify-center items-center`}>
                    <AiFillFolderOpen
                      style={{ "--i": 4 }}
                      className={`${
                        toogle == true && "md:inner lg:inner innerSpecify"
                      } text-2xl parentMenu  text-cyan-600 back-shadow2`}
                    />
                  </div>
                  <p
                    className={`childMenu absolute top-[16%] left-[-154%] lg:top-[100%] lg:left-[-30%]  md:top-[100%] md:left-[-30%] md:inner lg:inner innerSpecify`}>
                    Projects
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
