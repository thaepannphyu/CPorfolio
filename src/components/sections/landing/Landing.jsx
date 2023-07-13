import React, { useEffect, useRef } from "react";
import "./landing.css";
import photo from "../../../assets/HDCover.png";
import review from "../../../assets/review.jpg";
import Typed from "typed.js";
import { IoArrowUndoOutline, IoDiamondSharp } from "react-icons/io5";
import { SiFacebook } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFilePdf } from "react-icons/fa";
import { useState } from "react";
import { Modal, Group, Button } from "@mantine/core";
import resume from "../../../assets/resume.pdf";
import Svg from "./svg";
import cv from "../../../assets/cv.png";
const Landing = () => {
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
  const el = useRef();
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        ` <p className="pC">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>`,
        ` <p className="pC">Qurrncard elit.</p>`,
      ],
      typeSpeed: 20,
      backDelay: 700,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  // https://www.youtube.com/watch?v=VvMVTH1yOjo
  return (
    <>
      {/* <video
        src="https://www.youtube.com/watch?v=VvMVTH1yOjo"
        autoPlay
        muted
        loop
        id="myVideo"></video> */}

      <div className=" overflow-hidden  h-screen flex  justify-center items-center  relative">

        {/* <iframe
          className={` absolute top-10 right-0 duration-75`}
          src="https://embed.lottiefiles.com/animation/83977"></iframe>
        <iframe
          className={` absolute top-0 right-0 duration-75`}
          src="https://embed.lottiefiles.com/animation/7393"></iframe> */}

        {/*  */}
        <div className=" container bgTransparent text-white md:h-[90%] lg:h-[80%] flex justify-center flex-wrap  background-clip shadow-lg">
          <div className="w-full md:w-1/2 lg:w-1/2  flex justify-center items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className=" p-4 overflow-hidden flex justify-center items-center flex-col">
              <div className=" h2C hover:scale-110 transition2s cursiveText hover:text-blue-200">
                Hello! I am <strong className=" textname">SAKURA JUNG</strong>
                <div className=" inline h1C">
                  <IoArrowUndoOutline className=" inline h1C" />
                </div>
              </div>
              <div>
                <div className=" h1C  md:svgMd svgsm hover:scale-110  transition2s lg:svg">
                  <Svg />
                </div>
              </div>
              <div className="flex justify-center">
                <div className=" h-20">
                  <p
                    className=" pC mt-4 flex justify-center text-center "
                    ref={el}></p>
                </div>
              </div>
              {/* btn */}
              <div className=" hover:scale-110 transition2s flex justify-center items-center animate__animated animate__rubberBand">
                <div className="btn-L scale-[0.6] md:scale-75 lg:scale-100  gap-3 shadow bgTransparent">
                  <a
                    href="https://www.facebook.com/profile.php?id=100038518265438"
                    target="_blank">
                    <SiFacebook className="hover:scale-110 transition2s inline text-3xl text-blue-900 text-shadow" />
                  </a>
                  <div
                    className=" hover:scale-110 transition2s"
                    onClick={() => {
                      setSlowTransitionOpened(true);
                    }}>
                    <FaFilePdf className=" inline text-3xl text-rose-400 text-shadow" />
                  </div>
                  <a href={resume} download>
                    <div className=" hover:text-black transition2s btn-S bg-violet-900 hover:bg-slate-500 inline px-5 py-3 rounded-3xl">
                      DownLoad CV
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full md:w-1/2  lg:w-1/2  flex justify-center flex-col ">
            <div className=" flex h-full justify-center items-center relative w-full  overflow-hidden">
              <div className=" h-80 w-52 scale-[0.6] md:scale-75 lg:scale-100 flex rounded-lg relative">
                <div className=" h-32 w-32 bg-violet-200 rounded-[50%] absolute top-[-50px] left-[117px] "></div>
                <div className="  h-36 w-36 bg-blue-200  rounded-[50%] absolute bottom-[-43px] right-[104px]"></div>
                <div className=" h-full  w-full bg-pink-200 z-[2] absolute left-0   bottom-0 rounded border-4">
                  <img
                    src={photo}
                    alt=""
                    className=" z-[3] absolute bottom-[40px] left-0 scale-125  object-cover"
                  />
                </div>
              </div>
              {/* bottom bar */}
              <div className=" loop hover:scale-110 transition2s btn-L justify-start ps-2 rounded-e-none scale-[0.6] md:scale-75 lg:scale-100  absolute bottom-[10%] md:bottom-[26%] right-[-10%] gap-3 shadow bgTransparent">
                <div className="h-[85%] w-11 bg-white overflow-hidden rounded-[50%]">
                  <img
                    src={review}
                    alt=""
                    className="hover:scale-110 transition2s object-cover "
                  />
                </div>
                {/* star */}
                <div className="hover:scale-110 transition2s">
                  <div className="">
                    <div className="flex items-center space-x-1">
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        size={"50%"}
        opened={slowTransitionOpened}
        withCloseButton={false}
        onClose={() => setSlowTransitionOpened(false)}
        transitionProps={{ transition: "scale" }}>
        {/* <iframe id="pdfFile" src={resume} frameborder="0"></iframe> */}
        <div className=" flex justify-center items-center">
          <img src={cv} alt="" />
        </div>
      </Modal>
    </>
  );
};

export default Landing;
