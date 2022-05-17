import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {

    const [delitingDoctor, setDelitingDoctor] = useState(null)

    const { data: doctors, isLoading, refetch } = useQuery('/doctors', () => fetch('http://whispering-refuge-29775.herokuapp.com/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold">Manage Doctors: {doctors.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDelitingDoctor={setDelitingDoctor}
                            ></DoctorRow>)
                        }

                    </tbody>
                </table>
            </div>
            {delitingDoctor && <DeleteConfirmModal
                delitingDoctor={delitingDoctor}
                refetch={refetch}
                setDelitingDoctor={setDelitingDoctor}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctors;