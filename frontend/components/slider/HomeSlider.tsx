"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Resume1 from "../../public/resume1.1.png";
import Resume2 from "../../public/resume2.2.png";
import Resume3 from "../../public/resume3.3.png";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HomeSlider() {
  const CvImages=[Resume1,Resume2,Resume3,Resume1,Resume2,Resume3,Resume1,Resume2,Resume3]
  return (
    <div className="w-full mx-auto z-50 py-12 bg-gradient-to-b from-[#F9FBFF] to-[#F2F6FC] 2xl:justify-center 2xl:flex px-6" id="resume">
      <div className="2xl:w-[1200px] ">
        <div className="text-center mb-8">
        <h3 className="font-bold text-[26px]  mb-1 tracking-tight ">
          PROFESSIONAL RESUME TEMPLATES
        </h3>
        <p className="text-[#4B4B4B] max-w-[600px] mx-auto leading-relaxed">
          Choose from 15+ tailored-built templates that have landed thousands of
          people like you the jobs they were dreaming of.
        </p>
      </div>

     <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20} // default spacing
  slidesPerView={1.2} // mobile view
  pagination={{ clickable: true }}
  autoplay={{ delay: 3500, disableOnInteraction: false }}
  loop={true}
  className="rounded-2xl shadow-lg py-4"
  breakpoints={{
     300: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  }}
>
  {CvImages.map((data, i) => (
    <SwiperSlide key={i}>
      <div className="relative group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl lg:w-[300px] md:w-[250px] ">
        <Image
          src={data}
          alt={`Resume Template ${i + 1}`}

          className="object-cover   transition-transform duration-500 group-hover:scale-105 lg:w-[300px] lg:h-[300px] md:w-[250px] "
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link href={`/choesoptions`}>
            <Button className="bg-gradient-to-r from-[#334155] to-[#0061F2] cursor-pointer hover:bg-[#004bd4] text-white shadow-md px-5 py-2 rounded-md transition-transform duration-300 hover:scale-110">
              Build My Resume
            </Button>
          </Link>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </div>
  );
}
