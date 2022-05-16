import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllUserRow from './AllUsersRow';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://whispering-refuge-29775.herokuapp.com/allusers', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

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
                            <th>SL</th>
                            <th>User Email</th>
                            <th>Admin Button</th>
                            <th>Remove button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <AllUserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></AllUserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;