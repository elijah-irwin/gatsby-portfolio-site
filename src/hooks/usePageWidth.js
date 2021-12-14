import { useState, useEffect } from 'react';
import { isBrowser } from '../utils/browserUtils';

export const usePageWidth = () => {
  const [pageWidth, setPageWidth] = useState(() => {
    if (isBrowser()) return window.innerWidth;
    else return 768;
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
