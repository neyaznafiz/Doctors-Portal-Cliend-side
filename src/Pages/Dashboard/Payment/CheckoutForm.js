import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';


const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState()

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        // if (error) {
        //     setCardError(error.message)
        // }
        // else {
        //     setCardError('')
        // }
        setCardError(error?.message || '')
    }

    return (
       <>
       
       <form onSubmit={handleSubmit}>
            <CardElement
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

            <div className='flex justify-end'>
                <button type="submit" disabled={!stripe} className='btn btn-success btn-sm mt-4 uppercase'>
                    Pay
                </button>
            </div>
        </form>

{
  cardError && <p className='text-red-500'>{cardError}</p>
}

       </>
    );
};

export default CheckoutForm;