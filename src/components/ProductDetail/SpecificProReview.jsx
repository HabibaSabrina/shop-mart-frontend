import { Rating } from '@smastrom/react-rating';
import React from 'react';

const SpecificProReview = ({ review }) => {
    return (
        <div className="bg-white mb-5 p-5">
            {/* product reviews */}
            <div className=" flex gap-3 items-center">
                <img className="w-10 rounded-full border-2 border-[#2B3467] " src={review.person_image} alt="" />
                <div>
                    <p className='font-semibold'>{review.person_name}</p>
                    <div className='w-20'>
                        <Rating value={review.rating}></Rating>
                    </div>
                </div>

            </div>
            <div className='p-5 mt-5 bg-gray-50'>
                <p>{review.review_text}</p>
            </div>

        </div>
    );
};

export default SpecificProReview;