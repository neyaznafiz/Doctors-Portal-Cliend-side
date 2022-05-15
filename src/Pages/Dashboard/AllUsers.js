import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllUserRow from './AllUsersRow';

const AllUsers = () => {

    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/allusers').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">All Users {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
{
    users.map(user=> <AllUserRow
    key={user._id}
    user={user}
    ></AllUserRow>)
}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;