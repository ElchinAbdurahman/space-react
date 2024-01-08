import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      
      <div className="grid grid-cols-7 gap-5 bg-[#151515] w-full h-[485px] pt-20">
        <div className="flex flex-col pl-5">
          <h1 className="text-[#FF5F5F] font-normal text-[18px]">HAQQIMIZDA</h1>
          <p className="text-[#80858D] text-[16px]">Haqqımızda</p>
          <p className="text-[#80858D] text-[16px]">Struktor</p>
          <p className="text-[#80858D] text-[16px]">Yayım şurası</p>
        </div>
        <div className="flex flex-col pl-5">
          <h1 className="text-[#FF5F5F] font-normal text-[18px]">XƏBƏRLƏR</h1>
          <p className="text-[#80858D] text-[16px]">Lorem</p>
          <p className="text-[#80858D] text-[16px]">Lorem</p>
          <p className="text-[#80858D] text-[16px]">Lorem</p>
          <p className="text-[#80858D] text-[16px]">Lorem</p>
          <p className="text-[#80858D] text-[16px]">Lorem</p>
          <p className="text-[#80858D] text-[16px]">Lorem</p>
          <p className="text-[#80858D] text-[16px]">Lorem</p>
        </div>
        <div className="flex flex-col pl-5">
          <h1 className="text-[#FF5F5F] font-normal text-[18px]">VERLİŞLƏR</h1>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
        </div>
        <div className="flex flex-col pl-5">
          <h1 className="text-[#FF5F5F] font-normal text-[18px]">FİLMLƏR</h1>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
        </div>
        <div className="flex flex-col pl-5">
          <h1 className="text-[#FF5F5F] font-normal text-[18px]">Proqram</h1>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
        </div>
        <div className="flex flex-col pl-5">
          <h1 className="text-[#FF5F5F] font-normal text-[18px]">SERİALLAR</h1>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
          <p className="text-[#80858D] text-[16px]">Maraqlı show</p>
        </div>
        <div className="flex flex-col pl-5 gap-4">
          <h1 className="text-[#FF5F5F] font-normal text-[18px]">İZLƏ</h1>
          <div className="flex items-center gap-2">
            <FaFacebook className="text-[#80858D]" />
            <p className="text-[#80858D] text-[10px] font-medium">
              facebook.com/space
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaInstagram className="text-[#80858D]" />
            <p className="text-[#80858D] text-[10px] font-medium">
              instagram.com/space
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-[#80858D]" />
            <p className="text-[#80858D] text-[10px] font-medium">
              linkedin.com/space
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaTiktok className="text-[#80858D]" />
            <p className="text-[#80858D] text-[10px] font-medium">
              tiktok.com/space
            </p>
          </div>
          <div className="flex items-center gap-2">
            <BsTwitterX className="text-[#80858D]" />
            <p className="text-[#80858D] text-[10px] font-medium">
              twitter.com/space
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaYoutube className="text-[#80858D]" />
            <p className="text-[#80858D] text-[10px] font-medium">
              youtube.com/space
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
