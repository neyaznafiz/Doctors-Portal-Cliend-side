import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'

const AvailableAppointments = ({ date }) => {

    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    const formatedDate = format(date, 'PPPP')

    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`https://whispering-refuge-29775.herokuapp.com/available?date=${formatedDate}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`https://whispering-refuge-29775.herokuapp.com/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formatedDate])

    return (
        <div>
            <h4 className='text-xl text-secondary text-center pt-10'>Available Appointments on  {format(date, 'PPPP')}</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 py-24'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;