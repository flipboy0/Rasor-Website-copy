import React from 'react'
import Counter from './useCounter'

const data = [{"Years": 2},{"Members":1600},{"Departments": 6},{"Staff": 70},{"Events":9}]

function CounterSection() {
  return (
    <>
    <div className='flex '>
    {data.map((item, index) => (
      <Counter key={index} value={Object.values(item)[0]} label={Object.keys(item)[0]} />
    ))}
    </div>
    <div className='w-full h-[8px] bg-[#DFA43A]'>

    </div>
    </>
  )
}

export default CounterSection