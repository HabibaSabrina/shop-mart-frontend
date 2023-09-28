import React from 'react';

const ProductCartRow = ({theProduct}) => {
    const {product_name, image, price, product_group, quantity} = theProduct
    return (
        <div className='flex justify-between items-center p-5 border-2'>
            <div>
            <img className='w-24' src={image} alt="" />
            <p className='text-center'>{product_name}</p>
            </div>
            <div>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
            </div>
        </div>
    );
};

export default ProductCartRow;