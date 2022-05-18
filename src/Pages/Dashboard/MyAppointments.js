import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../FIrebase/firebase.init';

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([])
    const [user] = useAuthState(auth);

    const Navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://whispering-refuge-29775.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        Navigate('/')
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data)
                })
        }
    }, [user])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.slot}</td>
                                <td>{appointment.date}</td>
                                <td>
                                    {(appointment.price && !appointment.paid) &&
                                        <Link to={`/dashboard/payment/${appointment._id}`}>
                                            <button className='btn btn-xs btn-success'>Pay</button>
                                        </Link>
                                    }
                                    {(appointment.price && appointment.paid) &&
                                            <span className='text-success'>Paid</span>          
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;