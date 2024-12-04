import React from "react";
import { CreateSell } from "../Data";
const Section3 = () => {
  
  return (
    <>
      <section className="py-24 bg-[#F8F8F8] 2xl:px-[120px] md:px-[46px] px-5">
        <div className="flex flex-col gap-9 text-[#0E1218]">
          <p className="text-2xl font-bold sm:text-3xl">Create and Sell Now</p>
          <div className="flex items-center justify-center gap-4 sm:gap-5 2xl:gap-6  flex-wrap lg:justify-between">
            {CreateSell.map((card, index) => {
              return (
                <div key={index}>
                  <div className="w-[282px] p-6 rounded-3xl flex flex-col gap-[10px] bg-[#E8E9EA]">
                    <div className="p-[10px] bg-[#181D28] rounded-lg w-fit">
                      <img
                        src={card.icon}
                        alt="bitcoin"
                        className="w-[30px] h-[30px]"
                      />
                    </div>
                    <p className="text-[20px] font-bold">{card.title}</p>
                    <p className="line-clamp-4 overflow-hidden text-sm text-[#484D56]">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
