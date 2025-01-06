import React from 'react'
import { logo } from '../assets'
import { IconCopyright, IconHeartFilled, IconMinusVertical } from '@tabler/icons-react'


const Footer = () => {
  return (
    <footer className='sm:p-10 pt-10 p-6 w-full bg-tertiary'>
      <div className='w-full max-w-7xl mx-auto items-start flex max-sm:flex-col justify-between pb-10 border-b-2 border-slate-800 max-sm:gap-10'>
        <div className='sm:flex-[0.5]'>
          <h5 className='text-lg font-semibold'>Address</h5>
          <p className='text-sm'>PUNE INSTITUTE OF COMPUTER TECHNOLOGY, SR. NO 27, NEAR TRIMURTI CHOWK, DHANKAWADI, PUNE, MAHARASHTRA-411043</p>
        </div>
        <div>
          <h5 className='text-lg font-semibold'>Email</h5>
          <a href='mailto:pictinc2024@gmail.com' className='text-sm'>pictinc2024@gmail.com</a>
        </div>
        <div className='flex items-end'>
          <img src={logo} alt="inc-logo" className='h-[70px] w-[70px]'/>
          <p className='text-slate-400 max-sm:text-sm'><span className='text-xl text-white-100'>InC</span>&nbsp;Impetus and Concepts</p>
        </div>
      </div>
      <div className='w-full max-w-7xl mx-auto flex max-sm:flex-wrap text-slate-600 text-sm items-center sm:pt-10 pt-6 justify-center'>
        <IconCopyright />&nbsp;PICT InC 2024 All Rights Reserved&nbsp;<IconMinusVertical />&nbsp;Made with&nbsp;<IconHeartFilled color='#cc4239'/>&nbsp;by InC WEB TEAM
      </div>
    </footer>
  )
}

export default Footer