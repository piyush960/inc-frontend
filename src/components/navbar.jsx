import React, { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { navLinks } from '../constants'
import { logo, menu, close, pict } from '../assets'

import useScrollVisibility from '../hooks/useScrollVisibility'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const isVisible = useScrollVisibility();
  const menuRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`max-md:px-4 w-full mx-auto flex items-center py-4 fixed backdrop-blur-sm top-0 z-20 transition-transform duration-300 ${!isVisible ? 'transform-none' : '-translate-y-16'}`}>
      <div className='w-full flex justify-between items-center mx-auto max-w-[82rem]'>
        <div className='flex items-center gap-2'>
        <a href="https://pict.edu" target="_blank" rel="noopener noreferrer" onClick={() => setActive("")}>
          <img src={pict} alt="pict" className="object-cover w-13 h-9" />
        </a>
        <span className='h-9 bg-white w-[1px]'></span>
        <Link to={'/'} className='flex items-center gap-2' onClick={() => {setActive("");}}>
          <img src={logo} alt="logo" className='w-9 h-9 object-cover' />
          <p className='text-white-100 text-[18px] font-bold cursor-pointer'>PICT INC 2025</p>
        </Link>
        </div>
        <ul className='list-none hidden sm:flex flex-row gap-7'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active == link.title ? 'text-orange-100 border-b-2 border-orange-100' : 'text-white-100'} hover:text-orange-100 text-[16px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              {
                <Link to={link.isHome ? `/#${link.id}` : `/${link.id}`}>{link.title}</Link>
              }
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center' ref={menuRef}>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' 
          onClick={() => setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
              <li key={link.id} className={`${active == link.title ? 'text-orange-100' : 'text-white-100'} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {
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