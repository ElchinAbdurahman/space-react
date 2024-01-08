import React from "react";
import logo from "../../images/logo.png";
import radio from "../../images/radio.png";
import play from "../../images/play.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className=" bg-black px-2 py-2">
        <div className="container mx-auto flex flex-wrap p-5  flex-row items-center">
          <NavLink to={'/'} className="flex font-medium items-center text-white mb-4 ">
            <img src={logo} alt="" />
          </NavLink>
          <nav className=" ml-auto mr-auto flex flex-wrap items-center text-base justify-center text-white gap-10 font-medium text-[18px]">
            <NavLink to='/about' className="mr-5 relative group transition-colors hover:text-[#FF5F5F]">
              Haqqımızda
              <div className="absolute bottom-[-20px] left-0 w-full h-[2px] bg-[#FF5F5F] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </NavLink>
            <a className="mr-5 relative group transition-colors hover:text-[#FF5F5F]">
              Xəbərlər
              <div className="absolute bottom-[-20px] left-0 w-full h-[2px] bg-[#FF5F5F] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a className="mr-5 relative group transition-colors hover:text-[#FF5F5F]">
              Verilişlər
              <div className="absolute bottom-[-20px] left-0 w-full h-[2px] bg-[#FF5F5F] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a className="mr-5 relative group transition-colors hover:text-[#FF5F5F]">
              Filmlər
              <div className="absolute bottom-[-20px] left-0 w-full h-[2px] bg-[#FF5F5F] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a className="mr-5 relative group transition-colors hover:text-[#FF5F5F]">
              Seriallar
              <div className="absolute bottom-[-20px] left-0 w-full h-[2px] bg-[#FF5F5F] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a className="mr-5 relative group transition-colors hover:text-[#FF5F5F]">
              Proqram
              <div className="absolute bottom-[-20px] left-0 w-full h-[2px] bg-[#FF5F5F] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
          </nav>
          <div className="flex items-center gap-5 h-10 relative">
            <button className="inline-flex gap-1 items-center bg-[#3E3333] border-0 relative focus:outline-none text-[18px] text-white mt-4 pr-2">
              <div className="bg-[#FF5F5F] flex items-center justify-center p-2 h-[28px]">
                <img src={radio} alt="" />
              </div>
              Dinlə
              <span className="absolute top-[-10px] right-[-10px] mt-0 bg-[#FF5F5F] rounded text-white text-[9px] pl-1 pr-[2px]">
                160 <sup>fm</sup>
              </span>
            </button>
            <button className="inline-flex gap-1 items-center bg-[#3E3333] border-0  focus:outline-none text-[18px] text-white mt-4 pr-2">
              <div className="bg-[#FF5F5F] flex items-center justify-center p-1 h-[28px]">
                <img src={play} alt="" />
              </div>
              Canlı izlə
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
