import React from 'react'
import "./projectShow.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from "../../../assets/pj-photo/pj-1.png"
import image2 from "../../../assets/pj-photo/pj-2.png"
import image3 from "../../../assets/pj-photo/pj-3.png"

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ProjectsShow = () => {
  return (
    <>
    <div className=' my-10'>
      {/* title */}
      <div className='flex flex-col justify-center items-center gap-3'>
        <h1>Recent <span className=' text-purple-700'>Projects</span></h1>
        <p className=' w-[500px] text-center'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque voluptate excepturi porro sed totam quis animi dolorum rerum earum.
        </p>
      </div>

      {/* swiper  */}
      <div className=' mt-10'>
        <Swiper
          slidesPerView= {1}
          spaceBetween={10}
          centeredSlides= {true}
          grabCursor= {true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 5000, 
            disableOnInteraction: false, 
          }}
          className="mySwiper w-[700px] pb-9"
        >
          <SwiperSlide>
            <div className='card w-[700px] relative cursor-pointer'>
              <img src={image1} alt="" className=' ' />
              <div className='layer absolute'>
                <h1>Contact Web Design</h1>
                <button className=' border px-3 py-1'>View Detail</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card w-[700px] relative cursor-pointer'>
              <img src={image2} alt="" className=' ' />
              <div className='layer absolute'>
                <h1>Frontend Web Design</h1>
                <button className=' border px-3 py-1'>View Detail</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card w-[700px] relative cursor-pointer'>
              <img src={image3} alt="" className=' ' />
              <div className='layer absolute'>
                <h1>Frontend Web Design</h1>
                <button className=' border px-3 py-1'>View Detail</button>
              </div>
            </div>
          </SwiperSlide>
      
        </Swiper>

        

      </div>

    </div>
    </>
  )
}

export default ProjectsShow