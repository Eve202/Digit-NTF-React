import React from 'react'
import ScrollChild from './ScrollChild'
import { collections } from '../Data'
import { Link } from 'react-router-dom'
const Section2 = () => {
    
  return (
    <>
     <section className='bg-[#F8F8F8] 2xl:px-[120px] md:px-[46px] px-5'>
            <div className="flex flex-col gap-9 text-[#0E1218]">
                <p className="text-2xl font-bold sm:text-3xl">Our Collections</p>
                <ScrollChild />
                <div className="flex items-center justify-center gap-4 sm:gap-5 2xl:gap-6  flex-wrap lg:justify-between">
                    {collections.map((NFT,index) =>{
                        return <div key={index}>
                            <div className="w-[282px] border border-[#B8BABE]  rounded-2xl   p-3 flex flex-col gap-3 h-fit" >
                        <img src={NFT.imgNFT} alt="CyberPunk" className="w-full object-cover h-56 rounded-2xl" />
                        <div className="flex justify-between">
                            <p className="font-bold line-clamp-1 overflow-hidden whitespace-nowrap">{NFT.nameNFT}</p>
                            <div className="flex items-center gap-1 text-lg ">
                                <img src={NFT.coin} alt="ethereum-ellipse" className="h-6 w-6" />
                                <p className="font-bold">{NFT.nbrCoin}</p>
                            </div>
                        </div>
                        <Link className="text-center font-semibold rounded-xl py-[10px] border border-[#0E1218] hover:animate-pulse">Place a
                            Bid</Link>
                    </div>
                        </div>
                    } )}
                </div>
            </div>
        </section> 
    </>
  )
}

export default Section2
