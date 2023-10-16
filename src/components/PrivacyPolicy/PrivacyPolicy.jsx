import React, { useContext } from 'react';
import HeadlineDesign from '../DesignComponents/HeadlineDesign';
import { InfoContext } from '../../Provider/InfoProvider';

const PrivacyPolicy = () => {
    const [info] = useContext(InfoContext)
    const {PrivacyPolicy, TermsOfService} = info
    console.log(PrivacyPolicy, TermsOfService)
    return (
        <div className='md:py-16 py-10 bg-gray-50 '>
            {/* headline */}
                <HeadlineDesign headline={'Privacy Policy'} ></HeadlineDesign>
                {
                    PrivacyPolicy && <div className='leading-7 md:px-64 px-5'>
                        {/* introduction */}
                    <div className='mb-3'>
                    <p><span className='font-bold text-[#2B3467]'>Introduction:</span> {PrivacyPolicy.Introduction}</p>
                    </div>
                    {/* information we collect */}
                    <div className='mb-3'>
                    <p className='font-bold text-[#2B3467]'>Information we collect:</p>
                    <div className='list-disc'>
                        <li>{PrivacyPolicy.InformationWeCollect.PersonalInformation}</li>
                        <li>{PrivacyPolicy.InformationWeCollect.PaymentInformation}</li>
                        <li>{PrivacyPolicy.InformationWeCollect.UsageData}</li>
                    </div>
                    </div>
                    {/* How we use your information: */}
                    <div className='mb-3'>
                    <p className='font-bold text-[#2B3467]'>How we use your information:</p>
                    <div className='list-disc'>
                        <li>{PrivacyPolicy.HowWeUseYourInformation.FulfillmentOfOrders}</li>
                        <li>{PrivacyPolicy.HowWeUseYourInformation.Communication}</li>
                        <li>{PrivacyPolicy.HowWeUseYourInformation.Analytics}</li>
                    </div>
                    </div>
                    {/* Information sharing */}
                    <div className='list-disc'>
                        <li>{PrivacyPolicy.InformationSharing}</li>
                        <li>{PrivacyPolicy.YourChoices}</li>
                        <li>{PrivacyPolicy.Security}</li>
                    </div>
                    {/* Terms of service */}
                    <div>
                    <p className='font-bold text-[#2B3467]'>Terms of service:</p>
                    {
                        Object.entries(TermsOfService).map(([term, description]) => <li key={term}>
                       {description}
                      </li>) 
                        
                    }
                    </div>
                </div>
                }
            
            
        </div>
    );
};

export default PrivacyPolicy;