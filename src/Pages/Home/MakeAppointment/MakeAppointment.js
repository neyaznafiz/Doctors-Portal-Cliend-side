import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center my-48'>

            <div className='flex-1 hidden lg:block'>
                <img src={doctor} alt="" className='-mt-[200px]' />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>

                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>

                <p className='text-white my-4 pr-0 lg:pr-60'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>

                <PrimaryButton>get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;