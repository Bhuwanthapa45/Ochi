import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 block sm:flex items-center gap-5 px:15 sm:px-32 '>
        <div className='cardcontainer w-full sm:w-1/2 h-[50vh]'>
        <div className='card w-full h-full bg-[#004D43] rounded-2xl flex items-center justify-center relative'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-2 border-2 rounded-full'>&copy;2023-2024</button>
        </div>

        </div>
        <div className='cardcontainer w-full sm:w-1/2 h-[50vh] block sm:flex gap-5'>
        <div className='card w-full h-full bg-[#192826] rounded-2xl flex items-center justify-center relative'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute left-10 bottom-10 px-5 py-2 border-2 rounded-full'>&copy;2023-2024</button>
        </div>
        <div className='card w-full h-full bg-[#192826] rounded-2xl flex items-center justify-center relative'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute left-10 bottom-10 px-5 py-2 border-2 rounded-full'>&copy;2023-2024</button></div> 

        </div>
      
    </div>
  )
}

export default Cards;

