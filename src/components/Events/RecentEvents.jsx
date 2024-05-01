import React from 'react'
import Img1 from "./Assets/Final.png"
import Img2 from "./Assets/GSOC.svg"
import Button from '../Button/Button'
import Card from '../Card/Card'

const data = [
    {
        title: "Event 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.",
        image: Img1,
        link: "https://www.youtube.com/watch?v=6YbBmqUnoQM",
    },
    {
        title: "Event 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.",
        image: Img2,
        link: "https://www.youtube.com/watch?v=6YbBmqUnoQM",
    },
    {
        title: "Event 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.",
        image: Img1,
        link: "https://www.youtube.com/watch?v=6YbBmqUnoQM",
    }
]

function RecentEvents() {
  return (
    <div className='flex w-full'>
        <div className='flex flex-col w-full h-full pr-[80px] px-[40px] pb-[80px] border-r-2 border-white'>
            <div className='flex justify-between py-10 w-full'>
                <h1 className='text-4xl'>
                    RECENT EVENTS
                </h1>
                {/* <button className='text-[#861D1D] text-xl border-2 border-[#861D1D] px-5'>View all</button> */}
                <div className='text-xl'>
                    <Button link='https://www.google.com/' label='View all' />
                </div>

                
            </div>
            <div className='flex gap-[60px] h-[80%] justify-center pt-10'>
                {
                    data.map((item) => {
                        return (
                            <Card item={item} />
                        )
                    })
                }
                
            </div>

        </div>

    </div>
  )
}

export default RecentEvents