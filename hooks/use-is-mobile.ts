import { useLayoutEffect, useState } from "react";
import debounce from "lodash/debounce";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check window size on mount to set the correct initial state
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state based on window size when the component mounts
    updateSize();

    // Add resize event listener with debounced update
    const debouncedUpdate = debounce(updateSize, 100);
    window.addEventListener("resize", debouncedUpdate);

    // Clean up event listener on unmount
    return (): void => window.removeEventListener("resize", debouncedUpdate);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return isMobile;
};

export default useIsMobile;
