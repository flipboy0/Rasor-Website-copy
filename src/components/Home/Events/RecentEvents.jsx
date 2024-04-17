import React from 'react'
import Img1 from "./Assets/Final.png"
import Img2 from "./Assets/GSOC.svg"

function RecentEvents() {
  return (
    <div>
        <div className='flex justify-between px-10'>
            <h1>Recent Events</h1>
            <button>View all</button>
        </div>
        <div className='flex'>
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img1} alt="" />
        </div>
    </div>
  )
}

export default RecentEvents