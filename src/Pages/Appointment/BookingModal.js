import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {

    const {_id, name, slots } = treatment

    const handleBooking = event => {
        event.preventDefault()

        const slot = event.target.slot.value
        console.log(_id, name, slot);
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">

                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg my-4 uppercase">Booking For: <span className='text-secondary'>{name}</span> </h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center my-4' >
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />

                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot} > {slot} </option>)
                            }
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>

                        <input type="text" name='name' placeholder="Your name" class="input input-bordered w-full max-w-xs" />

                        <input type="email" name='email' placeholder="Email Address" class="input input-bordered w-full max-w-xs" />

                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="SUBMIT" class="btn btn-accent w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;