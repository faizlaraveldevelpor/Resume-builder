import React from 'react'
import bgmap from '../public/map.jpg'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Dot } from 'lucide-react'
function Contect() {
  return (
    <section className="w-full lg:flex lg:justify-center ">
      <div className="w-[100%] 2xl:w-[1200px]">
        <div className="w-full px-6 py-4 bg-gradient-to-r from-[#334155] to-[#0061F2] flex justify-center">
          <div className='w-full '>
            <div className='rounded-md  w-full  flex flex-row   justify-center '>
          
          <div className='md:w-[50%]'>
            <div className='bg-white rounded-r  py-10'>
           <h3 className=' mb-10 text-[26px] font-semibold text-center'>Let,s Get In Touch.</h3>
           <div className='flex flex-wrap w-full justify-center gap-5'>
          <span className='flex flex-col w-[40%] gap-y-1' > 
             <label htmlFor="">First Name</label>
            <Input type='text' className='' placeholder='Enter first name'/>
            
            </span>
            <span className='flex flex-col w-[40%] gap-y-1'>
            <label htmlFor="">Last Name</label>
            <Input type='text' className='' placeholder='Enter last name'/>
            </span>
            <span className='flex flex-col w-[40%] gap-y-1'>
            <label htmlFor="">Email</label>
            <Input type='text' className='' placeholder='Enter email'/>
            </span>
            <span className='flex flex-col w-[40%] gap-y-1'>
            <label htmlFor="">Phone</label>
            <Input type='text' className='' placeholder='Enter phone number'/>
            </span>
            
            
           </div>
           <div className=' py-10 mx-12 flex flex-col gap-y-8 '>
                <Textarea className='w-[100%]' placeholder='Enter your problem'/>
            <Button className='w-[100%] bg-gradient-to-r from-[#334155] to-[#0061F2] cursor-pointer'>Submit</Button>
            </div>
            </div>
          </div>
          </div>
          </div>
          
          

          

          
        </div>
      </div>
    </section>
  )
}

export default Contect