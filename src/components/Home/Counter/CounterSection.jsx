import React from 'react'
import Counter from './Counter'

const data = [{"years": 69},{"members":169},{"departments": 6},{"staff": 1069},{"events":9}]

function CounterSection() {
  return (
    <div className='flex '>
    {data.map((item, index) => (
      <Counter key={index} value={Object.values(item)[0]} label={Object.keys(item)[0]} />
    ))}
    </div>
  )
}

export default CounterSection