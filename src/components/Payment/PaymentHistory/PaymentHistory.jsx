import React from 'react';
import { FaTrash } from 'react-icons/fa';

const PaymentHistory = () => {
    const paidProducts = JSON.parse(localStorage.getItem('bought'))
    console.log(paidProducts)
    return (
        <div className='bg-gray-100 py-10 pb-56 px-10'>
            {/* Payment history page header */}
            <h1 className='border-y-2 border-[#2B3467] border-dashed text-[#2B3467] text-center mb-10 text-3xl font-semibold w-96 p-2 mx-auto '>Payment History</h1>
            {/* history table */}
            <div className="overflow-x-auto">
                <table className=" my-5 w-full border-2 border-[#2B3467]">
                    {/* table head */}
                    <thead className='bg-[#2B3467]  text-white'>
                        <tr>
                            <th className='py-5'>Image</th>
                            <th className='py-5 '>Product Name</th>
                            <th className='py-5 '>Price</th>
                            <th className='py-5 '>Status</th>
                            <th className='py-5 '>Transaction ID</th>
                            <th className='py-5 '>Action</th>
                            
                        </tr>
                    </thead>
                    {/* table body */}
                    <tbody>
                        {
                            paidProducts.map(thePro => <tr key={thePro.id} className='font-semibold even:bg-gray-100 odd:bg-white text-center even:border-y-2 '>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded w-16 mx-auto">
                                            {thePro.productImage && <img src={thePro.productImage} className='p-2 rounded-xl'/>}
                                        </div>
                                    </div>
                                </td>
                                <td className=''>
                                    {thePro.productName && thePro.productName}
                                </td>
                                <td className=''>{thePro.paid}$</td>
                                <td className=''>Paid</td>
                                <td className=''>{thePro.transactionId}</td>
                                <td>
                                    <button className='mx-5 text-[#EB455F] p-3 font-semibold  '><FaTrash></FaTrash></button>


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