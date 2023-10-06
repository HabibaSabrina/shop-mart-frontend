import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Rating } from '@smastrom/react-rating';
import SpecificProReview from './SpecificProReview';
import YourReview from './YourReview';
import TabTitle from './TabTitle';

const DetailTabs = ({ theData }) => {
    const { product_name, image, price, product_group, detailed_description, rating, specifications, reviews, colors } = theData

    const tabList = ['Description', 'Specification', 'Review', 'Your Review']
    const [active, setActive] = useState(0)
    const handleSelect = (index) => {
        setActive(index)
    }
    console.log(theData)
    return (
        <div className='mx-60 pb-10'>
            <Tabs onSelect={handleSelect}>
                {/* Tab buttons of the user page */}
                <TabList className='flex gap-10'>
                    {
                        tabList.map((tab, i) => <Tab key={i} className=' focus:outline-none h-10 py-1 text-[#2B3467] font-bold cursor-pointer'><div><p>{tab}</p><p className={`border-b-4 border-[#EB455F]  mt-1 ${active == i ? 'w-full duration-1000' : 'w-0 duration-1000'}`}></p></div></Tab>)
                    }
                </TabList>
                {/* tab panels */}
                <div className='bg-gray-100 p-5'>
                    <TabPanel >
                        <div className='bg-white p-5 leading-7'>
                            <TabTitle title={'Product Description'}></TabTitle>
                            <div className='bg-gray-50 p-5'>
                                <p>{detailed_description}</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel >
                        <div className='bg-white p-5 w-full'>
                        <TabTitle title={'Product Specifications'}></TabTitle>

                            <table className='w-full'>
                                <tbody className='border-2 w-full'>

                                    {Object.entries(specifications).map(([property, value], i) => (
                                        <tr key={i} className='border-2 even:bg-gray-50 w-full'>
                                            <td className='p-5 font-bold text-[#2B3467]'>{property}</td>
                                            <td>{value}</td>

                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        </div>
                    </TabPanel>
                    <TabPanel >
                        <div className='pt-5'>
                        <TabTitle title={'Customer Reviews'}></TabTitle>
                        </div>

                        {
                            reviews.map((review, i) => <SpecificProReview key={i} review={review}></SpecificProReview>)
                        }

                    </TabPanel>
                    <TabPanel>
                        <YourReview></YourReview>
                    </TabPanel>


                </div>
            </Tabs>
        </div>
    );
};

export default DetailTabs;