import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CheckoutForm = () => {
    const stripe = useStripe(); //stripe hooks
    const elements = useElements();
    const [cardError, setCardError] = useState('') //state for payment error
    const [success, setSuccess] = useState(''); // state for payment success
    const [proData, setProData] = useState([]); //state to hold product data
    const [data, setData] = useState([]); //to hold data  from local storage
    const proId = useParams()
    useEffect(() =>{
        fetch('/products.json') //fetching data
        .then(res => res.json())
        .then(data => setProData(data))

    },[])
    const theProduct = proData.find(pro => pro.id == proId.id) //finding a specific product
   
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);
       
        if (card == null) {
            return;
          }
          // Use card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      
      if (error) {
        setSuccess('');
        setCardError(error.message)
      } else {
        setCardError('')
        setSuccess('Payment is Successful!')
        // creating object of the sold product
        const soldProd = {
            transactionId: paymentMethod.id,
            productName: theProduct.product_name,
            productImage: theProduct.image,
            paid: theProduct.price

        }
        //getting previous history data from local storage
        const storedSold = JSON.parse(localStorage.getItem('bought'));
        if(storedSold){
        setData(storedSold)
        const updatedData = [...data, soldProd]
        //updating local storage with new record
        localStorage.setItem('bought', JSON.stringify(updatedData))
        }else{
        localStorage.setItem('bought', JSON.stringify(storedSold))
        }
        
      }
        }

        return (
            <div>
                {/* Payment Form */}
                <form onSubmit={handleSubmit}>
                <CardElement className='border-2 p-5 rounded-xl bg-white border-[#2B3467] shadow-md mt-20 mx-40'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='text-center my-5'>
                <button className='bg-[#EB455F] p-3 px-10 text-xl font-semibold text-white' type="submit" disabled={!stripe}>
                    Pay
                </button>
                </div>
            </form>
            {/* Payment error or payment success message section */}
      {cardError && <p className="text-red-600 font-semibold text-center mt-5">{cardError}</p>}
      {success && <p className=" text-center mt-5 text-green-700 font-semibold">{success}</p>}
            </div>
        );
    };

    export default CheckoutForm;