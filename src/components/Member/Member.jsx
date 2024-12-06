import React from 'react'

const Member = (props) => {
  return (
    <div key={props.key} className='select-none'>
        <img src={props.avatar} alt="" className='w-[213px] h-[213px]' />
        <div className='flex flex-col items-center gap-4 mt-4'>
            <h2 className='text-center text-lg font-semibold'>{props.name}</h2>

            <div className='flex items-center justify-center gap-2'>
              <img src="/linkedin.svg" alt="" onClick={() => {window.open(props.linkedIn)}} className="hover:cursor-pointer h-[20px] w-[20px]" />
              <img src="/mail.svg" alt="" onClick={() => {window.open(props.mail)}} className="hover:cursor-pointer h-[20px] w-[20px]" />
            </div>
        </div>
    </div>
  )
}

export default Member
