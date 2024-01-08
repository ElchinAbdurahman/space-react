import React, { useState } from "react";
import slider from "../../images/slider1.png";
import play from "../../images/play.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../style/HeroSection.css";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Autoplay,
} from "swiper/modules";

export default function HeroSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const pagination = {
    clickable: true,
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        pagination={pagination}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Pagination, Autoplay]}
        className="mySwiper3 
         "
      >
        <SwiperSlide className="relative w-full  ">
          <div className="flex flex-col items-center justify-center">
            <button className="absolute left-1/2 top-[70%] transform -translate-x-1/2 -translate-y-1/2 inline-flex gap-1 items-center bg-[#3E3333] border-0 focus:outline-none text-[18px] text-white mt-4 pr-2">
              <div className="bg-[#FF5F5F] flex items-center justify-center p-1 h-[28px]">
                <img src={play} alt="" />
              </div>
              Anonsu izlə
            </button>
            <img className="w-full" src={slider} />
            <p className="absolute left-1/2  bottom-0 transform -translate-x-1/2 -translate-y-1/2 text-white text-[65px] font-bold">
              LA CASE <span className="bg-[#FF5F5F] px-1 py-0">DE</span> PAPEL
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full ">
          <div className="flex flex-col items-center justify-center">
            <button className="absolute left-1/2 top-[70%] transform -translate-x-1/2 -translate-y-1/2 inline-flex gap-1 items-center bg-[#3E3333] border-0 focus:outline-none text-[18px] text-white mt-4 pr-2">
              <div className="bg-[#FF5F5F] flex items-center justify-center p-1 h-[28px]">
                <img src={play} alt="" />
              </div>
              Anonsu izlə
            </button>
            <img className="w-full" src={slider} />
            <p className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 text-white text-[65px] font-bold">
              LA CASE <span className="bg-[#FF5F5F] px-1 py-0">DE</span> PAPEL
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
