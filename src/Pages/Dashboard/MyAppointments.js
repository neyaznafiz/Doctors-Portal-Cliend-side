import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../FIrebase/firebase.init';

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([])
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment, index )=> <tr>
                                <th>{index + 1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.slot}</td>
                                <td>{appointment.date}</td>
                            </tr> )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;