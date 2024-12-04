import React from 'react'
import { Link } from 'react-router-dom'
const HeroSection = ({title, description, buttontext, image}) => {
  return (
    <>
      <section className="bg-[#F8F8F8] 2xl:px-[120px] md:px-[46px] px-5 pt-8 sm:pt-16 2xl:pt-[76px]  ">
        <div className="py-24 pt-[94px] lg:pt-[92px]">
            <div className="flex lg:flex-row flex-col items-start text-[#181D28] h-fit">
                <div className="lg:w-1/2 flex flex-col lg:gap-12 md:gap-8 gap-4">
                    <p className="text-5xl sm:text-8xl 2xl:text-[120px] ">{title}</p>
                    <p className=" max-w-sm text-[##484D56]">{description}</p>
                    <Link className="flex gap-4 items-center hover:animate-pulse text-[#181D28] font-semibold ">
                        <span>{buttontext}</span>
                        <span className="border border-[#181D28] rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </span>
                    </Link>
                </div>
                <div className="lg:w-1/2 relative sm:w-fit mx-auto h-fit lg:mt-0 mt-10">
                    <img src={image} alt=""
                        className="relative top-0   sm:left-0  lg:-left-16 object-cover" />
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default HeroSection
