import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import NotificationStrip from './ui/notification-strip'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const location = useLocation();

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
    <nav className={`${styles.paddingX} m-0 flex items-center py-5 backdrop-blur-sm`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to={'/'} className='flex items-center gap-2' onClick={() => {setActive("");}}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>PICT INC 2025</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active == link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              {
                <Link to={link.isHome ? `/#${link.id}` : `/${link.id}`}>{link.title}</Link>
              }
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => {setToggle(!toggle)}}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
              <li key={link.id} className={`${active == link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {
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