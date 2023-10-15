import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OrderTrack from './OrderTrack';
import { UserContext } from '../../../Provider/UserProvider';
import { Rating } from '@smastrom/react-rating';

const ActivityTabs = () => {
    const [user] = useContext(UserContext) //loading user data
    const {orders, reviews} = user // orders and reviews of user
    const [active, setActive] = useState(0)
    const [selected, setSelected] = useState([])
    const [track, setTrack] = useState(false)
    const handleSelect = (index) => {
        setActive(index)
    }
    const tabItem = ['Orders', 'Reviews']
    
    const showTrack = (theOrder) => {
        setTrack(true);
        setSelected(theOrder)
    };

    const closeTrack = () => {
        setTrack(false);
    };

    return (
        <div >
            <Tabs onSelect={handleSelect}>
                {/* Tab buttons of the user page */}
                <TabList className='flex gap-5 justify-end mb-5'>
                    {
                        tabItem.map((tab, i) => <Tab key={i} selectedClassName='bg-gray-500' className='bg-[#EB455F] focus:outline-none w-28 h-10 py-2 text-center text-white font-semibold cursor-pointer'><div><p>{tab}</p><p className={`border-b-4 border-[#2B3467]  mt-2 ${active == i ? 'w-28 duration-1000' : 'w-0 duration-1000'}`}></p></div></Tab>)
                    }
                </TabList>
                {/* tab panels */}
                <div className='bg-gray-200 p-5'>
                    {/* orders panel of the user */}
                    <TabPanel >
                        {
                           orders && orders.map(theOrder => <div className='flex justify-between items-center p-5 bg-white mb-3' key={theOrder.orderId}>
                                <div>
                                    <p><b>Order Id:</b> {theOrder.orderId}</p>
                                    <p><b>Date:</b> {theOrder.date}</p>
                                    <p><b>Price:</b>  {theOrder.total_price}$</p>
                                </div>
                                <div className='flex gap-5'>
                                    <button className='text-white bg-[#2B3467] px-3 py-1'> {theOrder.status}</button>
                                    <button onClick={() => showTrack(theOrder)} className='text-white bg-[#2B3467] px-3 py-1'>Order Track</button>
                                    {track && (
                                        <OrderTrack theOrder={selected} onClose={closeTrack} />
                                    )}
                                </div>
                            </div>)
                        }
                    </TabPanel>
                    {/* review panel of the user */}
                    <TabPanel>
                        {
                           reviews && reviews.map((rev, i) => <div className='p-5 bg-white mb-3' key={i}>
                                <div className='flex items-center justify-between gap-10 w-full'>
                                    <div>
                                        <p><b>{rev.reviewed_product_name}</b></p>
                                        <div className='w-20 my-1'>
                                            <Rating value={rev.ratings}></Rating>
                                        </div>
                                        <p>{rev.review}</p>
                                    </div>
                                    <img className='w-16 bg-gray-200 p-2' src={rev.reviewed_product_image} alt="" />
                                </div>
                            </div>)
                        }
                    </TabPanel>


                </div>
            </Tabs>
        </div>
    );
};

export default ActivityTabs;