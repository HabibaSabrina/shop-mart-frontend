import { Rating } from '@smastrom/react-rating';
import React from 'react';

const UserReviewSlide = ({slide}) => {
    return (
        <div className=' mx-auto p-5 card-bg w-3/4 h-[300px] shadow-2xl duration-1000'>
            {/* review card details */}
            <div className='p-5'>
                <img className=' w-28 rounded-full border-8 border-white border-double mx-auto' src={slide.person_image} alt="" />
            </div>
            <div className='w-28 mx-auto'>
                <Rating orientation='horizontal' value={slide.rating} />
            </div>

            <div className='text-center pt-3'>
                <p className='text-white text-xl font-semibold'>{slide.review_text}</p>
            </div>

        </div>
    );
};

export default UserReviewSlide;