import React from "react";
import "./projectShow.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../../assets/pj-photo/pj-1.png";
import image2 from "../../../assets/pj-photo/pj-2.png";
import image3 from "../../../assets/pj-photo/pj-3.png";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ProjectsShow = () => {
  const pj = [
    {
      id: 1,
      name: "Contact Web Design",
      img: image1,
      demo: "https://contact-web1.netlify.app",
      git: "https://github.com/khinezinthin/Contact-web",
    },
    {
      id: 2,
      name: "Frontend Web Design",
      img: image2,
      demo: "https://eduvide.netlify.app",
      git: "https://github.com/khinezinthin/Edu-Pro",
    },
    {
      id: 3,
      name: "Dashboard Web Design",
      img: image3,
      demo: "https://edu-pro-dashboard2.netlify.app",
      git: "https://github.com/khinezinthin/Edu_Pro_Dashboard",
    },
    {
      id: 4,
      name: "Contact Web Design",
      img: image1,
      demo: "https://contact-web1.netlify.app",
      git: "https://github.com/khinezinthin/Contact-web",
    },
    {
      id: 5,
      name: "Frontend Web Design",
      img: image2,
      demo: "https://eduvide.netlify.app",
      git: "https://github.com/khinezinthin/Edu-Pro",
    },
    {
      id: 6,
      name: "Dashboard Web Design",
      img: image3,
      demo: "https://edu-pro-dashboard2.netlify.app",
      git: "https://github.com/khinezinthin/Edu_Pro_Dashboard",
    },
  ];
  return (
    <>
      <div className=" py-9 font-sans">
        {/* title */}
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className=" text-3xl font-bold tracking-wider">
            Recent <span className=" text-purple-700">Projects</span>
          </h1>
          <p className=" w-[500px] max-[600px]:w-full max-[600px]:px-8 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            doloremque voluptate excepturi porro sed totam quis animi dolorum
            rerum earum.
          </p>
        </div>

        {/* swiper  */}
        <div className=" mt-3 mx-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            initialSlide={2}
            className="mySwiper w-[100%] py-12 pl-5"
          >
            {pj.map((pj) => {
              return (
                <div key={pj.id}>
                  <SwiperSlide>
                    <div className="card p-2 w-[95%] bg-[#202020] rounded-md overflow-hidden">
                      <div className="card-body w-full relative cursor-pointer">
                        <img src={pj.img} alt="" className="" />
                        <div className="layer absolute ">
                          <h1 className=" tracking-wide max-xl:whitespace-nowrap">{pj.name}</h1>
                          <div className="flex justify-center items-center gap-3">
                            <a
                              href={pj.demo}
                              target="_blank"
                              className=" hover:bg-[#00ffff] hover:text-black duration-500 border px-2 py-1 border-[#00ffff] rounded-sm text-sm"
                            >
                              Demo
                            </a>
                            <a
                              href={pj.git}
                              target="_blank"
                              className=" hover:bg-[#00ffff] hover:text-black duration-500 border px-3 py-1 border-[#00ffff] rounded-sm  text-sm"
                            >
                              GitHub
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProjectsShow;
