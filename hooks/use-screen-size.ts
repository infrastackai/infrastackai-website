import { useEffect, useState } from "react";

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    isMobile: false, // < 640px
    isTablet: false, // 640px - 1024px
    isDesktop: false, // > 1024px
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isMobile: window.innerWidth < 640,
        isTablet: window.innerWidth >= 640 && window.innerWidth < 1280,
        isDesktop: window.innerWidth >= 1280,
      });
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}
