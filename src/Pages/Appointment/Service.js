import React from 'react';

const Service = ({ service, setTreatment }) => {

    const { name, slots } = service

    return (
        <div className="card lg:max-w-lg text-primary-content shadow-lg">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>

                <p>{
                    slots.length > 0
                    ? <span> {slots[0]} </span>
                    : <span className='text-red-500'>Try another day.</span>

                }</p>

                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">

                    <label for="booking-modal" onClick={()=>setTreatment(service)} disabled={slots.length === 0}  className="btn btn-secondary text-white uppercase">book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;