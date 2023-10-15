import React, {useState} from 'react';
import { FaEdit, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUser } from 'react-icons/fa';
import UserEditModal from './UserEditModal';

const ContactDetails = ({user}) => {
    const [showEdit, setShowEdit] = useState(false)
    const {name, email, phone, address} = user
    
    const userData=[
        {title: 'Name', data:name, icon:<FaUser/>},
        {title: 'Email', data:email, icon:<FaEnvelope/>},
        {title: 'Phone', data:phone, icon:<FaPhoneAlt/>},
        {title: 'Address', data:address, icon:<FaMapMarkerAlt/>},
    ]
    
    return (
        <div className=''>
            <div className='flex items-center justify-between p-3 bg-[#2B3467]'>
                {/* title*/}
                <h1 className='text-xl font-semibold  text-white'>Contact Details</h1>
                {/* setting condition to open a user edit modal */}
                <button onClick={() => setShowEdit(true)} className='text-white text-xl'><FaEdit></FaEdit></button>
                 {
                    showEdit && <UserEditModal user={user} setShowEdit={setShowEdit}></UserEditModal>
                 }
            </div>
            <div className='bg-gray-200 p-5'>
                {/* the contact details of the user */}
                {
                    userData.map((theUser, i) => <div key={i} className='bg-white p-2 mb-4 shadow-xl'>
                    <p className='font-semibold flex items-center gap-2'>{theUser.title}{theUser.icon}</p>
                    <p>{theUser.data}</p>
                </div>)
                }
            </div>
        </div>
    );
};

export default ContactDetails;