import React, { useState } from "react";
// import left from "../../../assets/contactPhoto/bg-left.jpg";
// import right from "../../../assets/contactPhoto/bg-right.jpg";
// import neonLeft from "../../../assets/contactPhoto/neon-left.jpg";
// import neonRight from "../../../assets/contactPhoto/neon-right.jpg";
import lightLeft from "../../../assets/contactPhoto/light-left.jpg";
import lightRight from "../../../assets/contactPhoto/light-right.jpg";
import laptop from "../../../assets/contactPhoto/ph-view.jpg";
import "./contact.css";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* laptop view */}
      <div className="flex w-[100%] relative bg-[#292923] max-[899px]:hidden">
        {/* left side */}
        <div
          className={`${
            show ? "mr-[360px] duration-1000" : "mr-0 duration-700"
          } relative w-[50%]`}
        >
          <img src={lightLeft} alt="" className=" h-[600px] w-full" />
          <p
            className={`${
              show
                ? "opacity-0 left-[-1000px] top-1/4"
                : "delay-[600ms] top-1/4 right-2 opacity-100"
            } text-7xl font-extrabold font-sans text-white absolute z-10 max-xl:text-6xl max-lg:text-5xl max-md:text-4xl`}
          >
            Let's work
          </p>

          {/* form and information */}
          <div
            className={`${
              show
                ? "top-[120px] right-[-670px] opacity-100 duration-1000"
                : "z-[-100] top-[-1000px] right-[-300px] opacity-0"
            } flex gap-10 items-center justify-center absolute z-10`}
          >
            {/* form  */}
            <div className="flex flex-col mx-4 gap-6">
              <div className="flex flex-col gap-6">
                <div className="form1">
                  <input
                    type="text"
                    className="input"
                    autoComplete="off"
                    placeholder=" "
                  />
                  <label className="label">Name</label>
                </div>
                <div className="form1">
                  <input
                    type="text"
                    className="input"
                    autoComplete="off"
                    placeholder=" "
                  />
                  <label className="label">Email</label>
                </div>
                <div className="form2">
                  <textarea
                    className="input"
                    placeholder=" "
                    autoComplete="off"
                    cols="30"
                    rows="5"
                  ></textarea>
                  <label className="label">Message</label>
                </div>
                <button
                  onClick={() => setShow(!show)}
                  className=" bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 rounded-md font-bold font-sans py-3"
                >
                  Submit
                </button>
              </div>
            </div>

            {/* information  */}
            <div className="flex flex-col mx-4 gap-5">
              <h1 className="font-sans text-3xl tracking-wider text-gray-50 font-medium">
                Portfolio
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2 justify-start">
                  <h1 className=" font-sans text-xl text-gray-50 font-medium">
                    Address :
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className=" text-gray-200 font-sans tracking-wider text-sm">
                      Myanmar , Yangon
                    </p>
                    <p className=" text-gray-200 font-sans tracking-wider text-sm">
                      North Dagon
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 justify-start">
                  <h1 className=" font-sans text-xl text-gray-50 font-medium">
                    Contact me directly :
                  </h1>
                  <div className="flex flex-col gap-1">
                  <p className=" text-gray-200 font-sans tracking-wider text-sm flex gap-2 items-center justify-start">
                    <BsFillPhoneVibrateFill className=" text-lg text-[#6a9c78]" />{" "}
                    +47 333 78 901
                  </p>
                  <p className=" text-gray-200 font-sans tracking-wider text-sm flex gap-2 justify-start items-center">
                    <MdMarkEmailRead className=" text-lg text-[#6a9c78]" />{" "}
                    american@gmail.com
                  </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start">
                <p className=" text-xl font-sans font-medium text-gray-50">
                  Check my profiles
                </p>
                <div className="flex gap-6 justify-start">
                  <a
                    href="#"
                    className=" w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center"
                  >
                    <AiFillGithub className=" text-lg" />
                  </a>
                  <a
                    href="#"
                    className=" w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center"
                  >
                    <BsFacebook className=" text-lg" />
                  </a>
                  <a
                    href="#"
                    className=" w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center"
                  >
                    <AiFillInstagram className=" text-lg" />
                  </a>
                  <a
                    href="#"
                    className=" w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center"
                  >
                    <SiNetlify className=" text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div
          className={`${
            show ? "ml-[360px] duration-1000" : "ml-0 duration-700"
          } relative w-[50%]`}
        >
          <img src={lightRight} alt="" className=" h-[600px] w-full" />
          <p
            className={`${
              show
                ? "opacity-0 left-[-1000px] top-1/4"
                : "delay-[600ms] opacity-100 top-1/4 left-4"
            } text-7xl font-extrabold tracking-wide font-sans text-white absolute z-10 max-xl:text-6xl max-lg:text-5xl max-md:text-4xl`}
          >
            Together
          </p>
          <button
            onClick={() => setShow(!show)}
            className={`btn btn1 box-shadow bg-transparent border-2 border-[#fff] text-gray-50 rounded-md font-bold font-sans absolute top-1/2 left-[-90px] z-10 px-8 py-3 ${
              show ? " opacity-0" : " delay-[600ms] opacity-100"
            }`}
          >
            Make an enquiry
          </button>
        </div>
      </div>

      {/* ipad view  */}
      <div
        className={`flex items-center justify-around bg-[#292923] h-[500px] max-[599px]:hidden min-[900px]:hidden`}
      >
        {/* information  */}
        <div className="flex flex-col mx-4 gap-4">
          <h1 className="font-sans text-3xl tracking-wider text-gray-50 font-medium">
            Portfolio
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-start">
              <h1 className=" font-sans text-xl mb-1 text-gray-50 font-medium">
                Address :
              </h1>
              <p className=" text-gray-200 font-sans tracking-wider text-sm">
                Myanmar , Yangon
              </p>
              <p className=" text-gray-200 font-sans tracking-wider text-sm">
                North Dagon
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <h1 className=" font-sans text-xl mb-2 text-gray-50 font-medium">
                Contact me directly :
              </h1>
              <p className=" text-gray-200 font-sans tracking-wider text-sm flex gap-2 items-center justify-start">
                <BsFillPhoneVibrateFill className=" text-lg text-[#6a9c78]" />{" "}
                +47 333 78 901
              </p>
              <p className=" text-gray-200 font-sans tracking-wider text-sm flex gap-2 justify-start items-center">
                <MdMarkEmailRead className=" text-lg text-[#6a9c78]" />{" "}
                american@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-start">
            <p className=" text-xl font-sans font-medium text-gray-50">
              Check my profiles
            </p>
            <div className="flex gap-5 justify-start">
              <a
                href="#"
                className=" w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center"
              >
                <AiFillGithub className=" text-lg" />
              </a>
              <a
                href="#"
                className=" w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center"
              >
                <BsFacebook className=" text-lg" />
              </a>
              <a
                href="#"
                className=" w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center"
              >
                <AiFillInstagram className=" text-lg" />
              </a>
              <a
                href="#"
                className=" w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center"
              >
                <SiNetlify className=" text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* form  */}
        <div className="flex flex-col mx-4 gap-6">
          <form className="flex flex-col gap-6">
            <div className="form1">
              <input
                type="text"
                className="input"
                autoComplete="off"
                placeholder=" "
              />
              <label className="label">Name</label>
            </div>
            <div className="form1">
              <input
                type="text"
                className="input"
                autoComplete="off"
                placeholder=" "
              />
              <label className="label">Email</label>
            </div>
            <div className="form2">
              <textarea
                className="input"
                placeholder=" "
                autoComplete="off"
                cols="30"
                rows="5"
              ></textarea>
              <label className="label">Message</label>
            </div>
            <button
              onClick={() => setShow(!show)}
              className=" bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 rounded-md font-bold font-sans py-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* phone view */}
      <div className=" w-full min-[600px]:hidden">
        <div className=" w-full h-[600px] relative">
          <img
            src={laptop}
            className="w-full h-[600px] object-cover absolute top-0 z-[-50]"
          />
          <p className=" text-5xl pt-[145px] font-sans font-bold text-white text-center tracking-wide">
            Let's work together
          </p>
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <form className="w-full py-7 flex items-center justify-center bg-[#292923]">
          <div className={`flex flex-col mx-4 gap-7`}>
            <div className="form1">
              <input
                type="text"
                className="input"
                autoComplete="off"
                placeholder=" "
              />
              <label className="label">Name</label>
            </div>
            <div className="form1">
              <input
                type="text"
                className="input"
                autoComplete="off"
                placeholder=" "
              />
              <label className="label">Email</label>
            </div>
            <div className="form2">
              <textarea
                className="input"
                placeholder=" "
                autoComplete="off"
                cols="30"
                rows="5"
              ></textarea>
              <label className="label">Message</label>
            </div>
            <button
              onClick={() => setShow(!show)}
              className=" bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 rounded-md font-bold font-sans px-8 py-3"
            >
              Submit
            </button>
            <div className="flex flex-col gap-4">
              <h1 className="font-sans text-3xl tracking-wider text-gray-50 font-medium text-center">
                Portfolio
              </h1>
              <div className="flex flex-col gap-2">
                <h1 className=" font-sans text-xl text-gray-50 font-medium text-center">
                  Address :
                </h1>
                <div className="flex flex-col gap-1">
                  <p className=" text-gray-200 text-center font-sans tracking-wider text-sm">
                    Myanmar , Yangon
                  </p>
                  <p className=" text-gray-200 text-center font-sans tracking-wider text-sm">
                    North Dagon
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className=" font-sans text-xl text-gray-50 font-medium text-center">
                  Contact me directly :
                </h1>
                <div className="flex flex-col gap-1">
                  <p className=" text-gray-200 font-sans tracking-wider text-sm flex gap-2 items-center justify-center">
                    <BsFillPhoneVibrateFill className=" text-lg text-[#6a9c78]" />{" "}
                    +47 333 78 901
                  </p>
                  <p className=" text-gray-200 font-sans tracking-wider text-sm flex gap-2 justify-center items-center">
                    <MdMarkEmailRead className=" text-lg text-[#6a9c78]" />{" "}
                    american@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className=" text-xl font-sans font-medium text-center text-gray-50">
                Check my profiles
              </p>
              <div className="flex gap-6 justify-center">
                <a
                  href="#"
                  className=" w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center"
                >
                  <AiFillGithub className=" text-lg" />
                </a>
                <a
                  href="#"
                  className=" w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center"
                >
                  <BsFacebook className=" text-lg" />
                </a>
                <a
                  href="#"
                  className=" w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center"
                >
                  <AiFillInstagram className=" text-lg" />
                </a>
                <a
                  href="#"
                  className=" w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center"
                >
                  <SiNetlify className=" text-lg" />
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
