import React from 'react'
import { section_bg } from '../assets'

const Test = () => {
  return (
    <div className='pt-24 bg-transparent text-center text-3xl w-full h-[300px]'
    >
      <div
      style={{
        backgroundImage: section_bg,
        backgroundSize: 'cover'
      }}
      ></div>
      <img src={section_bg} alt="" />
      {console.log(section_bg)}
    </div>
  )
}

export default Test