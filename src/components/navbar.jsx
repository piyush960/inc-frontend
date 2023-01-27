import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import inc_logo from '../assets/images/logo.png';
import './styles/navbar.css';

function Navbar() {
    const [selected, setSelected] = useState('#home');
    const mobileMenuRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => { setSelected(location?.hash || '#home') }, [location])

    function toggleMenu() {
        mobileMenuRef.current.classList.toggle('hidden')
    }

    const handleSelect = e => {
        if (e.target.value === 'Register') return;
        navigate(`/register/${e.target.value.toLowerCase()}`)
    }

    return (
        <nav className='navbar pt-4 px-2 w-full fixed z-50'>
            <div className='shadow-lg shadow-gray-900/40 m-auto w-4/5 rounded-xl border border-sky-900/40 backdrop-blur-sm bg-gray-900/80'>
                <div className='max-w-full mx-auto px-4 py-2'>
                    <div className='flex justify-between text-xl'>
                        <div className='flex space-x-7'>
                            <a href='https://pictinc.org' className='flex items-center py-4 px-2'>
                                <img src={inc_logo} alt='inc_Logo' className='h-12 w-12 mr-2' />
                                <span className='font-black text-sky-800 text-3xl'>
                                    PICT InC 2023
                                </span>
                            </a>
                        </div>
                        <div className='hidden lg:flex items-center justify-content space-x-1'>
                            <a href='#home'
                                className={`py-4 px-2 text-gray-300 border-b-4 font-semibold transition duration-300 ${selected === '#home' ? 'border-sky-800/80 text-[#f2a30f]' : 'hover:text-[#f2a30f] border-transparent'}`} >
                                Home
                            </a>
                            <a href='#about'
                                className={`py-4 px-2 text-gray-300 border-b-4 font-semibold transition duration-300 ${selected === '#about' ? 'border-sky-800/80 text-[#f2a30f]' : 'hover:text-[#f2a30f] border-transparent'}`} >
                                About
                            </a>
                            <a href='#schedule'
                                className={`py-4 px-2 text-gray-300 border-b-4 font-semibold transition duration-300 ${selected === '#schedule' ? 'border-sky-800/80 text-[#f2a30f]' : 'hover:text-[#f2a30f] border-transparent'}`} >
                                Schedule
                            </a>
                            <a href='#events'
                                className={`py-4 px-2 text-gray-300 border-b-4 font-semibold transition duration-300 ${selected === '#events' ? 'border-sky-800/80 text-[#f2a30f]' : 'hover:text-[#f2a30f] border-transparent'}`} >
                                Events
                            </a>
                            <a href='#team'
                                className={`py-4 px-2 text-gray-300 border-b-4 font-semibold transition duration-300 ${selected === '#team' ? 'border-sky-800/80 text-[#f2a30f]' : 'hover:text-[#f2a30f] border-transparent'}`} >
                                Team
                            </a>
                            <a href='#contact'
                                className={`py-4 px-2 text-gray-300 border-b-4 font-semibold transition duration-300 ${selected === '#contact' ? 'border-sky-800/80 text-[#f2a30f]' : 'hover:text-[#f2a30f] border-transparent'}`} >
                                Contact Us
                            </a>
                            <select className="py-4 px-6 text-gray-300 font-semibold hover:text-[#f2a30f] border-transparent hover:border-sky-800/80 bg-blue-600/30 hover:bg-blue-600/10 rounded-xl border transition duration-300" defaultValue={'Register'} onClick={handleSelect}>
                                <option disabled>Register</option>
                                <option>Impetus</option>
                                <option>Concepts</option>
                                <option>Pradnya</option>
                            </select>
                        </div>

                        <div className='lg:hidden flex items-center'>
                            <button className='outline-none menu-button' onClick={(_) => toggleMenu()}>
                                <svg className='w-8 h-8 text-sky-800/80' x-show='! showMenu' fill='none' strokeLinecap='round'
                                    strokeLinejoin='round' strokeWidth='2' viewBox='0 00 24 24' stroke='currentColor'><path d='m4 6h16M4 12h16M4 18h16'></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='hidden lg:hidden mobile-menu text-center flex item-center flex-col m-auto w-1/2' ref={mobileMenuRef}>
                        <a href='#home'
                            className={`py-2 px-2 text-gray-300 border-b-4 font-semibold transition duration-300 ${selected === '#home' ? 'border-sky-800/80 text-[#f2a30f]' : 'hover:text-[#f2a30f] border-transparent'}`} >
                            Home
                        </a>
                        <a href='#about'
                            className={`py-2 px-2 text-gray-300 border-b-4 font-semibold transition duration-300 ${selected === '#about' ? 'border-sky-800/80 text-[#f2a30f]' : 'hover:text-[#f2a30f] border-transparent'}`} >
                            About
                        </a>
                        <a href='#schedule'
                            className={`py-2 px-2 text-gray-300 border-b-4 font-semibold transition duration-300 ${selected === '#schedule' ? 'border-sky-800/80 text-[#f2a30f]' : 'hover:text-[#f2a30f] border-transparent'}`} >
                            Schedule
                        </a>
                        <a href='#events'
                            className={`py-2 px-2 text-gray-300 border-b-4 font-semibold transition duration-300 ${selected === '#events' ? 'border-sky-800/80 text-[#f2a30f]' : 'hover:text-[#f2a30f] border-transparent'}`} >
                            Events
                        </a>
                        <a href='#team'
                            className={`py-2 px-2 text-gray-300 border-b-4 font-semibold transition duration-300 ${selected === '#team' ? 'border-sky-800/80 text-[#f2a30f]' : 'hover:text-[#f2a30f] border-transparent'}`} >
                            Team
                        </a>
                        <a href='#contact'
                            className={`py-2 px-2 text-gray-300 border-b-4 font-semibold transition duration-300 ${selected === '#contact' ? 'border-sky-800/80 text-[#f2a30f]' : 'hover:text-[#f2a30f] border-transparent'}`} >
                            Contact Us
                        </a>
                        <select className="mt-2 py-4 px-4 text-gray-300 font-semibold hover:text-[#f2a30f] border-transparent hover:border-sky-800/80 bg-blue-600/30 hover:bg-blue-600/10 rounded-xl border transition duration-300" defaultValue={'Register'} onClick={handleSelect}>
                            <option disabled>Register</option>
                            <option>Impetus</option>
                            <option>Concepts</option>
                            <option>Pradnya</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;