import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    return (
        <div className="drawer drawer-end drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-center text-blue-500 my-2 py-2'>Dashboard</h2>
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