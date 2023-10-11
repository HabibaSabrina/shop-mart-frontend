import React, {useState} from 'react';
import { FaEdit, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUser } from 'react-icons/fa';
import UserEditModal from './UserEditModal';

const ContactDetails = () => {
    const [showEdit, setShowEdit] = useState(false)
    
    const userData={
        name:"Raisa Khan",
        email:"user@gmail.com",
        phone:"01799992344",
        address:"Dhaka, Bangladesh",


    }
    
    return (
        <div className=''>
            <div className='flex items-center justify-between p-3 bg-[#2B3467]'>
                <h1 className='text-xl font-semibold  text-white'>Contact Details</h1>
                <button onClick={() => setShowEdit(true)} className='text-white text-xl'><FaEdit></FaEdit></button>
                 {
                    showEdit && <UserEditModal userData={userData} setShowEdit={setShowEdit}></UserEditModal>
                 }
            </div>
            <div className='bg-gray-100 p-5'>
                <div className='bg-white p-2 mb-4 shadow-xl'>
                    <p className='font-semibold flex items-center gap-2'>Name<FaUser></FaUser></p>
                    <p>{userData.name}</p>
                </div>
                <div className='bg-white p-2 mb-4 shadow-xl'>
                    <p className='font-semibold flex items-center gap-2'>Email <FaEnvelope></FaEnvelope></p>
                    <p>{userData.email}</p>
                </div>
                <div className='bg-white p-2 mb-4 shadow-xl'>
                    <p className='font-semibold flex items-center gap-2'>Phone <FaPhoneAlt></FaPhoneAlt></p>
                    <p>{userData.phone}</p>
                </div>
                <div className='bg-white p-2 mb-4 shadow-xl'>
                    <p className='font-semibold flex items-center gap-2'>Address<FaMapMarkerAlt></FaMapMarkerAlt></p>
                    <p>{userData.address}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;