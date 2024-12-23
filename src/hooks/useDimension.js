import React, { useState, useEffect } from 'react'

const useDimension = () => {
  const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 500px)")
  
      setIsMobile(mediaQuery.matches)
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }
  
      mediaQuery.addEventListener('change', handleMediaQueryChange)
      
      return () => {
        mediaQuery.removeEventListener(
          'change', handleMediaQueryChange
        );
      }
  
    }, [])

    return isMobile
}

export default useDimension