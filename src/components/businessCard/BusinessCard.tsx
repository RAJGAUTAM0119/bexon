import {
  PiHeadphonesThin,
  PiLightbulbFilamentThin,
  PiTrophyThin,
} from "react-icons/pi";
import style from "./business.module.css";
import Button from "../button/Button";
import { CiUser } from "react-icons/ci";
import { GoPackage } from "react-icons/go";

const cards = [
  {
    icon: (
      <PiLightbulbFilamentThin
        className={`${style.icon} text-8xl -ml-3 text-[#2f9393]`}
      />
    ),
    heading: "Innovative Solutions",
    para: "We stay ahead of the leveraging cutting-edge technologies and strategies to keep.",
    button: <Button action="Read More" />,
  },
  {
    icon: (
      <PiTrophyThin className={`${style.icon} text-8xl -ml-3 text-[#2f9393]`} />
    ),
    heading: "Award-Winning",
    para: "Recognized by industry leaders, our award-winning team has a proven record.",
    button: <Button action="Read More" />,
  },
  {
    icon: <CiUser className={`${style.icon} text-8xl -ml-3 text-[#2f9393]`} />,
    heading: "Expert Team",
    para: "Our team is always available to address your concerns, providing quick and solution.",
    button: <Button action="Read More" />,
  },
  {
    icon: (
      <PiHeadphonesThin
        className={`${style.icon} text-8xl -ml-3 text-[#2f9393]`}
      />
    ),
    heading: "Dedicated Support",
    para: "Our team is always available to address your concerns, providing quick and effective.",
    button: <Button action="Read More" />,
  },
];

const BusinessCard = () => {
  return (
    <section className="flex self-center justify-self-center py-15">
      <div className="flex items-center justify-center flex-col ">
        <p className="flex items-center font-semibold text-[#1e8a8a] text-[18px] gap-2">
          <GoPackage /> Choose the Best
        </p>
        <h2 className="py-5 flex flex-col items-center justify-center text-5xl font-semibold">
          Empowering Business
          <br />
          with Expertise.
        </h2>
        <div className="flex gap-10 pt-5 ">
          {cards.map((items, index) => (
            <div
              key={index}
              className={`${style.card} w-[260px] h-[420px] bg-white rounded-2xl py-15 px-5 relative  `}
            >
              <span className={`${style.icon}`}>{items.icon}</span>
              <h4 className={`${style.heading} py-3 font-semibold text-2xl `}>
                {items.heading}
              </h4>
              <p className={`${style.para}`}>{items.para}</p>
              <span className="absolute bottom-3.5">{items.button}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCard;
