import React from 'react'
import Button from '../Button/Button'

const data = [
    {
        heading: 'Journey So Far',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus culpa alias distinctio quos, quidem, quas,'
    },
    {
        heading: "Society's Message",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus culpa alias distinctio quos, quidem, quas,'
    },
]

const Vision = () => {
  return (
    <div className='flex justify-center gap-x-10 items-center my-[80px]'>
        {data.map((item, index) => (
            <Card key={index} heading={item.heading} text={item.text} />
        ))}
    </div>
  )
}

export const Card = (props) => {
    return (
        <div className='flex flex-col items-center w-1/3 gap-y-7 border-x-2 border-t-2 border-b-[12px] border-[#DFA43A] p-5'>
            <h1 className='text-center text-[#861D1D] text-4xl'>{props.heading}</h1>
            <p className='text-center text-[#4F4F4F] text-xl'>{props.text}</p>
            {/* <button className='text-[#861D1D] text-xl border-2 border-[#861D1D] w-1/6'>View</button> */}
            <div className='text-xl'>
                <Button link='https://www.google.com/' label='View' />
            </div>
        </div>
    )
}

export default Vision