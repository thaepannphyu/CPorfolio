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
    <div className=" py-14 font-sans w-[96%] mx-auto ">
      <h1
        data-aos="zoom-in"
        data-aos-duration="2000"
        className=" select-none text-center text-white uppercase font-bold tracking-widest text-2xl">
        <span className=" text-[#2d9494] dark:text-[#00ffff] skill">Skills</span>
        <span className=" text-pink-500 and"> & </span>
        <span className=" text-[#8a9b29] dark:text-[#e1f85b] technology">Technologies</span>
      </h1>
      {/* skills showcase  */}
      <div class="flex flex-wrap justify-center mt-24">
        {/* HTML skill  */}

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" px-4 max-w-sm group mb-16 ">
          <div className="flex p-8 flex-col relative">
            <p className=" absolute -top-8 right-[40%] text-[60px] text-orange-600 group-hover:scale-110 transition-all ease-in-out delay-150">
              <AiOutlineHtml5 />
            </p>
            <div className=" card-background card-background1 shadow-md shadow-[#ff8800] bg-white bg-opacity-10 border-b border-[#cc4a2a] p-8 -mt-5 rounded-lg">
              <h2 className="select-none font-semibold tracking-widest flex justify-center items-center text-slate-500 dark:text-white back-shadow1">
                HTML SKILL
              </h2>
              <div class="flex flex-col justify-between flex-grow">
                <p class="select-none leading-relaxed text-base text-slate-700 dark:text-white mx-3 mt-3 tracking-wider ">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
              <div className=" mt-8 relative">
                <p className="select-none text-[11px] absolute -top-5 right-2 text-slate-500 dark:text-white back-shadow1">
                  90%
                </p>
                <div className=" bg-slate-800 bg-opacity-20 rounded w-full h-[5px] ">
                  <div className=" bg-slate-500 dark:bg-white rounded w-[90%] h-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="px-4 max-w-sm group mb-16">
          <div class="flex h-full p-8 flex-col relative">
            <p className="select-none absolute -top-8 right-[40%] text-[60px] text-blue-600 group-hover:scale-110 transition-all ease-in-out delay-150">
              <TbBrandCss3 />
            </p>
            <div className=" card-background card-background2 shadow-md shadow-[#002fff] bg-white bg-opacity-10 border-b border-[#2a63cc] p-8 -mt-5 rounded-lg">
              <h2 className="select-none font-semibold tracking-widest flex justify-center items-center text-slate-500 dark:text-white back-shadow2">
                CSS SKILL
              </h2>
              <div class="flex flex-col justify-between flex-grow">
                <p class="select-none leading-relaxed text-base text-slate-500 dark:text-white mx-3 mt-3 tracking-wider ">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
              <div className=" mt-8 relative">
                <p className="select-none text-[11px] absolute -top-5 right-8 text-slate-500 dark:text-white back-shadow2">
                  80%
                </p>
                <div className=" bg-slate-800 bg-opacity-20 rounded w-full h-[5px] ">
                  <div className=" bg-slate-500 dark:bg-white rounded w-[80%] h-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* scss skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="px-4 max-w-sm group mb-16 select-none">
          <div class="flex h-full p-8 flex-col relative">
            <p className=" absolute -top-8 right-[40%] text-[60px] text-pink-600 group-hover:scale-110 transition-all ease-in-out delay-150">
              <FaSass />
            </p>
            <div className=" card-background card-background3 bg-white bg-opacity-10 shadow-md shadow-[#ff00d4] border-b border-[#e767eb] p-8 -mt-5 rounded-lg">
              <h2 className=" font-semibold tracking-widest flex justify-center items-center text-slate-500 dark:text-white back-shadow3">
                SASS SKILL
              </h2>
              <div class="flex flex-col justify-between flex-grow">
                <p class=" leading-relaxed text-base text-slate-500 dark:text-white mx-3 mt-3 tracking-wider ">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
              <div className=" mt-8 relative">
                <p className=" text-[11px] absolute -top-5 right-20 text-slate-500 dark:text-white back-shadow3">
                  60%
                </p>
                <div className=" bg-slate-800 bg-opacity-20 rounded w-full h-[5px] ">
                  <div className=" bg-slate-500 dark:bg-white rounded w-[60%] h-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* js skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="px-4 max-w-sm group mb-16 select-none">
          <div class="flex h-full p-8 flex-col relative">
            <p className=" absolute -top-8 right-[40%] text-[60px] text-yellow-500 group-hover:scale-110 transition-all ease-in-out delay-150">
              <BiLogoJavascript />
            </p>
            <div className=" card-background card-background4 bg-white bg-opacity-10 shadow-md shadow-[#ffe600] border-b border-[#dfcc29] p-8 -mt-5 rounded-lg">
              <h2 className=" font-semibold tracking-widest flex justify-center items-center text-slate-500 dark:text-white back-shadow4">
                JAVASCRIPT SKILL
              </h2>
              <div class="flex flex-col justify-between flex-grow">
                <p class=" leading-relaxed text-base text-slate-500 dark:text-white mx-3 mt-3 tracking-wider ">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
              <div className=" mt-8 relative">
                <p className=" text-[11px] absolute -top-5 right-14 text-slate-500 dark:text-white back-shadow4">
                  70%
                </p>
                <div className=" bg-slate-800 bg-opacity-20 rounded w-full h-[5px] ">
                  <div className=" bg-slate-500 dark:bg-white rounded w-[70%] h-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bootstrap skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="px-4 max-w-sm group mb-16 select-none">
          <div class="flex h-full p-8 flex-col relative">
            <p className=" absolute -top-8 right-[40%] text-[60px] text-purple-500 group-hover:scale-110 transition-all ease-in-out delay-150">
              <FaBootstrap />
            </p>
            <div className=" card-background card-background5 bg-white bg-opacity-10 shadow-md shadow-[#8400ff] border-b border-[#7829df] p-8 -mt-5 rounded-lg">
              <h2 className=" font-semibold tracking-widest flex justify-center items-center text-slate-500 dark:text-white back-shadow5">
                BOOTSTRAP SKILL
              </h2>
              <div class="flex flex-col justify-between flex-grow">
                <p class=" leading-relaxed text-base text-slate-500 dark:text-white mx-3 mt-3 tracking-wider ">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
              <div className=" mt-8 relative">
                <p className=" text-[11px] absolute -top-5 right-10 text-slate-500 dark:text-white back-shadow5">
                  80%
                </p>
                <div className=" bg-slate-800 bg-opacity-20 rounded w-full h-[5px] ">
                  <div className=" bg-slate-500 dark:bg-white rounded w-[80%] h-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* React skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="px-4 max-w-sm group mb-16 select-none">
          <div class="flex h-full p-8 flex-col relative">
            <p className=" absolute -top-8 right-[40%] text-[60px] text-blue-400 group-hover:scale-110 transition-all ease-in-out delay-150">
              <FaReact />
            </p>
            <div className=" card-background card-background6 bg-white bg-opacity-10 shadow-md shadow-[#0011ff] border-b border-[#299cdf] p-8 -mt-5 rounded-lg">
              <h2 className=" font-semibold tracking-widest flex justify-center items-center text-slate-500 dark:text-white back-shadow6">
                REACT SKILL
              </h2>
              <div class="flex flex-col justify-between flex-grow">
                <p class=" leading-relaxed text-base text-slate-500 dark:text-white mx-3 mt-3 tracking-wider ">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
              <div className=" mt-8 relative">
                <p className=" text-[11px] absolute -top-5 right-10 text-slate-500 dark:text-white back-shadow6">
                  80%
                </p>
                <div className=" bg-slate-800 bg-opacity-20 rounded w-full h-[5px] ">
                  <div className=" bg-slate-500 dark:bg-white rounded w-[80%] h-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* redux skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="px-4 max-w-sm group mb-16 select-none">
          <div class="flex h-full p-8 flex-col relative">
            <p className=" absolute -top-8 right-[40%] text-[60px] text-purple-500 group-hover:scale-110 transition-all ease-in-out delay-150">
              <SiRedux />
            </p>
            <div className=" card-background card-background5 bg-white bg-opacity-10 shadow-md shadow-[#8400ff] border-b border-[#7829df] p-8 -mt-5 rounded-lg">
              <h2 className=" font-semibold tracking-widest flex justify-center items-center text-slate-500 dark:text-white back-shadow5">
                REDUX SKILL
              </h2>
              <div class="flex flex-col justify-between flex-grow">
                <p class=" leading-relaxed text-base text-slate-500 dark:text-white mx-3 mt-3 tracking-wider ">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
              <div className=" mt-8 relative">
                <p className=" text-[11px] absolute -top-5 right-10 text-slate-500 dark:text-white back-shadow5">
                  80%
                </p>
                <div className=" bg-slate-800 bg-opacity-20 rounded w-full h-[5px] ">
                  <div className=" bg-slate-500 dark:bg-white rounded w-[80%] h-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tailwind skill  */}

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="px-4 max-w-sm group mb-16 select-none">
          <div class="flex h-full p-8 flex-col relative">
            <p className=" absolute -top-8 right-[40%] text-[60px] text-blue-600 group-hover:scale-110 transition-all ease-in-out delay-150">
              <SiTailwindcss />
            </p>
            <div className=" card-background card-background2 bg-white bg-opacity-10 shadow-md shadow-[#00a2ff] border-b border-[#2969df] p-8 -mt-5 rounded-lg">
              <h2 className=" font-semibold tracking-widest flex justify-center items-center text-slate-500 dark:text-white back-shadow8">
                TAILWIND CSS SKILL
              </h2>
              <div class="flex flex-col justify-between flex-grow">
                <p class=" leading-relaxed text-base text-slate-500 dark:text-white mx-3 mt-3 tracking-wider ">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
              <div className=" mt-8 relative">
                <p className=" text-[11px] absolute -top-5 right-10 text-slate-500 dark:text-white back-shadow8">
                  80%
                </p>
                <div className=" bg-slate-800 bg-opacity-20 rounded w-full h-[5px] ">
                  <div className=" bg-slate-500 dark:bg-white rounded w-[80%] h-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* github skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="px-4 max-w-sm group mb-16 select-none">
          <div class="flex h-full p-8 flex-col relative">
            <p className=" absolute -top-8 right-[40%] text-[60px] text-gray-900 dark:text-slate-400 group-hover:scale-110 transition-all ease-in-out delay-150">
              <AiOutlineGithub />
            </p>
            <div className=" card-background card-background9 bg-white bg-opacity-10 shadow-md shadow-[#272625] dark:shadow-slate-500 border-b border-[#232225] p-8 -mt-5 rounded-lg">
              <h2 className=" font-semibold tracking-widest flex justify-center items-center text-slate-500 dark:text-white back-shadow9">
                GITHUB SKILL
              </h2>
              <div class="flex flex-col justify-between flex-grow">
                <p class=" leading-relaxed text-base text-slate-500 dark:text-white mx-3 mt-3 tracking-wider ">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
              <div className=" mt-8 relative">
                <p className=" text-[11px] absolute -top-5 right-10 text-slate-500 dark:text-white back-shadow9">
                  80%
                </p>
                <div className=" bg-slate-800 bg-opacity-20 rounded w-full h-[5px] ">
                  <div className=" bg-slate-500 dark:bg-white rounded w-[80%] h-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* vs code skill  */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="px-4 max-w-sm group select-none">
          <div class="flex h-full p-8 flex-col relative">
            <p className=" absolute -top-8 right-[40%] text-[60px] text-blue-500 group-hover:scale-110 transition-all ease-in-out delay-150">
              <TbBrandVscode />
            </p>
            <div className=" card-background card-background2 bg-white bg-opacity-10 shadow-md shadow-[#008cff] border-b border-[#295adf] p-8 -mt-5 rounded-lg">
              <h2 className=" font-semibold tracking-widest flex justify-center items-center text-slate-500 dark:text-white back-shadow2">
                VS CODE SKILL
              </h2>
              <div class="flex flex-col justify-between flex-grow">
                <p class=" leading-relaxed text-base text-slate-500 dark:text-white mx-3 mt-3 tracking-wider ">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
              <div className=" mt-8 relative">
                <p className=" text-[11px] absolute -top-5 right-10 text-slate-500 dark:text-white back-shadow2">
                  80%
                </p>
                <div className=" bg-slate-800 bg-opacity-20 rounded w-full h-[5px] ">
                  <div className=" bg-slate-500 dark:bg-white rounded w-[80%] h-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
