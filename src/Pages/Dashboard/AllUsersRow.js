import React from 'react';
import { toast } from 'react-toastify';

const AllUserRow = ({ user, index, refetch }) => {

    const { email, role } = user

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success('Successfully made an admin.')
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>

            <td>
                {role !== 'admin' ?
                    <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>
                    :
                    <span className='font-bold text-xs'>Already admin</span>}
            </td>

            <td> <button className="btn btn-xs">Remove User</button></td>

        </tr>
    );
};

export default AllUserRow;