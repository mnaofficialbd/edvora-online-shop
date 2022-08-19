import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://assessment.api.vweb.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl text-bold text-center mb-2 py-2'>Our Users: {users?.length}</h2>
            <div className="overflow-x-auto w-100">
                <table className="table mx-auto px-5">
                    <thead>
                        <tr className='text-center'>
                            <th>User ID</th>
                            <th>Uesr Name</th>
                            <th>Contact No</th>
                            <th>Email Address</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr>
                                    <th>{user.user_id}</th>
                                    <th>{user.name}</th>
                                    <th>+8900000{user.user_id}</th>
                                    <th>{user.name}@gmail.com</th>
                                    <th>
                                        <div class="avatar">
                                            <div class="w-12 rounded-xl">
                                                <img src="" alt={user.name}/>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;