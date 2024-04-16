import React from 'react'

export const Announcement = () => {
  return (
    <div className='flex w-full h-[120px] mt-5 text-xl'>
        <div className='flex justify-center text-white w-[15%] h-full items-center bg-[#DFA43A] text-center'>Announcement</div>
        <div className='flex w-[85%] justify-around items-center border-y-2'>
            <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus culpa alias distinctio quos, quidem, quas,
            </h1>
            <button className='border-[3px] border-[#861D1D] h-[60px] w-[120px] text-[#861D1D]'>
                Expand
            </button>
        </div>
    </div>
  )
}

export default Announcement