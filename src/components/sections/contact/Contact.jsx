import React, { useState } from "react";
import newLeft from "../../../assets/contactPhoto/new-left.jpg";
import newRight from "../../../assets/contactPhoto/new-right.jpg";
import "./contact.css";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* laptop view */}
      <div className="flex w-[100%] relative bg-[rgb(20,20,20)] max-[899px]:hidden">
        {/* left side */}
        <div
          className={`${
            show ? "mr-[360px] duration-1000" : "mr-0 duration-700"
          } relative w-[50%] h-[600px]`}
        >
          <img
            src={newLeft}
            alt=""
            className=" h-[600px] w-full object-cover"
          />
          <p
            className={`${
              show
                ? "opacity-0 left-[-1000px] top-1/4"
                : "delay-[600ms] opacity-100"
            } text-left-right right-[-400px] z-10 top-1/4`}
          >
            Let's work together
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
                  className="form-btn duration-500 text-white rounded-md font-bold font-sans py-3"
                >
                  Submit
                </button>
              </div>
            </div>

            {/* information  */}
            <div className="flex flex-col mx-4 gap-5">
              <h1 className="font-sans text-3xl tracking-wider text-yellow-500 font-medium">
                Portfolio
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2 justify-start">
                  <h1 className=" font-sans text-xl text-cyan-500 font-medium">
                    Address :
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className=" text-pink-500 font-sans tracking-wider text-sm">
                      Myanmar , Yangon
                    </p>
                    <p className=" text-pink-500 font-sans tracking-wider text-sm">
                      North Dagon
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 justify-start">
                  <h1 className=" font-sans text-xl text-cyan-500 font-medium">
                    Contact me directly :
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className=" text-pink-500 font-sans tracking-wider text-sm flex gap-2 items-center justify-start">
                      <BsFillPhoneVibrateFill className=" text-lg text-yellow-500" />{" "}
                      +47 333 78 901
                    </p>
                    <p className=" text-pink-500 font-sans tracking-wider text-sm flex gap-2 justify-start items-center">
                      <MdMarkEmailRead className=" text-lg text-yellow-500" />{" "}
                      american@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start">
                <p className=" text-xl font-sans font-medium text-cyan-500 ">
                  Check my profiles
                </p>
                <div className="flex gap-6 justify-start">
                  <a
                    href="#"
                    className=" w-8 h-8 rounded-full form-btn duration-500 text-white flex justify-center items-center"
                  >
                    <AiFillGithub className=" text-lg" />
                  </a>
                  <a
                    href="#"
                    className=" w-8 h-8 rounded-full form-btn duration-500 text-white flex justify-center items-center"
                  >
                    <BsFacebook className=" text-lg" />
                  </a>
                  <a
                    href="#"
                    className=" w-8 h-8 rounded-full form-btn duration-500 text-white flex justify-center items-center"
                  >
                    <AiFillInstagram className=" text-lg" />
                  </a>
                  <a
                    href="#"
                    className=" w-8 h-8 rounded-full form-btn duration-500 text-white flex justify-center items-center"
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
          } relative w-[50%] h-[600px]`}
        >
          <img
            src={newRight}
            alt=""
            className=" h-[600px] w-full object-cover"
          />
          <button
            onClick={() => setShow(!show)}
            className={`btn btn1 box-shadow bg-transparent rounded-md font-bold font-sans absolute top-[60%] left-[-90px] z-10 px-8 py-3 ${
              show ? " opacity-0" : " delay-[600ms] opacity-100"
            }`}
          >
            Make an enquiry
          </button>
        </div>
      </div>

      {/* ipad view  */}
      <div className="flex flex-col justify-center max-[599px]:hidden min-[900px]:hidden">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="ipad text-center"
        >
          Get in touch
        </h1>
        <div className={`flex items-center justify-around h-[500px]`}>
          {/* information  */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex flex-col mx-4 gap-4"
          >
            <h1 className="font-sans text-3xl tracking-wider text-yellow-500 font-medium">
              Portfolio
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-start">
                <h1 className=" font-sans text-xl mb-1 text-cyan-500 font-medium">
                  Address :
                </h1>
                <p className=" text-pink-500 font-sans tracking-wider text-sm">
                  Myanmar , Yangon
                </p>
                <p className=" text-pink-500 font-sans tracking-wider text-sm">
                  North Dagon
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <h1 className=" font-sans text-xl mb-2 text-cyan-500 font-medium">
                  Contact me directly :
                </h1>
                <p className=" text-pink-500 font-sans tracking-wider text-sm flex gap-2 items-center justify-start">
                  <BsFillPhoneVibrateFill className=" text-lg text-yellow-500" />{" "}
                  +47 333 78 901
                </p>
                <p className=" text-pink-500 font-sans tracking-wider text-sm flex gap-2 justify-start items-center">
                  <MdMarkEmailRead className=" text-lg text-yellow-500" />{" "}
                  american@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-start">
              <p className=" text-xl font-sans font-medium text-cyan-500">
                Check my profiles
              </p>
              <div className="flex gap-5 justify-start">
                <a
                  href="#"
                  className=" w-8 h-8 rounded-full form-btn duration-500 text-white flex justify-center items-center"
                >
                  <AiFillGithub className=" text-lg" />
                </a>
                <a
                  href="#"
                  className=" w-8 h-8 rounded-full form-btn duration-500 text-white flex justify-center items-center"
                >
                  <BsFacebook className=" text-lg" />
                </a>
                <a
                  href="#"
                  className=" w-8 h-8 rounded-full form-btn duration-500 text-white flex justify-center items-center"
                >
                  <AiFillInstagram className=" text-lg" />
                </a>
                <a
                  href="#"
                  className=" w-8 h-8 rounded-full form-btn duration-500 text-white flex justify-center items-center"
                >
                  <SiNetlify className=" text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* form  */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex flex-col mx-4 gap-6"
          >
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
                className="form-btn duration-500 text-white rounded-md font-bold font-sans py-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* phone view */}
      <div className=" w-full mb-10 min-[600px]:hidden flex flex-col gap-10">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="ph mx-5 text-center"
        >
          Get in touch
        </h1>
        <form className="w-full py-7 flex items-center justify-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className={`flex flex-col mx-4 gap-7`}
          >
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
              className="form-btn duration-500 text-white rounded-md font-bold font-sans px-8 py-3"
            >
              Submit
            </button>
            <div className="flex flex-col gap-4">
              <h1 className="font-sans text-3xl tracking-wider text-yellow-500 font-medium text-center">
                Portfolio
              </h1>
              <div className="flex flex-col gap-2">
                <h1 className=" font-sans text-xl text-cyan-500 font-medium text-center">
                  Address :
                </h1>
                <div className="flex flex-col gap-1">
                  <p className=" text-pink-500 text-center font-sans tracking-wider text-sm">
                    Myanmar , Yangon
                  </p>
                  <p className=" text-pink-500 text-center font-sans tracking-wider text-sm">
                    North Dagon
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className=" font-sans text-xl text-cyan-500 font-medium text-center">
                  Contact me directly :
                </h1>
                <div className="flex flex-col gap-1">
                  <p className=" text-pink-500 font-sans tracking-wider text-sm flex gap-2 items-center justify-center">
                    <BsFillPhoneVibrateFill className=" text-lg text-yellow-500" />{" "}
                    +47 333 78 901
                  </p>
                  <p className=" text-pink-500 font-sans tracking-wider text-sm flex gap-2 justify-center items-center">
                    <MdMarkEmailRead className=" text-lg text-yell-500" />{" "}
                    american@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className=" text-xl font-sans font-medium text-center text-cyan-500">
                Check my profiles
              </p>
              <div className="flex gap-6 justify-center">
                <a
                  href="#"
                  className=" w-8 h-8 rounded-full form-btn duration-500 text-white flex justify-center items-center"
                >
                  <AiFillGithub className=" text-lg" />
                </a>
                <a
                  href="#"
                  className=" w-8 h-8 rounded-full form-btn duration-500 text-white flex justify-center items-center"
                >
                  <BsFacebook className=" text-lg" />
                </a>
                <a
                  href="#"
                  className=" w-8 h-8 rounded-full form-btn duration-500 text-white flex justify-center items-center"
                >
                  <AiFillInstagram className=" text-lg" />
                </a>
                <a
                  href="#"
                  className=" w-8 h-8 rounded-full form-btn duration-500 text-white flex justify-center items-center"
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
