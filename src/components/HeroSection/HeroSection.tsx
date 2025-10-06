import { BiSolidPhoneCall } from "react-icons/bi";
import "./Hero.module.css";
import Image from "next/image";
import HeroImage from "../../../public/images/hero-img-2.webp";
import Growth from "../../../public/images/growth.webp";
import { LuBox } from "react-icons/lu";
import Button from "../button/Button";

const HeroSection = () => {
  return (
    <section
      className=" relative -top-22 z-[-2] flex self-center justify-self-center
     bg-[#d8e5e5] w-[98vw] pt-28 pb-10 rounded-2xl hero"
    >
      <div className="flex items-center justify-center gap-20 px-5 w-[98vw]  ">
        <div className="flex flex-col gap-5">
          <div>
            <p className="flex items-center gap-1 font-semibold text-[#208b8b] text-[18px]">
              <LuBox />
              Get to Know Us
            </p>
          </div>
          <div>
            <h1 className="text-7xl">
              Driving
              <br />
              Excellence
              <br />
              Through
              <br />
              Evolution &<br />
              Trust.
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Button action="Learn More"/>
            <span className="flex items-center text-[18px] font-semibold underline gap-1">
              <BiSolidPhoneCall />
              1-888-452-1505
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col -rotate-90">
            <p>Edde Marren</p>
            <p>CEO $ Founder</p>
          </div>

          <div className="relative">
            <Image
              src={HeroImage}
              alt="Hero Image"
              width={460}
              height={600}
              className="rounded-2xl"
            ></Image>

            <div>
              <Image
                src={Growth}
                width={170}
                height={180}
                alt="growth"
                className="absolute bottom-5 left-5  p-3 rounded-md bg-blend-screen backdrop-blur-sm"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
