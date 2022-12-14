import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    return (
        <div className="drawer drawer-end drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            <h2 className='text-center text-4xl my-3 py-3 text-blue-600 font-bold'>Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-47 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>Dashboard Home</Link></li>
                    <li><Link to='/dashboard/users'>Users</Link></li>
                    <li><Link to='/dashboard/orders'>Orders</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;