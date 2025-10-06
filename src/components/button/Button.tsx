import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import style from "./Button.module.css";

import React from "react";

interface ButtonProps {
  action?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        className={` ${style.btn} flex items-center bg-[#1e8a8a] px-5 py-2 rounded-full gap-1 cursor-pointer`}
      >
        <span className="flex flex-col items-end ">
          <span className={`${style.action}`}>{props.action}</span>
          <span className={`${style.action2}`}>{props.action}</span>
        </span>

        <FaLongArrowAltRight
          className={`${style.icon} rounded-full w-9 h-9 `}
        />
      </button>
    </div>
  );
};

export default Button;
