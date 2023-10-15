import React, { useContext } from 'react';
import ProductCartRow from './ProductCartRow';
import CartOrderSummary from './CartOrderSummary';
import HeadlineDesign from '../DesignComponents/HeadlineDesign';
import { UserContext } from '../../Provider/UserProvider';

const ProductCart = () => {
    const [user] = useContext(UserContext)
    const {cart} = user
    let totalPrice = 0;
    let totalQuantity = 0;
    // finding total price, total quantity and grand total of the product
    const thecart = cart && cart.forEach(thePro => {
        totalPrice = totalPrice + (thePro.cart_product_price * thePro.quantity);
        totalQuantity = totalQuantity + thePro.quantity
    });
    const grandTotal = totalPrice + 5; //adding 5 dollar as shipping charge
    return (
        <div className='md:pt-16 pt-10 bg-gray-50 pb-10'>
            <HeadlineDesign headline={'Cart Products'}></HeadlineDesign>
            <div className='md:flex justify-center gap-28 items-start'>
            {/* Cart products */}
            <div className='md:w-1/2'>
                <p className='bg-[#2B3467] text-white px-5 py-3 font-bold text-xl mb-5' data-aos="fade-right" data-aos-duration={1000}>Selected products</p>
                {
                    cart && cart.map((theProduct, i) => <ProductCartRow key={i} theProduct={theProduct}></ProductCartRow>)
                }
            </div>
            {/* order summary */}
           <CartOrderSummary totalPrice={totalPrice} grandTotal={grandTotal} totalQuantity={totalQuantity}></CartOrderSummary>
        </div>
        </div>
    );
};

export default ProductCart;