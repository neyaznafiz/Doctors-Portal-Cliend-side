import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0gDbJT4xjXTU74z66wNjkphxp6HCRQGImcS5i8j0Jko2BGa7ePawEKH8M1jWNXs6zW0XC9RMikXsHHteZoUs2k0048prUI1F');

const Payment = () => {

    const { id } = useParams()

    const url = `http://localhost:5000/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='grid justify-center'>

            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success text-xl font-semibold">Hello, {appointment.patientName}</p>
                    <h2 ame="card-title">Pay for {appointment.treatment}</h2>
                    <p> Your Appointment: <span className='font-semibold'>{appointment.date}</span> at <span className='font-semibold'>{appointment.slot}</span></p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>

            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">

                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
                
            </div>


        </div>
    );
};

export default Payment;