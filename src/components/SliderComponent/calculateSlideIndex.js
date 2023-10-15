export const calculateSlideIndex = (currentIndex, itemsPerPage, direction, items) => {
    // condition for right side button
    if (direction === 'next') {
        return (currentIndex + itemsPerPage < items.length) ? currentIndex + itemsPerPage - (itemsPerPage - 1) : 0;
    }
    // condition for left side buttons 
    else if (direction === 'prev') {
        if (currentIndex === 0) {
            return items.length - itemsPerPage;
        } else if (currentIndex % itemsPerPage === 0) {
            return currentIndex - itemsPerPage;
        } else {
            return currentIndex - 1;
        }
    }
};

