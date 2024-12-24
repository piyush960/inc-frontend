import { span } from 'framer-motion/client';
import React, { useState, useEffect } from 'react';

const NotificationStrip = ({words}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`bg-transparent text-white transition-transform duration-300 ${!isVisible ? 'transform-none' : '-translate-y-16'}`}
    >
      <div className="overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          {
            words.map((word, index) => (
                <span key={index} className='mr-10 backdrop-blur-sm rounded-xl p-2'>{word}</span>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default NotificationStrip;
