import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://assessment.api.vweb.app/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2>Total Orders {orders?.length}</h2>
        </div>
    );
};

export default Orders;