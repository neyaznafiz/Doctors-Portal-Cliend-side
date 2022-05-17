import React from 'react'

const DoctorRow = ({ doctor, index }) => {

    const { img, name, speciality } = doctor

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
            <td><button className="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default DoctorRow