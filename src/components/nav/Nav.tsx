"use client";
import Link from "next/link";
import style from "./Nav.module.css";
import Logo from "../../../public/images/bexon logo.webp";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import Button from "../button/Button";
import { FaCircleCheck, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const navLinks = [
  { navLink: "Home", icons: <IoIosArrowDown /> },
  { navLink: "Pages", icons: <IoIosArrowDown /> },
  { navLink: "Services", icons: <IoIosArrowDown /> },
  { navLink: "Portfolio", icons: <IoIosArrowDown /> },
  { navLink: "Blog", icons: <IoIosArrowDown /> },
  { navLink: "Contact", icons: <IoIosArrowDown /> },
];

const socialIcon = [
  {
    iconName: (
      <FaFacebook className="text-[#78b9b9]  hover:-translate-y-1 transition-all hover:bg-white duration-500 rounded-full p-1 w-6 h-6" />
    ),
  },
  {
    iconName: (
      <FaInstagram className="text-[#78b9b9]  hover:-translate-y-1 transition-all hover:bg-white duration-500 rounded-full p-1 w-6 h-6" />
    ),
  },
  {
    iconName: (
      <FaXTwitter className="text-[#78b9b9]  hover:-translate-y-1 transition-all hover:bg-white duration-500 rounded-full p-1 w-6 h-6" />
    ),
  },
  {
    iconName: (
      <FaLinkedinIn className="text-[#78b9b9]  hover:-translate-y-1 transition-all hover:bg-white duration-500 rounded-full p-1 w-6 h-6" />
    ),
  },
];

const Nav = () => {
  const [isHamClick, setHamClick] = useState(false);
  const hamClick = () => {
    if (!isHamClick) {
      setHamClick(!false);
    } else {
      setHamClick(false);
    }
  };
  return (
    <section className="flex flex-col self-center justify-self-center px-5">
      {/* Top InfoBar */}

      <div className="w-full lg:w-[98dvw] lg:gap-2 md:gap-0 py-2 md:py-3 lg:px-5 bg-[#1e8a8a] flex flex-col md:flex-row items-center justify-center md:justify-between rounded-bl-2xl rounded-br-2xl">
        {/* infoBar left side */}
        <div className="flex items-center gap-2 text-white">
          <div>
            <FaCircleCheck className="" />
          </div>
          <div>Recognize For Exellence</div>
          <div className="font-semibold">
            <Link href="#" className="cursor-pointer">
              Join Us now
            </Link>{" "}
          </div>
        </div>

        {/* infobar Right side */}
        <div className=" flex items-center justify-between sm:gap-1 lg:gap-5 text-white lg:text-[16px]">
          {/* Find a location */}
          <div className="flex items-center gap-2 border-[#379797] border-dashed border-l-[1px] pl-3">
            <div>
              <GrLocation />
            </div>
            <div>Find a Location!</div>
          </div>

          {/* call us */}
          <div className="flex items-center gap-2 border-[#379797] border-dashed border-l-[1px] pl-3">
            <div>
              <BiPhoneCall />
            </div>
            <div>808-909-1313</div>
          </div>

          {/* Social links */}
          <div className="hidden md:flex items-center gap-2 border-[#379797] border-dashed border-l-[1px] pl-3">
            <div>
              <ul className="flex gap-3">
                {socialIcon.map((items, index) => (
                  <li key={index}>
                    <Link href="#">{items.iconName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* bottom navbar */}
      <div className="sm:m-0 mt-6 ">
        <nav className="p-5 md:px-10 flex items-center justify-between text-[#1a2c2f] active:text-[#278e8e] border-b border-[#c9d1d1] border-dashed">
          <div>
            <Image
              src={Logo}
              alt="logo"
              width={150}
              height={150}
              className="w-[120px] md:w-[150px]"
            ></Image>
          </div>
          <div>
            <ul className="hidden md:flex gap-5 font-[550]">
              {navLinks.map((items, index) => (
                <li key={index}>
                  <Link href="/" className="flex items-center gap-1  py-5">
                    {items.navLink}
                    {items.icons}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <div
              className={`cursor-pointer  rounded-full p-2 flex items-center justify-center `}
            >
              <IoSearchOutline className="w-7 h-7 hover:animate__bounceIn  animate__animated  " />
            </div>
            <div className="block">
              <Button action="Let's Talk" />
            </div>
          </div>
          <div>
            <GiHamburgerMenu
              onClick={hamClick}
              className="hamberger block md:hidden bg-[#1e8a8a] rounded-md h-12 w-12 text-white p-2"
            />
            {isHamClick && (
              <div
                className={`${style.hamSideBar} absolute right-0 text-white font-semibold `}
              >
                <div
                  className={`${style.sideBar} bg-[#0c2023] w-[70dvw] md:w-[50dvw] p-5`}
                >
                  <ul>
                    {navLinks.map((items, index) => (
                      <li key={index}>
                        <Link href="/" className="flex items-center ">
                          {items.navLink}
                          {items.icons}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
