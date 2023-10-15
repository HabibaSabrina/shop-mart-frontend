// useResponsiveItemsPerPage.js
import { useState, useEffect } from 'react';

const useResponsiveItemsPerPage = (defaultItemsPerPage, breakpoint) => {
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  useEffect(() => {
    // when window breaks the item per page will be 1
    const handleResize = () => {
      if (window.innerWidth < breakpoint) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(defaultItemsPerPage);
      }
    };

    handleResize(); // Call it initially

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [defaultItemsPerPage, breakpoint]);

  return itemsPerPage;
};

export default useResponsiveItemsPerPage;
