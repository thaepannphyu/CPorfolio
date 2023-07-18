import React from "react";
import { Timeline } from "@mantine/core";
import "./education.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Education = () => {
  return (
    <div className=" font-sans w-[90%] py-20 mx-auto flex flex-col md:flex-row lg:flex-row gap-[10%]">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className=" px-5 w-full md:w-[40%] lg:w-[40%] mb-10 ">
        <h2 className="select-none uppercase text-center md:text-left text-2xl font-bold tracking-widest mb-4 text-[#2d9494] dark:text-[#00ffff] pb-5 skill">
          Education
        </h2>
        <Timeline className=" text-pink-500" color="indigo" active={4}>
          <Timeline.Item>
            <h2 className="select-none title">2018</h2>
            <p className="select-none subtitle">Pass Matriculation Exam</p>
          </Timeline.Item>
          <Timeline.Item>
            <h2 className="select-none title">2019 - 2021</h2>
            <p className="select-none subtitle">
              Learned Electronics and Communication in Government Institute Of
              Technology
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <h2 className="select-none title">2022 - 2023</h2>
            <p className="select-none subtitle">Learned Special Web Design in MMS IT</p>
          </Timeline.Item>
          <Timeline.Item>
            <h2 className="select-none title">2022 - present</h2>
            <p className="select-none subtitle">Learning Web App Development in MMS IT</p>
          </Timeline.Item>
          <Timeline.Item>
            <h2 className="select-none title">2022 - present</h2>
            <p className="select-none subtitle">
              Learning Computer Science in University Of People
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
      <div
        // data-aos="fade-up-left"
        // data-aos-offset="300"
        // data-aos-easing="ease-in-sine"
        data-aos="fade-up"
        data-aos-duration="2000"
        className=" px-5 w-full md:w-[40%] lg:w-[40%]">
        <h2 className="select-none uppercase text-center md:text-left text-2xl font-semibold tracking-widest mb-4 text-[#8a9b29] dark:text-[#e1f85b] pb-5 technology">
          Experience
        </h2>
        <Timeline color="indigo" active={3}>
          <Timeline.Item>
            <h2 className="select-none title">Learning Website</h2>
            <p className="select-none subtitle">
              Edu Vibe Learning Website with responsive
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <h2 className="select-none title">Owner Dashboard</h2>
            <p className="select-none subtitle">
              Dashboard for website owner with admin team
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <h2 className="select-none title">Contact Website</h2>
            <p className="select-none subtitle">
              Can contact easily with your family and friends{" "}
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <h2 className="select-none title">Apps using Javascript Vanilla</h2>
            <p className="select-none subtitle">
              List to do , Calculator , Piano , Text Editor and others{" "}
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};

export default Education;
