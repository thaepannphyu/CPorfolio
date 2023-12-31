import React from 'react'
import BackToTop from '../backToTop/BackToTop'

const Footer = () => {
  return (
    <div className=' relative'>
      <BackToTop/>
      <div className=' text-center pb-8 pt-12 font-sans bg-img1'>
        <h1 className=' select-none dark:text-white text-black text-lg px-5 max-[450px]:text-base font-medium'>Copyright &copy; 2023 team C . All rights reserved</h1>
      </div>
    </div>
  )
}

export default Footer