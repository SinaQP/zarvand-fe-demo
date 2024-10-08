import { useState, useEffect } from 'react';

function useWindowWidth<T>(desktopValue: T, mobileValue: T): T {
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 767);
      };

      window.addEventListener('resize', handleResize);

      // Clean up the event listener on unmount
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return isMobile ? mobileValue : desktopValue;
}

export default useWindowWidth;
