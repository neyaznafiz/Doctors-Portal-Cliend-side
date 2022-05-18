import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../FIrebase/firebase.init';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {

    const { _id, name, slots, price } = treatment

    const [user, loading] = useAuthState(auth)

    const formatedDate = format(date, 'PPPP')
    const handleBooking = event => {
        event.preventDefault()

        const slot = event.target.slot.value

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('https://whispering-refuge-29775.herokuapp.com/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appointment is set ${formatedDate} at ${slot}`)
                }
                else {
                    toast.error(`You already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch()
                // to close the modal
                setTreatment(null)
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">

                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg my-4 uppercase">Booking For: <span className='text-secondary'>{name}</span> </h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center my-4' >
                        <input type="text" disabled value={format(date, 'PPPP')} className="input input-bordered w-full max-w-xs font-semibold opacity-80" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot} > {slot} </option>)
                            }
                        </select>

                        <input type="text" name='name'
                            disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs font-semibold" />

                        <input type="email" name='email' disabled value={user.email || ''} className="input input-bordered w-full max-w-xs font-semibold" />

                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs font-semibold" />

                        <input type="submit" value="SUBMIT" className="btn btn-accent w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;