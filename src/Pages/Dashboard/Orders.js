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
            <h2 className='text-2xl text-bold text-center mb-2 py-2'>Total Orders: {orders?.length}</h2>
            <div className="overflow-x-auto w-100">
                <table className="table mx-auto px-5">
                    <thead>
                        <tr className='text-center'>
                            <th>Order ID</th>
                            <th>Product ID</th>
                            <th>Quantity</th>
                            <th>User ID</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr className='text-center'>
                                    <th>{order.order_id}</th>
                                    <th>{order.product_id}</th>
                                    <th>{order.quantity}</th>
                                    <th>{order.user_id}</th>
                                    <th>{order.order_date}</th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;