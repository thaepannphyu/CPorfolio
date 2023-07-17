import React from 'react'
import BackToTop from '../backToTop/BackToTop'

const Footer = () => {
  return (
    <div className=' relative'>
      <BackToTop/>
      <div className=' text-center py-8 font-sans bg-img1'>
        <h1 className=' dark:text-white text-black text-lg'>Copyright &copy; 2023 team C . All rights reserved</h1>
      </div>
    </div>
  )
}

export default Footer