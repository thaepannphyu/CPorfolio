import React from 'react'
import {AiOutlineArrowUp} from "react-icons/ai"
import "./backToTop.css"

const BackToTop = () => {
  const backToTop = ()=>{
    document.documentElement.scrollTop = 0 ;
  }
  return (
    <div className=' flex justify-center'>
      <div onClick={backToTop} className=' cursor-pointer text-lg px-2 py-2 rounded-md absolute top-[-17px] backToTop'>
        <AiOutlineArrowUp/>
      </div>
    </div>
  )
}

export default BackToTop