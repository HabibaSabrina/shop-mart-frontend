import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ActivityTabs = () => {
    const [active, setActive] = useState(0)
    const [userOrder, setUserOrder] = useState([])
    const [review, setReview] = useState([])
    const handleSelect = (index) => {
        setActive(index)
    }
    const tabItem = ['Orders', 'Reviews']
    useState(() => {
        fetch('/order.json')
            .then(res => res.json())
            .then(data => setUserOrder(data))
    }, [])
    useState(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

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
                <div className='bg-gray-100 p-10'>
                    <TabPanel >
                        {
                            userOrder.map(theOrder => <div className='flex justify-between items-center p-5 bg-white mb-3' key={theOrder.orderId}>
                                <div>
                                    <p><b>Order Id:</b> {theOrder.orderId}</p>
                                    <p><b>Date:</b> {theOrder.date}</p>
                                    <p><b>Price:</b>  {theOrder.price}$</p>
                                </div>
                                <button className='text-white bg-[#2B3467] px-3 py-1'> {theOrder.status}</button>
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            review.map(rev => <div className='p-5 bg-white mb-3' key={rev.id}>
                                <div className='flex items-center justify-between w-full'>
                                    <div>
                                        <p><b>{rev.product_name}</b></p>
                                        <div className='flex gap-2 text-yellow-400 my-2'>
                                            <FaStar></FaStar>
                                            <FaStar></FaStar>
                                            <FaStar></FaStar>
                                            <FaStar></FaStar>
                                            <FaStar></FaStar>
                                        </div>
                                    </div>
                                    <img className='w-14' src={rev.image} alt="" />
                                </div>
                                <div>
                                    <p><b>Review</b></p>
                                    <p>{rev.review}</p>
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