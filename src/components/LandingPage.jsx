import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const LandingPage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.7' className='w-full h-screen bg-zinc-900 pt-12 sm:pt-1  mb-[30vh] sm:mb-0'>
      <div className='textstructure mt-40 px-20 py-40 sm:py-0'>
        {['We create','Eye Opening', 'Presentations'].map((item,index)=>{
            return         <div className='masker '>
                <div className='w-fit flex items-center'>
                    {index ===1 && (<motion.div
                     initial={{width:0}} 
                     animate={{width:"9vw"}} 
                     transition={{ease : [0.76, 0, 0.24, 1], duration: 1}}
                     className='mr-[1vw] w-[8vw] rounded-md h-[5.5vw]  relative bg-cover'>
                      <img className='rounded-md w-[6vw] h-[5.5vw]' src="https://assets.static-upwork.com/org-logo/1706392754436837376?date=1721880365152" alt="" />

                    </motion.div>)}

            <h1 className='uppercase text-5xl sm:text-[6vw]  tracking-tighter font-normal sm:font-semibold'>
         {item}
         </h1>
         </div>
                    </div>
        })}

        
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-0 sm:mt-20  block sm:flex  justify-between items-center py-5 px-20'>
        {["For Public and Private Companies", "From the first Pitch to IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tight leading-none py-5 uppercase hover:text-[#CDEA68]'>{item}</p>
        ))}
        <div className='start flex items-center gap-5'> 
            <div className='px-4 py-2 border-2 rounded-full text-sm capitalize hover:text-[#CDEA68]'>Start the Project</div>
            <div className='w-3 h-3 rounded-full '>
                <span className="rotate-[45deg] hover:text-[#CDEA68]">
                    <FaArrowUp />
                    </span>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
