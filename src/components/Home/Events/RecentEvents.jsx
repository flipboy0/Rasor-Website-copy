import React from 'react'
import Img1 from "./Assets/Final.png"
import Img2 from "./Assets/GSOC.svg"

function RecentEvents() {
  return (
    <div className='flex w-full h-[85vh] border-b-2 border-black'>
        <div className='flex flex-col w-full h-full pr-[80px] px-[40px] pb-[80px] border-r-2 border-white'>
            <div className='flex justify-between py-10 w-full'>
                <h1 className='text-4xl'>
                    RECENT EVENTS
                </h1>
                <button className='text-[#861D1D] text-xl border-2 border-[#861D1D] px-5'>View all</button>

                
            </div>
            <div className='flex gap-[60px] h-[80%] justify-center pt-10'>
                <img src={Img1} alt="" className=' h-full' />
                <img src={Img2} alt="" className=' h-full' />
                <img src={Img1} alt="" className=' h-full' />
                
            </div>

        </div>

    </div>
  )
}

export default RecentEvents