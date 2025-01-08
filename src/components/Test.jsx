import React from 'react'
import { section_bg } from '../assets'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Loader from './ui/Loader'
import { pagenotfound } from '../assets'

const Test = () => {

  return (
    <div className='w-full h-full flex justify-center items-center py-24'
    >
      <img src={pagenotfound} alt="pagenotfound" 
      className='w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] object-contain'
      />
    </div>  
  )
}

export default Test