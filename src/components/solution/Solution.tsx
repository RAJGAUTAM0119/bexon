"use client";
import Image from "next/image";
import style from "./Solution.module.css";
import serviceImage1 from "../../../public/images/service-2.webp";
import serviceImage2 from "../../../public/images/service-3.webp";
import serviceImage3 from "../../../public/images/service-4.webp";
import serviceImage4 from "../../../public/images/service-6.webp";
import { useState } from "react";

const cards = [
  {
    serviceImage: serviceImage1,
    icon: "",
    heading: "Business Strategy Development",
    para: "Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.",
  },
  {
    serviceImage: serviceImage2,
    icon: "",
    heading: "Customer Experience Solutions",
    para: "Customer Experience Solutions are designed to enhance every touchpoint of your customer journey, from first interaction.",
  },
  {
    serviceImage: serviceImage3,
    icon: "",
    heading: "Sustainability and ESG Consulting",
    para: "Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.",
  },
  {
    serviceImage: serviceImage4,
    icon: "",
    heading: "Training and Development Programs",
    para: "Training and Development Programs are designed to empower employees with the skills, knowledge, and tools they need.",
  },
];

const Solution = () => {
  // for business image rendering
  // const [isBusinessEnter, setBusinessEnter] = useState(false);
  // function businessMouseEnter() {
  //   if (!isBusinessEnter) {
  //     setBusinessEnter(!false);
  //   } else {
  //     setBusinessEnter(false);
  //   }
  // }
  // function businessMouseLeave() {
  //   if (isBusinessEnter) {
  //     setBusinessEnter(false);
  //   } else {
  //     setBusinessEnter(!false);
  //   }
  // }

  // // for solution image rendering
  // const [isSolutionEnter, setSolutionEnter] = useState(false);
  // function solutionMouseEnter() {
  //   if (!isSolutionEnter) {
  //     setSolutionEnter(!false);
  //   } else {
  //     setSolutionEnter(false);
  //   }
  // }
  // function solutionMouseLeave() {
  //   if (isSolutionEnter) {
  //     setSolutionEnter(false);
  //   } else {
  //     setSolutionEnter(!false);
  //   }
  // }

  // // for Consulting image rendering
  // const [isConsultingEnter, setConsultingEnter] = useState(false);
  // function consultingMouseEnter() {
  //   if (!isConsultingEnter) {
  //     setConsultingEnter(!false);
  //   } else {
  //     setConsultingEnter(false);
  //   }
  // }
  // function consultingMouseLeave() {
  //   if (isConsultingEnter) {
  //     setConsultingEnter(false);
  //   } else {
  //     setConsultingEnter(!false);
  //   }
  // }
  // // for development image rendering
  // const [isDevelopmentEnter, setDevelopmentEnter] = useState(false);
  // function developmentMouseEnter() {
  //   if (!isDevelopmentEnter) {
  //     setDevelopmentEnter(!false);
  //   } else {
  //     setDevelopmentEnter(false);
  //   }
  // }
  // function developmentMouseLeave() {
  //   if (isDevelopmentEnter) {
  //     setDevelopmentEnter(false);
  //   } else {
  //     setDevelopmentEnter(!false);
  //   }
  // }

  return (
    <section className="relative py-5 flex flex-col self-center justify-self-center px-20  w-[98vw]">
      <div className="flex flex-col items-center justify-center px-20 gap-5">
        <p className="text-sm font-semibold text-[20px]">Our Solutions</p>
        <h3 className="text-5xl ">
          Tailor Business Solutions
          <br />
          for Corporates.
        </h3>
        <div className=" flex flex-col gap-5">
          {cards.map((items, index) => {
            return (
              <div
                key={index}
                // onMouseEnter={businessMouseEnter}
                // onMouseLeave={businessMouseLeave}
                className={`${style.card} flex items-center cursor-pointer bg-white gap-5 rounded-2xl px-10 py-7`}
              >
                {/* {isBusinessEnter && (
                  <div
                    className={`${style.cardHoverImage} absolute top-[50%] left-[50%] `}
                  >
                    <Image
                      src={items.serviceImage}
                      alt="service image"
                      width={150}
                      height={100}
                    ></Image>
                  </div>
                )} */}
                <div>
                  <Image
                    src={items.icon}
                    alt="icons"
                    width={75}
                    height={75}
                    className={`${style.icon} rounded-full bg-amber-500 `}
                  ></Image>
                </div>
                <div className="w-[1120px] flex items-center justify-between ">
                  <div
                    className={`${style.heading} w-[280px]  text-[#0c1e21] font-semibold text-2xl`}
                  >
                    {items.heading}
                  </div>
                  <div
                    className={`${style.para}  w-1/3 font-semibold text-[#4e6366]`}
                  >
                    {items.para}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;
