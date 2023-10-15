import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react';
import { InfoContext } from '../../Provider/InfoProvider';


const Faq = () => {
    const [ques, setQues] = useState(null)
    const [info] = useContext(InfoContext)
    const {faq} = info
    return (
        <div className='md:pt-16 pt-10 bg-gray-50 pb-20'>
            {/* Faq description */}
            <div className=' flex items-center w-full justify-center gap-20 bg-opacity-80 bg-gray-200 shadow-md leading-7 p-6' data-aos="fade-down" data-aos-duration={1000}>
                <div className='md:w-1/2 text-center text-gray-800'>
                    <h1 className='text-3xl font-bold text-[#2B3467] mb-3'>Frequently Asked Questions</h1>
                    <p>Welcome to our FAQ section, your one-stop destination for answers to common queries about our e-commerce platform. We understand that navigating through the world of online shopping can sometimes raise questions, and we&apos;re here to provide you with clear and concise responses to make your shopping experience as smooth as possible.</p>
                </div>
                <img className='w-32 max-sm:hidden animate-pulse' src="/question.png" alt="" />
            </div>
            {/* the faq headline */}
            <div className='mt-8 mx-auto md:w-1/2'>
            <p className='bg-[#2B3467] text-white py-3 px-5 mb-5 text-xl font-semibold'>General Questions</p>

            <div className=' bg-gray-200 p-5'>
            {/* question and answers of faq  */}
            {
                faq.map(theFaq => <div  key={theFaq.id} className='relative mx-auto my-5 font-semibold'>
                <button onClick={() => (ques === theFaq.id ? setQues(null) : setQues(theFaq.id))} className={` text-start px-5 py-2 w-full shadow-xl flex items-center justify-between ${ques == theFaq.id ? 'bg-[#EB455F] text-white' : 'bg-[#2B3467] hover:bg-[#c82f46] text-white'}`}>{theFaq.question}{ques == theFaq.id ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}</button>
                {
                    ques == theFaq.id && <h1 className=' z-10 bg-white shadow-xl w-full p-5 ' >{theFaq.answer}</h1>
                }
            </div>)
            }
        </div>
            </div>
        </div>
    );
};

export default Faq;