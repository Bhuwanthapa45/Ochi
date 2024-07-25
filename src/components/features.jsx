import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react'
import { Power4 } from 'gsap';

function Features() {
  const[isHovering,setHovering]=useState(false);
  // const HandleHover = ()=>{
  // setHovering(true);
  // }

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl tracking-tight'> Faetured Project</h1>
      </div>
      <div className='px-20'>
      <div className='cards w-full flex gap-10 mt-10'>
        <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className='cardcontainer w-1/2 h-[75vh]  rounded-xl relative'>
        <h1 className='left-full -translate-x-1/2 top-1/2 -translate-y-1/2 absolute z-[9]  leading-none text-8xl text-[#CDEA68] flex overflow-hidden'>
        {"FYDE".split(' ').map((item,index)=>
        <motion.span initial={{y :"100%"}} 
        animate={isHovering ? ({y : "0"}) : ({y : "100%"})} 
        transition={{ease: Power4.easeInOut, delay: index*.06}}
        className='inline-block '>
          {item}
          </motion.span>
        )}
        </h1>
        <div className='card w-full h-full rounded-xl overflow-hidden'>
          <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
        </div>
        </div>
        <div className='cardcontainer w-1/2 h-[75vh]  rounded-xl relative'>
        <h1 className='right-full translate-x-1/2 top-1/2 -translate-y-1/2 absolute z-[9] flex overflow-hidden leading-none text-8xl text-[#CDEA68]'>
        {"VISE".split(' ').map((item,index)=>
        <motion.span initial={{y :"100%"}} 
        animate={isHovering ? ({y : "0"}) : ({y : "100%"})} 
        transition={{ease: Power4.easeInOut, delay: index*.06}}
        className='inline-block '>
          {item}
          </motion.span>
        )}
        </h1>
        <div className='card w-full h-full rounded-xl overflow-hidden bg-zinc-100'>
          <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Features;
