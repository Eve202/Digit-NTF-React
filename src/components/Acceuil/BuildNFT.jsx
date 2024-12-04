import React from 'react'

const BuildNFT = ({props}) => {
  return (
    <>
     <section className='bg-[#F8F8F8] 2xl:px-[120px] md:px-[46px] px-5'>
            <div
                className="h-[336px] relative   rounded-[32px] overflow-hidden flex items-center justify-center">
                <img src="img/NFTProfile.svg" className="w-full h-full object-cover absolute" alt="NFTProfile" />
                <div className="relative flex flex-col items-center justify-center gap-10 text-white">
                    <p className=" text-[28px] sm:text-5xl lg:text-[64px] font-medium">{props.title}</p>
                <p className=" text-xs sm:text-lg lg:text-[20px] font-semibold">{props.description}</p>
                <a href="#"
                    className=" text-[#0E1218] font-semibold bg-white py-[10px] px-[26px] whitespace-nowrap rounded-[42px] hover:animate-pulse">Sign up now</a>
                </div>
            </div>
        </section> 
    </>
  )
}

export default BuildNFT
