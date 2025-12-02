import { DeleteIcon, Edit2Icon, FastForward, FilePenLine, GemIcon, LucideDraftingCompass } from 'lucide-react'
import React from 'react'

function Features() {
  return (
     <section className="h-fit lg:flex lg:justify-center px-6 py-12 bg-[#F1F5FB] w-full">
      <div className="w-[100%] 2xl:w-[1200px] flex flex-col items-center" id='features'>
        <h3 className=' text-[26px] font-semibold'>Why Choose Us</h3>
        <p className='mb-10 w-[350px] text-center'>No fees. No watermarks. No surprises. Your data is safe, and your first CV is free for life.</p>
        <div className="w-full flex gap-9 gap-y-16 flex-wrap justify-center ">
        <div className='p-3 rounded-md shadow-border curved-box  w-fit bg-gradient-to-r from-[#334155] to-[#0061F2]  flex flex-wrap '>
            <div className=' rounded-md border curved-box border-[#D8CEEA] bg-gray-200 w-[300px] h-full  p-5 '>
              <FilePenLine/> 
              <h3 className='font-bold text-[20px] my-3'>Create dynamic sections</h3>
              <p>Experience full flexibility with dynamic sections. Personalize your resume by adding custom categories, removing what you don’t need, and reordering everything effortlessl</p>
            </div>

        </div>
        <div className='p-3 rounded-md curved-box  w-fit bg-gradient-to-r from-[#334155] to-[#0061F2] shadow-md  flex flex-wrap'>
            <div className='curved-box rounded-md bg-gray-200 w-[300px] h-full  p-5'>
              <Edit2Icon/> 
              <h3 className='font-bold text-[20px] my-3'>Edit sections</h3>
              <p>Edit any section instantly with live preview. Update text, reorder content, and fine-tune details without refreshing the page.</p>
            </div>

        </div>
        <div className='p-3 rounded-md curved-box  w-fit bg-gradient-to-r from-[#334155] to-[#0061F2] shadow-md  flex flex-wrap'>
            <div className=' curved-box rounded-md bg-gray-200 w-[300px] h-full  p-5'>
              <DeleteIcon/> 
              <h3 className='font-bold text-[20px] my-3'>Delete sections</h3>
              <p>Remove any section you don’t need with a single click. Keep your resume focused, clean, and tailored to the job by deleting unnecessary blocks instantly</p>
            </div>

        </div>
        <div className='p-3 rounded-md curved-box  w-fit bg-gradient-to-r from-[#334155] to-[#0061F2] shadow-md  flex flex-wrap'>
            <div className=' curved-box rounded-md bg-gray-200 w-[300px] h-full  p-5'>
              <LucideDraftingCompass/> 
              <h3 className='font-bold text-[20px] my-3'>Darg sections</h3>
              <p>Enjoy complete layout freedom. Our drag-and-drop interface lets you reorganize sections smoothly, giving you full control over how your resume is structured.</p>
            </div>

        </div>
        <div className='p-3 rounded-md curved-box  w-fit bg-gradient-to-r from-[#334155] to-[#0061F2] shadow-md  flex flex-wrap'>
            <div className='curved-box rounded-md bg-gray-200 w-[300px] h-full  p-5'>
              <FastForward/> 
              <h3 className='font-bold text-[20px] my-3'>Instant Resume Generation with AI</h3>
              <p>AI automatically fills your resume with ready-to-use professional content. Just enter your job title — the rest is done for you.</p>
            </div>

        </div>
        
        </div>
      </div>
    </section>
  )
}

export default Features