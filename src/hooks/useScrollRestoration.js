import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollRestoration = () => {
  const location = useLocation();
  const scrollPositions = useRef({});

  useEffect(() => {
    // Save scroll position before navigating away
    const saveScrollPosition = () => {
      scrollPositions.current[location.pathname] = window.scrollY;
    };

    // Restore scroll position when coming back to the page
    const restoreScrollPosition = () => {
      const savedPosition = scrollPositions.current[location.pathname];
      if (savedPosition !== undefined) {
        window.scrollTo(0, savedPosition);
      }
    };

    // Save current position before navigation
    saveScrollPosition();

    // Restore position when location changes
    restoreScrollPosition();

    // Optional: Save position when the component unmounts (if using navigation libraries)
    return () => saveScrollPosition();
  }, [location]);

  return null;
};

export default useScrollRestoration;
