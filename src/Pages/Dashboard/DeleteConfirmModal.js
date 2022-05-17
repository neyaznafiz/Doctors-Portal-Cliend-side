import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ delitingDoctor, refetch, setDelitingDoctor }) => {

    const { name, email } = delitingDoctor

    const handleDelete = () => {

        fetch(`http://whispering-refuge-29775.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} is deleted . `)
                    setDelitingDoctor(null)
                    refetch()
                }
            })
    }

    return (
        <div>


            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500"> Are you sure you want to delete {name}</h3>

                    <p className="py-4">If you click delete button the information will be delete from everywhere. You will can't back again.</p>

                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default DeleteConfirmModal;