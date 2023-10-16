import React from 'react';

const PaymentModal = () => {
    // payment input field info
        const paymentField = [
        [{ label: 'Credit Card Number', type: 'text', placeholder: '' },
        { label: 'Name on Card', type: 'text', placeholder: '' }],
        [{ label: 'Expiration Date', type: 'text', placeholder: 'EXP Month' },
        { label: 'Expiration Year', type: 'text', placeholder: 'EXP Year' }],
    ]
    return (
        <dialog id="my_modal_1" className="modal bg-black bg-opacity-40">
            <div className="modal-box bg-gray-100 rounded-none">
                <h1 className='text-2xl font-semibold text-center text-[#2B3467] mb-5'>Payment Details</h1>
                {/* payment modal card images */}
                <p className='text-[#2B3467] mb-3 font-semibold'>Accepted Cards</p>
                <div className='flex gap-5 mt-3 mb-5'>
                    <img className='w-12' src="/card/visa.png" alt="" />
                    <img className='w-12' src="/card/master.png" alt="" />
                </div>
                <form action="">
                    {/* payment modal input fields */}
                    {
                        paymentField.map((payPair, i) => <div key={i} className='flex md:gap-10 w-full gap-1 mb-5'>
                            {
                                payPair.map((pay, i) =><div key={i} className=''>
                                <p className='font-semibold text-[#2B3467] mb-3 md:px-2 '>{pay.label}</p>
                                <input className='border-2 p-3 focus:outline-none rounded-none w-full px-2' placeholder={pay.placeholder} type={pay.type} />
                            </div>)
                            }
                        </div>)


                    }
                    <div className='mb-5'>
                        <p className='font-semibold text-[#2B3467] mb-3 px-2'>CVV</p>
                        <input className='border-2 p-3 focus:outline-none rounded-none w-full px-2' placeholder='' type="text" />
                    </div>
                    {/* pay button */}
                    <button className='my-5 font-semibold bg-[#EB455F] w-full py-3 text-white'>Pay Now</button>

                </form>
                {/* button to close modal */}
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