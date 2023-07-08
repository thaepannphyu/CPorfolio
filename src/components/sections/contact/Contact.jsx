import React, { useState } from 'react';
import left from '../../../assets/contactPhoto/bg-left.jpg';
import right from '../../../assets/contactPhoto/bg-right.jpg';
import "./contact.css";
import {AiFillGithub} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {SiNetlify} from 'react-icons/si';

const Contact = () => {
  const [show,setShow] = useState(false);
  return (
    <>
      <div className="flex w-[100%] relative bg-[#292923] max-[900px]:hidden">
        <div className={`${show ? "mr-44 duration-1000" : "mr-0 duration-700"} relative w-[50%]`}>
          <img src={left} alt="" className=' opacity-90 h-[600px] w-full'/>
          <p className=' text-7xl font-extrabold font-sans text-white absolute z-10 top-1/4 right-2 max-xl:text-6xl max-lg:text-5xl max-md:text-4xl'>Let's work</p>
          <div className={`${show ? " top-20 right-[-352px] opacity-100" : "top-[-1000px] right-[-115px] opacity-0"} duration-1000 flex flex-col mx-4 gap-6 absolute z-10`}>
          <div className='form'>
          <input type="text"className='input' autoComplete='off' placeholder=' '/>
          <label className='label'>Name</label>
          </div>
          <div className='form'>
          <input type="text"className='input' autoComplete='off' placeholder=' '/>
          <label className='label'>Email</label>
          </div>
          <div className='form2'>
          <textarea className='input' placeholder=' ' autoComplete='off' cols="30" rows="5"></textarea>
          <label className='label'>Message</label>
          </div>
          <div className='mx-auto'>
            <button onClick={() => setShow(!show)} className=' bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 rounded-md font-bold font-sans px-8 py-3'>Submit</button>
          </div>
          <div className='flex flex-col gap-4'>
          <p className=' text-xl font-sans font-medium text-center text-gray-50'>Check my profiles</p>
          <div className='flex gap-6 justify-center'>
            <a href="#" className=' w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center'><AiFillGithub className=' text-lg'/></a>
            <a href="#" className=' w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center'><BsFacebook className=' text-lg'/></a>
            <a href="#" className=' w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center'><AiFillInstagram className=' text-lg'/></a>
            <a href="#" className=' w-8 h-8 rounded-full bg-[#5c7658] hover:bg-[#6a9c78] duration-500 text-gray-50 flex justify-center items-center'><SiNetlify className=' text-lg'/></a>
          </div>
          </div>
        </div>
        </div>
        
        <div className={`${show ? "ml-44 duration-1000" : "ml-0 duration-700"} relative w-[50%]`}>
          <img src={right} alt="" className=' opacity-90 h-[600px] w-full max-[900px]:absolute'/>
          <p className=' text-7xl font-extrabold tracking-wide font-sans text-white absolute z-10 top-1/4 left-4 max-xl:text-6xl max-lg:text-5xl max-md:text-4xl'>Together</p>
          <button onClick={() => setShow(!show)} className={`btn btn1 bg-transparent border-2 border-[#fff] text-gray-50 rounded-md font-bold font-sans absolute z-10 px-8 py-3 ${show ? "opacity-0" : "top-1/2 left-[-90px] opacity-100"}`}>Make an enquiry</button>
        </div>
      </div>
      <div className='flex h-screen justify-center items-center min-[900px]:hidden'>
        <h1 className=' text-6xl font-sans'>Coming Soon</h1>
      </div>
    </>
  )
}

export default Contact