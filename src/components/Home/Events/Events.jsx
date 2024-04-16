import React from 'react'
import Img1 from "./Assets/Final.png"
import Img2 from "./Assets/GSOC.svg"

const Events = () => {
  return (
    <div className='flex w-full bg-[#861D1D]'>
        <div className='flex flex-col w-2/3 h-full px-[80px] pb-[80px] border-r-2 border-white'>
            <div className='flex justify-between py-10'>
                <h1 className='text-white text-4xl'>
                    RECENT EVENTS
                </h1>

                <button className='text-white border-2 border-white px-2'>
                    View all
                </button>
            </div>
            <div className='flex justify-between h-3/4'>
                <img src={Img1} alt="" className='w-1/3 h-full' />
                <img src={Img2} alt="" className='w-1/3 h-full' />
                
            </div>

        </div>
        <div></div>

    </div>
  )
}

export default Events