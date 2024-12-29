import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

import useScrollVisibility from '../hooks/useScrollVisibility'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const isVisible = useScrollVisibility();

  const location = useLocation();

  console.log('in nav', isVisible)

  useEffect(() => {
    if (location.hash) {
      const scrollToElement = () => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

      setTimeout(scrollToElement, 300);
    }
  }, [location]);

  return (
    <nav className={`max-md:px-4 w-full mx-auto flex items-center py-5 backdrop-blur-sm fixed top-0 z-20 transition-transform duration-300 ${!isVisible ? 'transform-none' : '-translate-y-16'}`}>
      <div className='w-full flex justify-between items-center mx-auto max-w-7xl'>
        <Link to={'/'} className='flex items-center gap-2' onClick={() => {setActive("");}}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white-100 text-[18px] font-bold cursor-pointer'>PICT INC 2025</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-7'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active == link.title ? 'text-white-100' : 'text-orange-100'} hover:text-white-100 text-[16px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              {
                <Link to={link.isHome ? `/#${link.id}` : `/${link.id}`}>{link.title}</Link>
              }
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => {setToggle(!toggle)}}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
              <li key={link.id} className={`${active == link.title ? 'text-white-100' : 'text-orange-100'} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {
                setActive(link.title)
                setToggle(!toggle)
              }}>
                {
                  <Link to={link.isHome ? `/#${link.id}` : `/${link.id}`}>{link.title}</Link>
                }
              </li>
            ))}
          </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar