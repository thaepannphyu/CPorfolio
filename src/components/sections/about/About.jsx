import React from 'react'
import kzt from "../../../assets/kzt/kzt.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div>
        <div className=' flex justify-center h-screen font-sans'>
        <div className=' w-[90%] flex justify-between items-center max-xl:gap-10'>
            {/* image div  */}
            <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className=' w-[40%] pl-10 max-xl:pl-0 flex'>
                <div className='bg-[#e9e655] w-[350px] h-[350px] shadow-md shadow-yellow-300'>
                    <img src={kzt} className=' w-[350px] h-[350px] object-cover' alt="" />
                </div>
            </div>

            {/* about div  */}
            <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className=' w-[60%] flex flex-col gap-3 '>
                <h1 className=' text-4xl font-bold text-pink-500'>ABOUT ME</h1>
                <p className=' text-xl text-yellow-300'>Frontend Developer</p>
                <p className=' text-xl text-blue-300'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ea est quibusdam architecto odio quos sunt, debitis ipsum rerum perferendis ipsam. Perspiciatis reiciendis voluptatum, consectetur dolores delectus repudiandae ex nobis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente iste, quos fugiat illum eligendi dicta necessitatibus. Distinctio a necessitatibus, dolorum commodi iusto pariatur nihil aliquam eum fugiat vel, impedit ullam!
                </p>

            </div>
        </div>
        </div>
    </div>
  )
}

export default About