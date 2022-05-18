import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
    event.preventDefault()

    if(!stripe || !elements){
        return
    }

    const card = elements.getElement(CardElement)

    if (card == null) {
        return;
      }

}

return (
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
);
};

export default CheckoutForm;