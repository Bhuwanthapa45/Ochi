import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[3vw] leading-[4.5vw] tracking-tight font-semibold'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
   
<div className='w-full border-t-[1px] border-[#a1b562] mt-20 pt-10 block sm:flex gap-5'>
    <div className='w-full sm:w-1/2 py-20'>
    <h1 className='text-2xl sm:text-7xl'>Our approach :
        </h1>
        <button className='px-3 sm:px-10 py-2 sm:py-6 bg-zinc-900 rounded-full text-white mt-10 flex gap-10 items-center'>Read More
            <div className='w-2 h-2  bg-zinc-100 rounded-full'></div>
        </button>
        </div>
    <div className='w-full sm:w-1/2 h-[70vh] rounded-3xl bg-cover'>
    <img className=" w-full h-[70vh] rounded-3xl "src="https://th.bing.com/th/id/OIG4.uPUYUBDkE93.zM0NKHSA?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" />

    </div>    
    </div>
       
    </div>
    
  )
}

export default About
