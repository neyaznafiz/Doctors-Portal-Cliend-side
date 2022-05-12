import React from 'react';

const Service = ({ service, setTreatment }) => {

    const { name, slots } = service

    return (
        <div className="card lg:max-w-lg text-primary-content shadow-lg">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>

                <p>{
                    slots.length > 0
                    ? <span> {slots[0]} </span>
                    : <span className='text-red-500'>Try another date.</span>

                }</p>

                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">

                    <label for="booking-modal" onClick={()=>setTreatment(service)} disabled={slots.length === 0}  className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;