import { useState, useEffect } from 'react';

export const usePageWidth = () => {
  const [pageWidth, setPageWidth] = useState(() => {
    if (typeof window !== 'undefined') return window.innerWidth;
    else return 767;
  });

  useEffect(() => {
    window.addEventListener('resize', () => setPageWidth(window.innerWidth));
    return () =>
      window.removeEventListener('resize', () =>
        setPageWidth(window.innerWidth)
      );
  }, []);

  return pageWidth;
};
