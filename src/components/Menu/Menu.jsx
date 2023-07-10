import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillHome,
  AiOutlineMail,
  AiOutlineContacts,
  AiFillFolderOpen,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  const ref = useRef();
  const [toogle, settoogle] = useState(false);
  let wX = window.innerWidth;

  let wXx = wX - 220;
  let wH = window.innerHeight;
  let wHy = wH - 10;
  useEffect(() => {
    wX = window.innerWidth;
    wH = window.innerHeight;
    wXx = wX - 220;
    wHy = wH - 10;
    console.log(wX);
    console.log(wXx);
    console.log(wH);
    console.log(wHy);
  }, [window.innerWidth, window.innerHeight]);

  return (
    <Draggable
      axis="y"
      defaultPosition={{ x: wXx, y: wHy * 0.5 }}
      bounds={{ top: 10, bottom: wHy }}>
      <div className="menu z-50 absolute bg-transparent flex flex-col justify-center items-center w-[200px] h-[200px]">
        <div
          onClick={() => {
            settoogle(!toogle);
          }}
          className={`${
            toogle == true ? " activeT" : ""
          }  z-10 w-10 h-10 bg-black shadow rounded-[50%] flex justify-center items-center`}>
          <AiOutlineMenu
            className={`text-2xl  transition-all absolute ${
              toogle == true ? " opacity-0" : ""
            } text-yellow-300`}
          />

          <AiOutlineClose
            className={`text-2xl transition-all absolute ${
              toogle == false ? " opacity-0" : ""
            } text-yellow-300`}
          />
        </div>
        <ul className=" flex   ">
          <NavLink>
            <li
              style={{ "--i": 1 }}
              className={`${
                toogle == true ? "li" : "liS"
              } absolute w-10 h-10 bg-black rounded-[50%] flex justify-center items-center`}>
              <AiFillHome
                className={`${
                  toogle == true && "inner"
                } text-2xl text-yellow-300`}
              />
            </li>
          </NavLink>
          <NavLink>
            <li
              style={{ "--i": 2 }}
              className={`${
                toogle == true ? "li" : "liS"
              } absolute w-10 h-10 bg-black rounded-[50%] flex justify-center items-center`}>
              <AiOutlineMail
                className={`${
                  toogle == true && "inner"
                } text-2xl text-yellow-300`}
              />
            </li>
          </NavLink>
          <NavLink>
            <li
              style={{ "--i": 3 }}
              className={`${
                toogle == true ? "li" : "liS"
              } absolute w-10 h-10 bg-black rounded-[50%] flex justify-center items-center`}>
              <AiOutlineContacts
                className={`${
                  toogle == true && "inner"
                } text-2xl text-yellow-300`}
              />
            </li>
          </NavLink>
          <NavLink>
            <li
              className={`${
                toogle == true ? "li" : "liS"
              } absolute w-10 h-10 bg-black rounded-[50%] flex justify-center items-center`}>
              <AiFillFolderOpen
                style={{ "--i": 4 }}
                className={`${
                  toogle == true && "inner"
                } text-2xl text-yellow-300`}
              />
            </li>
          </NavLink>
        </ul>
      </div>
    </Draggable>
  );
};

export default Menu;
