import React from 'react';

const PaymentModal = () => {
    return (
        <dialog id="my_modal_1" className="modal bg-black bg-opacity-40">
                <div className="modal-box bg-gray-100 rounded-none">
                    <h1 className='text-2xl font-semibold text-center text-[#2B3467] mb-5'>Payment Details</h1>
                    <p className='text-[#2B3467] mb-3 font-semibold'>Accepted Cards</p>
                    <div className='flex gap-5 mt-3 mb-5'>
                        <img className='w-12' src="/card/visa.png" alt="" />
                        <img className='w-12' src="/card/master.png" alt="" />
                    </div>
                    <form action="">
                        <div className='flex md:gap-10 gap-1 mb-5'>
                        <div className=''>
                            <p className='font-semibold text-[#2B3467] mb-3 px-2 '>Credit Card Number</p>
                            <input className='border-2 p-3 focus:outline-none rounded-none w-full px-2' placeholder='' type="text" />
                        </div>
                        <div className=''>
                            <p className='font-semibold text-[#2B3467] mb-3 px-2'>Name on Card</p>
                            <input className='border-2 p-3 focus:outline-none rounded-none w-full px-2' placeholder='' type="text" />
                        </div>
                        </div>
                        <div className='flex md:gap-10 gap-1 mb-5'>
                        <div className=''>
                            <p className='font-semibold text-[#2B3467] mb-3 px-2 '>Expiration Date</p>
                            <input className='border-2 p-3 focus:outline-none rounded-none w-full px-2' placeholder='EXP Month' type="text" />
                        </div>
                        <div className=''>
                            <p className='font-semibold text-[#2B3467] mb-3 px-2'>Name on Card</p>
                            <input className='border-2 p-3 focus:outline-none rounded-none w-full px-2' placeholder='EXP Year' type="text" />
                        </div>
                        </div>
                        <div className='mb-5'>
                            <p className='font-semibold text-[#2B3467] mb-3 px-2'>CVV</p>
                            <input className='border-2 p-3 focus:outline-none rounded-none w-full px-2' placeholder='' type="text" />
                        </div>
                        <button className='my-5 font-semibold bg-[#EB455F] w-full py-3 text-white'>Pay Now</button>

                    </form>
                    <div >
                        <form method="dialog">
                            <button className="font-bold text-[#EB455F] absolute rounded-full px-5 text-2xl top-3 right-0">X</button>
                        </form>
                    </div>
                </div>
            </dialog>
    );
};

export default PaymentModal;