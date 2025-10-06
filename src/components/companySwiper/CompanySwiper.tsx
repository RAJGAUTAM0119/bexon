"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "./company.module.css";

import "swiper/css";
import "swiper/css/free-mode";

import influence from "../../../public/images/influence.webp";
import caudac from "../../../public/images/caudac.webp";
import flomodia from "../../../public/images/flomodia.webp";
import monceau from "../../../public/images/monceau.webp";
import tse from "../../../public/images/tse.webp";
import weglot from "../../../public/images/weglot.webp";
import Image from "next/image";

const img = [
  {
    logo: influence,
  },
  {
    logo: caudac,
  },
  {
    logo: flomodia,
  },
  {
    logo: monceau,
  },
  {
    logo: tse,
  },
  {
    logo: weglot,
  },
];

const CompanySwiper = () => {
  return (
    <section className=" w-[98vw] flex self-center justify-self-center h-[180px] bg-[#1e8a8a] rounded-2xl px-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper flex self-center justify-self-center duration-75 "
      >
        {img.map((items, index) => {
          return (
            <SwiperSlide
              key={index}
              className="border rounded-2xl py-5 border-[#7e7e7e] flex items-center justify-self-center  "
            >
              <Image
                src={items.logo}
                alt="brands"
                className="flex self-center justify-self-center   "
              ></Image>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default CompanySwiper;
