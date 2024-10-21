import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollRestoration = () => {
  const location = useLocation();
  const scrollPositions = useRef({}); // Store scroll positions

  useEffect(() => {
    // Save current scroll position before navigation
    const saveScrollPosition = () => {
      scrollPositions.current[location.pathname] = window.scrollY;
    };

    // Restore saved scroll position after navigating
    const restoreScrollPosition = () => {
      const savedPosition = scrollPositions.current[location.pathname];
      if (savedPosition !== undefined) {
        window.scrollTo(0, savedPosition); // Scroll to the saved position
      } else {
        window.scrollTo(0, 0); // Default to top if no position saved
      }
    };

    // Save the scroll position when navigating away
    saveScrollPosition();

    // Restore scroll position when the location changes
    restoreScrollPosition();

    return () => {
      saveScrollPosition(); // Save before unmount if necessary
    };
  }, [location]);

  return null; // No UI, just logic
};

export default useScrollRestoration;
