import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }}
            className='grid gap-y-10 py-16'>
            <div className='text-center'>
                <h3 className='text-primary font-bold'>Contact Us</h3>
                <h2 className='text-2xl text-white font-semibold' >Stay connected with us</h2>
            </div>

            <div className='flex justify-center'>
                <div className='grid gap-y-5 w-[450px]'>
                    <input type="email" name="email" id="" placeholder='Email Address' className='border py-1 px-2 rounded-md' />

                    <input type="text" name="" id="" placeholder='Subject' className='border py-1 px-2 rounded-md' />

                    <textarea name="message" id="" placeholder='Your massage' cols="30" rows="10" className='border h-[136px] py-1 px-2 rounded-md'></textarea>

                    <div className="flex justify-center">
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;