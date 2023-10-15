import React from 'react';
import { FaEnvelope, FaFax, FaLock, FaMapMarkedAlt, FaMapMarkerAlt, FaMicrophoneAlt, FaPhoneAlt, FaTelegramPlane, FaUser } from 'react-icons/fa';
import ContactCard from './ContactCard';
import InputFieldOne from '../DesignComponents/InputFieldOne';

const ContactUs = () => {
    const contactInfo = [
        { icon: <FaMapMarkerAlt />, title: 'Our Office', description: 'Asfia Tower, Block-E Banani, Dhaka – 1213' },
        { icon: <FaPhoneAlt />, title: 'Phone Number', description: '01711111111, 01722222222' },
        { icon: <FaFax />, title: 'FAX', description: '151-212-2333' },
        { icon: <FaEnvelope />, title: 'Email', description: 'user123@gmail.com' },
    ];
    return (
        <div className='bg-gray-50 pt-20'>
            <div className=' md:p-10 py-20'>
                <div className='justify-center md:relative md:flex items-center'>
                    <div className='md:w-2/5 h-[500px] relative bg-[#2B3467] mb-10 p-5 md:px-10'>
                        {/* contact us headline */}
                        <h1 className=' text-white text-3xl font-bold text-center mb-10'>Contact Us</h1>
                        {/* input field of contact us */}
                        <form action="">
                            <InputFieldOne label={'Your Name'} type={'text'} icon={<FaUser></FaUser>}></InputFieldOne>
                            <InputFieldOne label={'Your Email'} type={'email'} icon={<FaEnvelope></FaEnvelope>}></InputFieldOne>
                            <textarea className='w-full border-2 bg-gray100 p-3' placeholder='Your Message'></textarea>

                            <button className='bg-[#EB455F] md:w-96 w-full font-bold text-white py-3 flex items-center gap-3 justify-center mx-auto my-5'>Send <FaTelegramPlane></FaTelegramPlane></button>
                        </form>

                    </div>

                </div>
                {/* contact cards */}
                <div className='mx-auto'>
                    <div className='grid md:grid-cols-4 md:mx-56 gap-5 max-sm:-mt-28 p-5'>
                        {
                            contactInfo.map((info, index) =>
                                <ContactCard key={index} icon={info.icon} title={info.title} description={info.description} />
                              )
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;