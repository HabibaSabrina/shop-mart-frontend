import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useState } from 'react';


const Faq = () => {
    const [ques, setQues] = useState(null)
    const [faqData, setFaqData] = useState([])
    useEffect(() => {
        AOS.init();
    }, [])
    useEffect(() =>{
        fetch('/datasets/faq.json')
        .then(res => res.json())
        .then(data => setFaqData(data))
    },[])
    return (
        <div className='pt-16 bg-gray-50'>
            {/* Faq description */}
            <div className=' flex items-center w-full justify-center gap-20 bg-opacity-80 bg-gray-300 leading-7 p-6' data-aos="fade-down" data-aos-duration={1000}>
                <div className='w-1/2 text-center text-gray-800'>
                    <h1 className='text-3xl font-bold text-[#2B3467] mb-3'>Frequently Asked Questions</h1>
                    <p>Welcome to our FAQ section, your one-stop destination for answers to common queries about our e-commerce platform. We understand that navigating through the world of online shopping can sometimes raise questions, and we&apos;re here to provide you with clear and concise responses to make your shopping experience as smooth as possible.</p>
                </div>
                <img className='w-32 animate-pulse' src="/question.png" alt="" />
            </div>
            <div className='mt-8 mx-auto w-1/2'>
            <p className='bg-[#2B3467] text-white py-3 px-5 mb-5 text-xl font-semibold'>General Questions</p>

            <div className=' bg-gray-200 p-5'>
            
            {
                faqData.map(faq => <div  key={faq.id} className='relative mx-auto my-5 font-semibold'>
                <button onClick={() => (ques === faq.id ? setQues(null) : setQues(faq.id))} className={` text-start px-5 py-2 w-full shadow-xl flex items-center justify-between ${ques == faq.id ? 'bg-[#EB455F] text-white' : 'bg-[#2B3467] hover:bg-[#c82f46] text-white'}`}>{faq.question}{ques == faq.id ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}</button>
                {
                    ques == faq.id && <h1 className=' z-10 bg-white shadow-xl w-full p-5 ' >{faq.answer}</h1>
                }
            </div>)
            }
        </div>
            </div>
        </div>
    );
};

export default Faq;