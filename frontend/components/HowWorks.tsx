'use client'
import Image from 'next/image'
import React from 'react'
import card1 from '../public/Resume navigater 1.png'
import card2 from '../public/7749590.jpg'
import card3 from '../public/8767132.jpg'
import card4 from '../public/20943533.jpg'

function HearoSection() {
  return (
    <section className="h-fit lg:flex lg:justify-center px-6 py-12 bg-[#F1F5FB] w-full">
      <div className="w-[100%] 2xl:w-[1200px]">
        <div className="w-full  ">
        <div className='flex flex-wrap gap-x-10 gap-y-16 '>
          <span className=' text-center w-full mb-5 flex flex-col items-center '>
            <h3 className='text-[26px] font-semibold '>How its works</h3>
            <p className="text-[#4B4B4B] max-w-[450px] mx-auto leading-relaxed ">
          Choose from 15+ tailored-built templates that have landed thousands of
          people like you the jobs they were dreaming of.
        </p>
            </span>
          <div className='flex md:flex-row flex-col items-center md:items-start w-full gap-x-16 gap-y-8 md:gap-y-0 justify-start '>
            <div className='p-3 rounded-md shadow-border curved-box  lg:w-[70%] md:w-[60%] bg-gradient-to-r from-[#0061F2] to-[#D7CCE9]  flex flex-wrap '>
            <div className=' rounded-md border curved-box border-[#D8CEEA] bg-gray-200  h-full  p-5 '>
              <video controls={false} src={`/template.mp4`} autoPlay muted loop className='curved-box '/>
            </div>

        </div>
        <div className='flex flex-col justify-start md:w-[30%] lg:w-[20%] h-full '>
          <h3 className='text-[26px] font-semibold'>Pick Your template</h3>
          <p className='w-[300px] '>Choose from a variety of modern, recruiter-approved resume templates. Each design is fully customizable, ATS-friendly, and ready to showcase your skills and experience.</p>
        </div>
          </div>
          <div className='flex md:flex-row-reverse flex-col items-center md:items-start w-full gap-x-16 gap-y-8 md:mt-12 md:gap-y-0 justify-start '>
            <div className='p-3 rounded-md shadow-border curved-box-use  lg:w-[70%] md:w-[60%] bg-gradient-to-r from-[#0061F2] to-[#D7CCE9]  flex flex-wrap '>
            <div className=' rounded-md border curved-box-use border-[#D8CEEA] bg-gray-200  h-full  p-5 '>
              <video controls={false} src={`/options.mp4`} autoPlay muted loop className='curved-box-use '/>
            </div>

        </div>
        <div className='flex flex-col justify-start md:w-[30%] lg:w-[20%] h-full '>
          <h3 className='text-[26px] font-semibold'>Chose your Option</h3>
          <p className='md:w-[270px] '>Choose from a variety of modern, recruiter-approved resume templates. Each design is fully customizable, ATS-friendly, and ready to showcase your skills and experience.</p>
        </div>
          </div>
          <div className='flex md:flex-row flex-col items-center md:items-start w-full gap-x-16 gap-y-8 md:mt-12 md:gap-y-0 justify-start '>
            <div className='p-3 rounded-md shadow-border curved-box  lg:w-[70%] md:w-[60%] bg-gradient-to-r from-[#0061F2] to-[#D7CCE9]  flex flex-wrap '>
            <div className=' rounded-md border curved-box border-[#D8CEEA] bg-gray-200  h-full  p-5 '>
              <video controls={false} src={`/form.mp4`} autoPlay muted loop className='curved-box '/>
            </div>

        </div>
        <div className='flex flex-col justify-start md:w-[30%] lg:w-[20%] h-full '>
          <h3 className='text-[26px] font-semibold'>Fill your form</h3>
          <p className='md:w-[270px] '>Choose from a variety of modern, recruiter-approved resume templates. Each design is fully customizable, ATS-friendly, and ready to showcase your skills and experience.</p>
        </div>
          </div>
          <div className='flex md:flex-row flex-col items-center md:items-start w-full gap-x-16 gap-y-8 md:gap-y-0 justify-start '>
            <div className='p-3 rounded-md shadow-border curved-box-use  lg:w-[70%] md:w-[60%] bg-gradient-to-r from-[#0061F2] to-[#D7CCE9]  flex flex-wrap '>
            <div className=' rounded-md border curved-box-use border-[#D8CEEA] bg-gray-200  h-full  p-5 '>
              <video controls={false} src={`/download.mp4`} autoPlay muted loop className='curved-box-use '/>
            </div>

        </div>
        <div className='flex flex-col justify-start md:w-[30%] lg:w-[20%] h-full '>
          <h3 className='text-[26px] font-semibold '>Download Your template</h3>
          <p className='w-[300px] '>Choose from a variety of modern, recruiter-approved resume templates. Each design is fully customizable, ATS-friendly, and ready to showcase your skills and experience.</p>
        </div>
          </div>
        
        
        </div>
        </div>
      </div>
    </section>
  )
}

export default HearoSection