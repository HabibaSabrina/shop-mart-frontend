import React from 'react';
import { FaPen } from 'react-icons/fa';
import InputFieldTwo from '../../DesignComponents/InputFieldTwo';

const UserEditModal = ({ setShowEdit, user }) => {
    // information for modal input fields
    const editModal = [
        [{ label: 'Name', type: 'text', value: user.name },
        { label: 'Email', type: 'email', value: user.email }],
        [{ label: 'Phone', type: 'text', value: user.phone },
        { label: 'Address', type: 'text', value: user.address }],
        [{ label: 'Old Password', type: 'password', value: '' },
        { label: 'New Password', type: 'password', value: '' }],

    ]

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-gray-100 absolute top-24 md:w-1/2 rounded shadow-md">
                <div className='relative'>
                    {/* user details modal */}
                    <p className='bg-[#2B3467] text-white p-3 font-bold'>Edit User Details</p>
                    <div className='p-5'>
                        {
                            editModal.map((editPair, i) => <div key={i} className='flex gap-5 mb-5'>
                                {
                                    editPair.map((edit, i) => <InputFieldTwo key={i} label={edit.label} type={edit.type} value={edit.value}></InputFieldTwo>)
                                }
                            </div>)


                        }
                        {/* edit button  */}
                        <div className='flex justify-center'>
                            <button className='bg-[#EB455F] flex items-center text-white gap-3 px-10 py-3 my-5 font-semibold text-xl'>Edit <FaPen></FaPen></button>
                        </div>
                    </div>
                    {/* close button*/}
                    <button
                        className="mt-2 absolute -top-7 -right-4 rounded-full bg-[#EB455F] hover:bg-[#c93c51] text-white font-bold py-2 px-4"
                        onClick={() => setShowEdit(false)}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserEditModal;