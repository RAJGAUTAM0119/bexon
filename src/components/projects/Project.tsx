"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import project1 from "../../../public/images/project-1.webp"

const Project = () => {
  return (
    <section className="py-5 flex flex-col self-center justify-self-center w-[98vw] bg-amber-400 h-[900px]">
      <div className="flex flex-col items-center gap-5 justify-center">
        <p>Proud Projects</p>
        <h2>
          Breaking Boundaries,
          <br />
          Building Dreams.
        </h2>
        <div className="flex cursor-pointer text-black">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper  cursor-pointer text-white"
          >
            <SwiperSlide className="flex">
              <div >
                <Image src={project1} alt=""></Image>
                <div>
                  <p>Business</p>
                </div>
                <div>
                  <h2>Event Managment Plateform</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
