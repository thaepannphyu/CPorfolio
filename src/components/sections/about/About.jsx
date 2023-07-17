import React from 'react'
import kzt from "../../../assets/kzt/portfolio3.svg";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "../contact/contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div>
        <div className=' flex justify-center py-20 font-sans '>
        <div className=' w-[90%] mx-10 flex max-md:flex-col justify-between items-center max-xl:gap-10'>
            {/* image div  */}
            <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className=' w-[40%] max-md:w-[90%] pl-10 max-xl:pl-0 flex max-md:justify-center'>
                {/* <div className=' max-[500px]:w-[200px] max-[500px]:h-[300px] max-md:w-[300px] max-md:h-[380px]  w-[350px] h-[400px] bg-yellow-400 img-shadow'> */}
                    <img src={kzt} className=' max-[500px]:w-[200px] max-[500px]:h-[200px] max-md:w-[300px]  max-md:h-[380px] w-[350px] h-[400px] ' alt="" />
                {/* </div> */}
            </div>

            {/* about div  */}
            <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className=' w-[60%] max-md:w-[90%] flex  max-md:justify-center flex-col gap-3 '>
                <h1 className=' max-md:text-center text-4xl max-lg:text-3xl font-bold text-[#ca1a95]'>ABOUT ME</h1>
                <p className=' max-md:text-center text-xl dark:text-[#e0f75b] text-blue-700'>Frontend Developer</p>
                <p className=' max-md:text-center text-lg dark:text-[#4c6ef4] text-black'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ea est quibusdam architecto odio quos sunt, debitis ipsum rerum perferendis ipsam. Perspiciatis reiciendis voluptatum, consectetur dolores delectus repudiandae ex nobis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente iste, quos fugiat illum eligendi dicta necessitatibus. Distinctio a necessitatibus, dolorum commodi iusto pariatur nihil aliquam eum fugiat vel, impedit ullam!
                </p>

                
        {/* icon  */}
        <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-6 max-md:justify-center">
                <a
                  href="#"
                  className=" w-9 h-9 rounded-full form-btn duration-500 text-white flex justify-center items-center">
                  <AiFillGithub className=" text-xl" />
                </a>
                <a
                  href="#"
                  className=" w-9 h-9 rounded-full form-btn duration-500 text-white flex justify-center items-center">
                  <BsFacebook className=" text-xl" />
                </a>
                <a
                  href="#"
                  className=" w-9 h-9 rounded-full form-btn duration-500 text-white flex justify-center items-center">
                  <AiFillInstagram className=" text-xl" />
                </a>
              </div>
        </div>

            </div>
            
        </div>

        </div>
    </div>
  )
}

export default About