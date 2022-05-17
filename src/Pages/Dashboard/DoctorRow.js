import React from 'react'


const DoctorRow = ({ doctor, index, refetch, setDelitingDoctor }) => {

    const { img, name, speciality, email } = doctor

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 mask mask-hexagon">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label for="delete-confirm-modal" onClick={() => setDelitingDoctor(doctor)} class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow