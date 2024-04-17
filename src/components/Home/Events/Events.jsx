import React from 'react'
import Img1 from "./Assets/Final.png"
import Img2 from "./Assets/GSOC.svg"
import Img3 from "./Assets/E1.png"

const Events = () => {
  return (
    <div className='flex w-full h-[80vh] bg-[#861D1D]'>
        <div className='flex flex-col w-full h-full pr-[80px] px-[40px] pb-[80px] border-r-2 border-white'>
            <div className='flex justify-center h-1/5 py-10'>
                <h1 className='text-white text-4xl'>
                    UPCOMING EVENTS
                </h1>

                {/* <button className='text-white border-2 border-white px-2'>
                    View all
                </button> */}
            </div>
            <div className='flex gap-[60px] h-4/5 justify-center pt-10'>
                <img src={Img1} alt="" className=' h-full' />
                <img src={Img2} alt="" className=' h-full' />
                
            </div>

        </div>
        {/* <div className='flex flex-col gap-y-4 w-2/5 h-full justify-center'>
            <img src={Img3} alt="Img3" className='h-5/6 object-contain' />
            <div className='w-full flex justify-around'>
                <button className='py-2 px-5 bg-[#DFA43A] text-white'>Download Brochure</button>
                <button className='py-2 px-5 bg-[#dedbdb] text-[#DFA43A]'>Register Now</button>
            </div>
        </div> */}

    </div>
  )
}

export default Events