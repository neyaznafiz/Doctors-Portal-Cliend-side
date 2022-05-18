import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

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

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success text-xl font-semibold">Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Pay for {appointment.treatment}</h2>
                    <p> Your Appointment: <span className='font-semibold'>{appointment.date}</span> at <span className='font-semibold'>{appointment.slot}</span></p>
                  <p>Please pay: ${appointment.price}</p>
                </div>
            </div>

            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">

                </div>
            </div>


        </div>
    );
};

export default Payment;