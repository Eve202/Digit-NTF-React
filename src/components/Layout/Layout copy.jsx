import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
const Layout = ({children}) => {
    const mobileMenuDiv = document.getElementById('mobileMenuDiv');
    // const mobileMenu = function () {
    //     if (document.getElementById('mobileMenuDiv').classList.contains('translate-x-full bg-opacity-0')) {
    //         document.getElementById('mobileMenuDiv').classList.remove('translate-x-full');
    //         document.getElementById('mobileMenuDiv').classList.remove('bg-opacity-0');
    //         document.getElementById('mobileMenuDiv').classList.add('translate-x-0');
    //         document.getElementById('mobileMenuDiv').classList.add('bg-opacity-15');
    //     }else{
    //         document.getElementById('mobileMenuDiv').classList.remove('translate-x-0');
    //         document.getElementById('mobileMenuDiv').classList.remove('bg-opacity-15');
    //         document.getElementById('mobileMenuDiv').classList.add('translate-x-full');
    //         document.getElementById('mobileMenuDiv').classList.add('bg-opacity-0');
    //     }
    // }
    // document.addEventListener('click', function (e) {
    //     if (e.target === mobileMenuDiv) {
    //         mobileMenuDiv.classList.replace('translate-x-0 bg-opacity-15', 'translate-x-full bg-opacity-0');
    //     }
    // });
    const [menumobile, setMenumobile] = useState(true)
    
    return (
    <>
      <header className="bg-[#F8F8F8] border-b border-[#E8E9EA] py-3 fixed top-0 w-full text-base z-50">
        <div className=" 2xl:px-[120px] md:px-[46px] px-5 md:py-3    flex items-center justify-between">
            <img src="img/logoDigitNft.svg" alt="Logo_Digit_NFT" className=" h-9 w-9  object-cover" />
            <div className="hidden lg:flex items-center justify-center gap-7 text-[#12171F]">
                <NavLink to="/" className="hover:animate-pulse font-semibold">Home</NavLink>
                <NavLink to="/Sales" className="hover:animate-pulse font-semibold">Top sales</NavLink>
                <NavLink to="/Collections" className="hover:animate-pulse font-semibold">Collections</NavLink>
                <NavLink to="/Blog" className="hover:animate-pulse font-semibold">Our blog</NavLink>
                <NavLink to="/About" className="hover:animate-pulse font-semibold">About us</NavLink>
            </div>
            <div className="hidden lg:flex items-center gap-5 ">
                <NavLink  to="/Sign"
                    className="border-r-2 text-[#0E1218] border-[#0E1218] hover:animate-pulse px-[26px] py-2 font-semibold">Sign
                    up</NavLink>
                <div className="bg-[#0E1218] text-white py-[10px] px-[26px] rounded-full">
                    <NavLink to="/Connect" className="hover:animate-pulse font-semibold">Connect Wallet</NavLink>
                </div>
            </div>
            <div className=" lg:hidden">
                <Link onClick={() => setMenumobile(prev => !prev ) } 
                className={` ${menumobile ? 'flex' : 'hidden' }   items-center justify-center w-[30px] h-[30px] rounded-md bg-[#E8E9EA]`} id="openMenu">
                    <img src="img/Vector.svg" alt="menu" className="w-[20px] h-[20px]" />
                </Link>
                <div 
                className={` ${!menumobile ? 'absolute' : 'hidden' } transform  duration-500 ease-in-out absolute bg-black translate-x-full bg-opacity-0    top-0 left-0 w-full h-screen`} id="mobileMenuDiv">
                    <div
                        className="w-full sm:w-2/3 absolute bg-white h-screen right-0 flex flex-col gap-7 pt-16 px-9 items-start">
                        <Link onClick={() => setMenumobile(prev => !prev ) }
                            className={`  absolute top-5 right-5  sm:top-7 sm:right-8 flex items-center justify-center w-[30px] h-[30px] rounded-md bg-[#E8E9EA]`}
                            id="closeMenu">
                            <img src="img/cancel-02.svg" alt="menu" className="w-[20px] h-[20px] " />
                        </Link>
                        <NavLink to="/" className="hover:animate-pulse font-semibold">Home</NavLink>
                        <NavLink to="/Sales" className="hover:animate-pulse font-semibold">Top sales</NavLink>
                        <NavLink to="/Collections" className="hover:animate-pulse font-semibold">Collections</NavLink>
                        <NavLink to="/Blog" className="hover:animate-pulse font-semibold">Our blog</NavLink>
                        <NavLink to="/About" className="hover:animate-pulse font-semibold">About us</NavLink>
                        <div className="flex items-center gap-5 mt-7">
                            <NavLink  to="/Sign"
                                className="border-r-2 text-[#0E1218] whitespace-nowrap border-[#0E1218] hover:animate-pulse px-[26px] py-2 font-semibold">Sign
                                up</NavLink>
                            <div className="bg-[#0E1218] text-white py-[10px] px-[26px] rounded-full">
                                <NavLink to="/Connect"  className="hover:animate-pulse font-semibold whitespace-nowrap">Connect
                                    Wallet</NavLink>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    {children}
    <footer className="bg-[#F8F8F8] pt-24 2xl:px-[120px] md:px-[46px] px-5 ">
        <img src="img/logoDigitNft.svg" alt="Logo_Digit_NFT" className=" h-9 w-9  object-cover mb-3" />
        <div
            className="flex lg:flex-row  lg:justify-between  justify-start flex-col lg:items-center gap-7 border-t-[0.5px] border-[#B8BABE] py-8 ">
            <p className="text-2xl font-semibold text-[#181D28]">Create Explore & Collect Digital NFTs</p>
            <div className="text-black text-sm flex items-center lg:justify-end sm:justify-start justify-center gap-[30px]">
                <a>Privacy</a>
                <a>Terms & Conditions</a>
                <a>About Us</a>
            </div>
        </div>
    </footer>
    </>
  )

    
}

export default Layout
