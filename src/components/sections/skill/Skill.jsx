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
    <div className=" py-8 mx-auto font-sans">
      <h1
        data-aos="zoom-in"
        data-aos-duration="1000"
        className=" text-center text-white uppercase font-bold tracking-widest text-xl">

        <span className="text-[#00ffff]">Skills</span>{" "}
        <span className="text-pink-500">& </span>{" "}
        <span className="text-[#e1f85b]">Technologies</span>
      </h1>
      {/* skills showcase  */}
      <div className=" w-full mt-5 flex flex-wrap gap-5 justify-center">
        {/* Html skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 py-2 flex flex-col gap-1 justify-center items-center relative group transition duration-700 ease-in-out">
          <h1 className=" html-icon text-[45px] text-orange-600 group-hover:absolute group-hover:top-0 transition-all duration-700 ease-in-out group-hover:scale-125">
            <AiOutlineHtml5 />
          </h1>
          <div className="card-shadow1 card-transition flex flex-col gap-8 bgTransparent group-hover:bg-orange-600 group-hover:bg-opacity-30 px-4 py-4 rounded select-none">
            <p>
              <h1 className=" text-center font-bold text-[#ffffff] back-shadow1">
                HTML SKILL
              </h1>
              <h1 className=" text-left break-all py-5 text-[#ffffffab]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </p>
            <div className=" bg-[#cc4a2a] border-b-4 border-[#cc4a2a] bg-opacity-40 p-8 -mt-5 rounded-lg">
              <h2 className=" flex justify-center items-center text-white back-shadow1">
                HTML SKILL
              </h2>
              <div class="flex flex-col justify-between flex-grow">
                <p class=" leading-relaxed text-base text-white mx-3 mt-3 ">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
              <div className=" mt-8 relative">
                <p className=" text-[11px] absolute -top-5 right-0 text-white">
                  98%
                </p>
                <div className=" bg-slate-400 rounded w-full h-[5px] ">
                  <div className=" bg-orange-300 rounded w-[98%] h-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS skill  */}
        <div class="p-4 max-w-sm">
          <div class="flex rounded-lg h-full bg-teal-400 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-white text-lg font-medium">Feature 2</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base text-white">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet
                33 nihil molestias. Rem perspiciatis iure ut laborum inventore
                et maxime amet.
              </p>
              <a
                href="#"
                class="mt-3 text-black hover:text-blue-600 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="p-4 max-w-sm">
          <div class="flex rounded-lg h-full bg-teal-400 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-white text-lg font-medium">Feature 3</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base text-white">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet
                33 nihil molestias. Rem perspiciatis iure ut laborum inventore
                et maxime amet.
              </p>
              <a
                href="#"
                class="mt-3 text-black hover:text-blue-600 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="p-4 max-w-sm">
          <div class="flex rounded-lg h-full bg-teal-400 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-white text-lg font-medium">Feature 3</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base text-white">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet
                33 nihil molestias. Rem perspiciatis iure ut laborum inventore
                et maxime amet.
              </p>
              <a
                href="#"
                class="mt-3 text-black hover:text-blue-600 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
