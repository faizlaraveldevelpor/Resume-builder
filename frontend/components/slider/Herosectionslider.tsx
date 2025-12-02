"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Resume1 from "../../public/resume1.1.png";
import Resume2 from "../../public/resume2.2.png";
import Resume3 from "../../public/resume3.3.png";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HearoHomeSlider() {
  const CvImages=[Resume1,Resume2,Resume3,Resume1,Resume2,Resume3,Resume1,Resume2,Resume3]
  return (
    <div className="w-full  max-h-[300px] ">
      

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        className=" "
      >
        {CvImages.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="">
              {/* Image */}
              <Image
                src={data}
                alt={`Resume Template ${i + 1}`}
                width={400}
                height={300}
                className="rounded-md"
              />

              {/* Overlay Button */}
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
