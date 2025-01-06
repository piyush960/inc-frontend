import React from 'react'
import { section_bg } from '../assets'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Loader from './ui/Loader'

const Test = () => {

  const count = useSelector(state => state.form)

  const handleClick = (e) => {
    e.preventDefault();
    toast('Hello, I am testing if large text fits well in this container to ensure goodiii design')
  }

  return (
    <div className=''
    >
      <Loader />
    </div>  
  )
}

export default Test