import React from "react";
import { AiOutlineHtml5, AiOutlineGithub } from "react-icons/ai";
import { TbBrandCss3, TbBrandVscode } from "react-icons/tb";
import { FaSass, FaBootstrap, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import "./skill.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Skill = () => {
  return (
    <div className=" w-[90%] py-8 mx-auto font-sans bg-gradient-to-r from-[#0d0855] via-[#441f5a] to-[#4a4d61] bg-opacity-10">
      <h1 className=" text-center text-white uppercase font-bold tracking-widest text-xl">
        Skills & Technologies
      </h1>
      {/* skills showcase  */}
      <div className=" w-full mt-5 flex flex-wrap gap-5 justify-center">
        {/* Html skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 py-2 flex flex-col gap-1 justify-center items-center relative group transition duration-700 ease-in-out">
          <h1 className=" html-icon text-[45px] text-orange-600 group-hover:absolute group-hover:top-0 transition duration-700 ease-in-out group-hover:scale-125">
            <AiOutlineHtml5 />
          </h1>
          <div className=" flex flex-col gap-8 bg-slate-500 group-hover:bg-orange-600 group-hover:bg-opacity-30 px-4 py-4 rounded ">
            <p>
              <h1 className=" text-center font-bold text-[#ffffff] back-shadow1">
                HTML SKILL
              </h1>
              <h1 className=" text-left break-all py-5 text-[#ffffffab]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </p>
            <div className=" bg-black bg-opacity-25 w-full h-[5px] rounded-full">
              <div className=" bg-white w-[90%] h-[5px] rounded-full relative ">
                <span
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className=" absolute text-white -top-6 -right-2 text-sm">
                  90%
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* css skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 py-2 flex flex-col gap-1 justify-center items-center relative group transition duration-700 ease-in-out">
          <h1 className=" html-icon text-[45px] text-blue-600 group-hover:absolute group-hover:top-0 transition duration-700 ease-in-out group-hover:scale-125">
            <TbBrandCss3 />
          </h1>
          <div className=" flex flex-col gap-8 bg-slate-500 group-hover:bg-blue-600 group-hover:bg-opacity-30 px-4 py-4 rounded ">
            <p>
              <h1 className=" text-center font-bold text-[#ffffff] back-shadow2">
                CSS SKILL
              </h1>
              <h1 className=" text-left break-all py-5 text-[#ffffffab]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </p>
            <div className=" bg-black bg-opacity-25 w-full h-[5px] rounded-full">
              <div className=" bg-white w-[90%] h-[5px] rounded-full relative ">
                <span
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className=" absolute text-white -top-6 -right-2 text-sm">
                  90%
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* scss skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 py-2 flex flex-col gap-1 justify-center items-center relative group transition duration-700 ease-in-out">
          <h1 className=" html-icon text-[45px] text-pink-600 group-hover:absolute group-hover:top-0 transition duration-700 ease-in-out group-hover:scale-125">
            <FaSass />
          </h1>
          <div className=" flex flex-col gap-8 bg-slate-500 group-hover:bg-pink-600 group-hover:bg-opacity-30 px-4 py-4 rounded ">
            <p>
              <h1 className=" text-center font-bold text-[#ffffff] back-shadow3">
                Sass SKILL
              </h1>
              <h1 className=" text-left break-all py-5 text-[#ffffffab]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </p>
            <div className=" bg-black bg-opacity-25 w-full h-[5px] rounded-full">
              <div className=" bg-white w-[60%] h-[5px] rounded-full relative ">
                <span
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className=" absolute text-white -top-6 -right-2 text-sm">
                  60%
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* js skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 py-2 flex flex-col gap-1 justify-center items-center relative group transition duration-700 ease-in-out">
          <h1 className=" html-icon text-[45px] text-yellow-400 group-hover:absolute group-hover:top-0 transition duration-700 ease-in-out group-hover:scale-125">
            <BiLogoJavascript />
          </h1>
          <div className=" flex flex-col gap-8 bg-slate-500 group-hover:bg-yellow-600 group-hover:bg-opacity-30 px-4 py-4 rounded ">
            <p>
              <h1 className=" text-center font-bold text-[#ffffff] back-shadow4">
                Javascript SKILL
              </h1>
              <h1 className=" text-left break-all py-5 text-[#ffffffab]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </p>
            <div className=" bg-black bg-opacity-25 w-full h-[5px] rounded-full">
              <div className=" bg-white w-[70%] h-[5px] rounded-full relative ">
                <span
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className=" absolute text-white -top-6 -right-2 text-sm">
                  70%
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* bootstrap skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 py-2 flex flex-col gap-1 justify-center items-center relative group transition duration-700 ease-in-out">
          <h1 className=" html-icon text-[45px] text-purple-500 group-hover:absolute group-hover:top-0 transition duration-700 ease-in-out group-hover:scale-125">
            <FaBootstrap />
          </h1>
          <div className=" flex flex-col gap-8 bg-slate-500 group-hover:bg-purple-600 group-hover:bg-opacity-30 px-4 py-4 rounded ">
            <p>
              <h1 className=" text-center font-bold text-[#ffffff] back-shadow5">
                Bootstrap SKILL
              </h1>
              <h1 className=" text-left break-all py-5 text-[#ffffffab]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </p>
            <div className=" bg-black bg-opacity-25 w-full h-[5px] rounded-full">
              <div className=" bg-white w-[90%] h-[5px] rounded-full relative ">
                <span
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className=" absolute text-white -top-6 -right-2 text-sm">
                  90%
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* react skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 py-2 flex flex-col gap-1 justify-center items-center relative group transition duration-700 ease-in-out">
          <h1 className=" html-icon text-[45px] text-blue-700 group-hover:absolute group-hover:top-0 transition duration-700 ease-in-out group-hover:scale-125">
            <FaReact />
          </h1>
          <div className=" flex flex-col gap-8 bg-slate-500 group-hover:bg-blue-800 group-hover:bg-opacity-30 px-4 py-4 rounded ">
            <p>
              <h1 className=" text-center font-bold text-[#ffffff] back-shadow6">
                React SKILL
              </h1>
              <h1 className=" text-left break-all py-5 text-[#ffffffab]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </p>
            <div className=" bg-black bg-opacity-25 w-full h-[5px] rounded-full">
              <div className=" bg-white w-[90%] h-[5px] rounded-full relative ">
                <span
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className=" absolute text-white -top-6 -right-2 text-sm">
                  90%
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* rtk skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 py-2 flex flex-col gap-1 justify-center items-center relative group transition duration-700 ease-in-out">
          <h1 className=" html-icon text-[45px] text-purple-700 group-hover:absolute group-hover:top-0 transition duration-700 ease-in-out group-hover:scale-125">
            <SiRedux />
          </h1>
          <div className=" flex flex-col gap-8 bg-slate-500 group-hover:bg-purple-800 group-hover:bg-opacity-30 px-4 py-4 rounded ">
            <p>
              <h1 className=" text-center font-bold text-[#ffffff] back-shadow7">
                Redux SKILL
              </h1>
              <h1 className=" text-left break-all py-5 text-[#ffffffab]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </p>
            <div className=" bg-black bg-opacity-25 w-full h-[5px] rounded-full">
              <div className=" bg-white w-[80%] h-[5px] rounded-full relative ">
                <span
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-out-cubic"
                  className=" absolute text-white -top-6 -right-2 text-sm">
                  80%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* tailwind skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 py-2 flex flex-col gap-1 justify-center items-center relative group transition duration-700 ease-in-out">
          <h1 className=" html-icon text-[45px] text-blue-500 group-hover:absolute group-hover:top-0 transition duration-700 ease-in-out group-hover:scale-125">
            <SiTailwindcss />
          </h1>
          <div className=" flex flex-col gap-8 bg-slate-500 group-hover:bg-blue-700 group-hover:bg-opacity-30 px-4 py-4 rounded ">
            <p>
              <h1 className=" text-center font-bold text-[#ffffff] back-shadow8">
                Tailwind SKILL
              </h1>
              <h1 className=" text-left break-all py-5 text-[#ffffffab] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </p>
            <div className=" bg-black bg-opacity-25 w-full h-[5px] rounded-full">
              <div className=" bg-white w-[80%] h-[5px] rounded-full relative ">
                <span
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-out-cubic"
                  className=" absolute text-white -top-6 -right-2 text-sm">
                  80%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* github skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 py-2 flex flex-col gap-1 justify-center items-center relative group transition duration-700 ease-in-out">
          <h1 className=" html-icon text-[45px] text-gray-800 group-hover:absolute group-hover:top-0 transition duration-700 ease-in-out group-hover:scale-125">
            <AiOutlineGithub />
          </h1>
          <div className=" flex flex-col gap-8 bg-slate-500 group-hover:bg-gray-900 group-hover:bg-opacity-30 px-4 py-4 rounded ">
            <p>
              <h1 className=" text-center font-bold text-[#ffffff] back-shadow9">
                Github SKILL
              </h1>
              <h1 className=" text-left break-all py-5 text-[#ffffffab]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </p>
            <div className=" bg-black bg-opacity-25 w-full h-[5px] rounded-full">
              <div className=" bg-white w-[80%] h-[5px] rounded-full relative ">
                <span
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-out-cubic"
                  className=" absolute text-white -top-6 -right-2 text-sm">
                  80%
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* vs code skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 py-2 flex flex-col gap-1 justify-center items-center relative group transition duration-700 ease-in-out">
          <h1 className=" html-icon text-[45px] text-blue-600 group-hover:absolute group-hover:top-0 transition duration-700 ease-in-out group-hover:scale-125">
            <TbBrandVscode />
          </h1>
          <div className=" flex flex-col gap-8 bg-slate-500 group-hover:bg-blue-700 group-hover:bg-opacity-30 px-4 py-4 rounded ">
            <p>
              <h1 className=" text-center font-bold text-[#ffffff] back-shadow10">
                VS Code SKILL
              </h1>
              <h1 className=" text-left break-all py-5 text-[#ffffffab]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </p>
            <div className=" bg-black bg-opacity-25 w-full h-[5px] rounded-full">
              <div className=" bg-white w-[70%] h-[5px] rounded-full relative ">
                <span
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-out-cubic"
                  className=" absolute text-white -top-6 -right-2 text-sm">
                  70%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
