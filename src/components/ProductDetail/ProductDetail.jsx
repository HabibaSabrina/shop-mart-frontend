import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaCartArrowDown, FaMinus, FaPlus } from 'react-icons/fa';
import Description from './Description';
import DetailTabs from './DetailTabs';
import Zoom from 'react-img-zoom'

const ProductDetail = () => {
    const productData = useLoaderData()
    const proId = useParams();
    // finding the specific product
    const theData = productData.filter(pro => pro.id == proId.id)
    const { product_images, image} = theData[0]
    const [slideImg, setSlideImg] = useState(image)
    console.log(slideImg)
    return (
        <div className='pt-28 bg-gray-100'>
            <div className='md:flex gap-10 justify-center items-start'>
                {/* image section of the detail page */}
                <div className='flex items-start gap-3 mx-5'>
                    <div className=''>
                        {
                            product_images && product_images.map((pro_img, i) => <img key={i} onClick={() => setSlideImg(pro_img)} className='w-16 mb-3 border-2 bg-white p-1 cursor-pointer hover:bg-gray-400 hover:duration-500 ' src={pro_img} alt="" />)
                        }
                    </div>
                    {/* big size image with zoom feature */}
                    <div className={`md:w-72 bg-white p-5 border-2 cursor-move`}>
                        <Zoom
                            key={slideImg}
                            img={slideImg}
                            zoomScale={3}
                            width={250}
                            height={250}
                        />

                    </div>

                </div>
                {/* product details */}
                <Description theData={theData[0]}></Description>
            </div>
            <DetailTabs theData={theData[0]}></DetailTabs>

        </div>
    );
};

export default ProductDetail;