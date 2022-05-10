import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>

            <div className='flex-1'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appointment</h3>

                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>

                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro dicta esse quisquam illo ratione dolorem labore. Aliquid, eos. Voluptatibus eligendi quidem deserunt sint aut dolorum, est obcaecati exercitationem? Vitae blanditiis impedit officia quam doloribus repudiandae minus provident velit incidunt vero?</p>

                <PrimaryButton>get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;