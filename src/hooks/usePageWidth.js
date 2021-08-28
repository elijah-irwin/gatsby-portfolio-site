import { useState, useEffect } from "react";

export const usePageWidth = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setPageWidth(window.innerWidth));
    return () => window.removeEventListener('resize', () => setPageWidth(window.innerWidth));
  }, []);

  return pageWidth;
};