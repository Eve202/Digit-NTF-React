import React from "react";
import { listButton } from "../Data";
import { Link } from "react-router-dom";
const ScrollChild = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="overflow-x-scroll hiddenScrollBar">
          <div className="flex justify-between items-center gap-3 text-[#0E1218] my-3">
            <div className="flex items-center gap-2 w-fit text-sm ">
              {listButton.map((btn, index) => {
                return (
                  <Link key={index}>
                    <span
                      className={`${
                        index === 0
                          ? "bg-[#0E1218]  text-white"
                          : "hover:bg-[#0E1218]  hover:text-white bg-[#E8E9EA]"
                      } px-[26px] py-[10px] whitespace-nowrap rounded-xl transform transition-all duration-500 ease-in-out`}
                    >
                      {btn.text}
                    </span>
                  </Link>
                );
              })}
            </div>
            <a href="#" className="underline whitespace-nowrap">
              View more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollChild;
