import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MdEmail,
  MdPhone
} from 'react-icons/md';
import {
  FaArrowAltCircleLeft,
  FaFacebookMessenger,
  FaHeart,
  FaInstagram,
  FaList,
  FaLock,
  FaShoppingCart,
  FaTools,
  FaTwitter,
  FaUser,
  FaWordpress
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { BiLogOutCircle } from 'react-icons/bi';
import { LuMessageSquareMore } from 'react-icons/lu';
import { CiLocationOn } from "react-icons/ci";
import Popover from './Popover';

const Header = () => {
  const { pathname } = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [popover, setPopover] = useState(false);

  const handleMouseOut = () => {
    setPopover(false);
  }
  const handleMouseOver = () => {
    setPopover(true);
  }

  return (
    <div className="backdrop-blur-sm border-b-[1px] border-b-[#ffffff5f] w-screen z-200 fixed">

      {/* Topbar */}
      <div className="header-top bg-[#FB0347] max-md-lg:hidden text-[#fff2df]">
        <div className="w-[85%] max-lg:w-[90%] mx-auto">
          <div className="flex justify-between items-center h-[50px]">
            <ul className="flex gap-8 font-medium text-sm">
              <li className="flex items-center gap-3 relative after:absolute after:h-[18px] after:w-[1px] after:bg-[#9f92798d] after:-right-[16px]">
                <MdEmail />
                <span className='uppercase font-light'>fwd.ayan@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                {/* <MdPhone /> <span>+91xxxxxxxxxx</span> */}
              </li>
            </ul>
            <div className="flex gap-10 text-md">
              <div className="flex items-center gap-4 relative after:absolute after:h-[18px] after:w-[1px] after:bg-[#9f92798d] after:-right-[16px]">
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaWordpress /></a>
              </div>
              <div className="flex gap-3 text-sm cursor-pointer group">
                {/* Optional: Login/Profile Links */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="header-top z-30 w-full">
        <div className="px-5 w-full">
          <div className="h-[80px] flex justify-between items-center flex-wrap max-md:h-[50px] max-md-lg:h-[100px] text-white">
                <div className="flex items-center justify-between w-full">
                <Link  to="/" className="flex items-center h-full w-1/5">
                  <img className=" max-md:h-[40px] md:h-[80px] text-[#fff]" src="https://res.cloudinary.com/decks92gf/image/upload/v1752392220/erasebg-transformed_ooivqf.webp" alt="Logo" />
                  {/* <MyLogo  fillColor='#FB0347'/> */}
                </Link>
                <div
                  onClick={() => setShowSidebar(true)}
                  className=" w-1/5 md:hidden  flex justify-end items-center"
                >
                  <FaList className='h-[30px] w-[30px] border border-[#fff] rounded-sm cursor-pointer p-1' />
                </div>
                <div className='max-md:hidden w-3/5 uppercase flex items-center justify-evenly'>
                <Link className={`${pathname === '/' ? 'text-[#FB0347]' : ''}`} to={'/'} >Home</Link>
                  <Link className={`${pathname === '/about-us' ? 'text-[#FB0347]' : ''}`} >About Us</Link>
                  <Link className={`${pathname === '/my-ministers' ? 'text-[#FB0347]' : ''}`}  to={'/my-ministers'} >My Ministers</Link>
                  {/* <Link>XYZABCD</Link> */}
                </div>
                <div
                  className=" w-1/5 relative  max-md:hidden flex  justify-end items-center"
                >
                  <CiLocationOn onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='h-[30px] w-[30px] border border-[#fff] rounded-full cursor-pointer p-1' />
                  <Popover visible={popover}/>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="relative md-lg:block">
        {/* Overlay */}
        {showSidebar&&<div
        onClick={() => setShowSidebar(false)}
        className={`fixed top-0 left-0 w-screen h-screen bg-black/50 z-[9998] md-lg:hidden transition-opacity duration-300 ${
          showSidebar ? 'opacity-100' : 'opacity-0'
        }`}
        />}
        {/* Sidebar Content */}
        <div
          className={`w-[300px] z-[9999] fixed transition-all duration-200 ${!showSidebar ? '-left-[300px]' : 'left-0 top-0'} h-screen py-6 px-8 overflow-auto bg-[#FB0347] md-lg:hidden`}
        >
          <div className="flex flex-col gap-6 text-[#000]">
            <Link to="/" className="pb-[100px]"><img className="h-1/3" src="https://res.cloudinary.com/decks92gf/image/upload/v1752431634/logo-black_lbbyqh.webp" alt="Logo" /></Link>
            {/* <div className="flex justify-between items-center gap-3 text-[2vh] uppercase tracking-tighter font-extralight">
              <Link to="/login" className="flex items-center gap-2">Sign In</Link>
              <FaArrowAltCircleLeft onClick={() => setShowSidebar(false)} className="h-[20px] w-[20px]" />
            </div> */}
            {/* <div className="flex items-center gap-4 pb-[100px] text-md">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaWordpress /></a>
            </div> */}
          </div>

          {/* Sidebar Links */}
          <ul className="flex flex-col mt-5 text-[#000] gap-8 font-light uppercase text-xl">
            <li><Link to="/" className={`${pathname === '/' ? 'text-[#ffffff]' : ''}`}>HOME</Link></li>            
            <li><Link to="/my-ministers" className={`${pathname === '/my-ministers' ? 'text-[#ffffff]' : ''}`}>MY MINISTERS</Link></li>
            <li><Link to="/about-us" className={`${pathname === '/about-us' ? 'text-[#ffffff]' : ''}`}>ABOUT US</Link></li>
            <li><Link >CONTACT US</Link></li>
            {/* <li><Link to="/aboutus" className={`${pathname === '/aboutus' ? 'text-[#ffe5be]' : ''}`}>OUR PURPOSE</Link></li>
            <li><Link to="/fordev" className={`${pathname === '/fordev' ? 'text-[#ffe5be]' : ''}`}>FOR DEVS</Link></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
