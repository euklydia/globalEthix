import { useState, useEffect } from 'react';

const useSliderVisibility = (thresholdHeight: number) => {
  const [sliderVisible, setSliderVisible] = useState<boolean>(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Debounce scroll handling to improve performance
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (scrollY >= thresholdHeight) {
          // Hide slider when scrolling past the threshold (bottom of slides)
          setSliderVisible(false);
        } else {
          // Show slider when scrolling back up past the threshold
          setSliderVisible(true);
        }
      }, 50); // Debounce delay for smooth scrolling

      lastScrollY = scrollY;
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [thresholdHeight]);

  return sliderVisible;
};

export default useSliderVisibility;
