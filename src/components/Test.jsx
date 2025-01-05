import React from 'react'
import { section_bg } from '../assets'
import { useSelector } from 'react-redux'

const Test = () => {

  const count = useSelector(state => state.form)


  return (
    <div className='pt-24 bg-transparent text-center text-3xl w-full h-[300px]'
    >
      
    </div>
  )
}

export default Test