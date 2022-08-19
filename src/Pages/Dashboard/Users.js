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
            <h2>Our Users: {users?.length}</h2>
        </div>
    );
};

export default Users;