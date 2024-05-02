import React from 'react'
import Counter from './useCounter'

const data = [{"Year":1},{"Departments":30}]

function CounterSection() {
  return (
    <>
    
    <div className='flex '>
    {data.map((item, index) => (
      <Counter key={index} value={Object.values(item)[0]} label={Object.keys(item)[0]} />
    ))}
    <Counter key={3} value="2200" label="Members" plus="+" />
    <Counter key={3} value="8" label="Events" plus="+" />
    <Counter key={3} value="40" label="Core Members" plus="+" />
    </div>
    <div className='w-full h-[8px] bg-[#DFA43A]'>

    </div>
    </>
  )
}

export default CounterSection