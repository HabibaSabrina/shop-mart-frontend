import React from 'react';
import { FaTrash } from 'react-icons/fa';
import HeadlineDesign from '../../DesignComponents/HeadlineDesign';
import { useContext } from 'react';
import { UserContext } from '../../../Provider/UserProvider';

const PaymentHistory = () => {
    const [user] = useContext(UserContext)
    const { payments } = user
    return (
        <div className='md:pt-16 pt-10 pb-10 bg-gray-50'>
            {/* Payment history page header */}
            <HeadlineDesign headline={'Payment History'}></HeadlineDesign>
            {/* history table */}
            <div className="overflow-x-auto md:px-20">
                <table className=" my-5 w-full ">
                    {/* table head */}
                    <thead className='bg-[#2B3467] border-x-2 border-[#2B3467] text-white'>
                        <tr>
                            <th className='py-5'>Image</th>
                            <th className='py-5 '>Product Name</th>
                            <th className='py-5 '>Price</th>
                            <th className='py-5 '>Status</th>
                            <th className='py-5 '>Transaction ID</th>
                            <th className='py-5 '>Date</th>
                            <th className='py-5 '>Action</th>

                        </tr>
                    </thead>
                    {/* table body */}
                    <tbody>
                        {
                            payments && payments.map((payment, i) => <tr key={i} className='font-semibold even:bg-gray-100 odd:bg-white text-center even:border-y-2 border-x-2 '>
                                <td>
                                    <div className="avatar">
                                        <div className="mt-2 bg-gray-300 w-16 mx-auto">
                                            {payment.ordered_product_images[0] && <img src={payment.ordered_product_images[0]} className='p-2 rounded-xl' />}
                                        </div>
                                    </div>
                                </td>
                                <td className=''>
                                    {payment.ordered_product_name && payment.ordered_product_name}
                                </td>
                                <td className=''>{payment.paid}$</td>
                                <td className=''>{payment.status}</td>
                                <td className=''>{payment.transactionId}</td>
                                <td className=''>{payment.transaction_date}</td>
                                <td>
                                    <button className='mx-5 text-[#EB455F] p-3 text-2xl font-semibold  '><FaTrash></FaTrash></button>


                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;