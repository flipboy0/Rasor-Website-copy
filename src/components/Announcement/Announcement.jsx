import React from 'react'
import "./Announcement.css"
export const Announcement = () => {
  return (
    <div className='border-y-2 pr-10 flex items-center justify-between w-full h-[70px] mt-5 text-xl'>
      
        <div className='flex w-[20%] justify-center text-white h-full items-center bg-[#DFA43A] text-center'>Announcement</div>
        <div className='flex w-[72%] h-full justify-around items-center pr-5'>
          <p class="marquee">
            <span className='text-[#C41E3A]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta odio dolorem optio, quia ullam in? Minima aliquid nemo perferendis facere corporis porro maxime. -&nbsp;</span>
          </p>  
        </div>
        <div className='w-[8%] h-full flex items-center justify-center pr-5'>
        <button className='w-full text-center border-[3px] border-[#861D1D] h-[45px] text-[#861D1D]'>
                Expand
        </button>
        </div>
    </div>
  )
}

export default Announcement