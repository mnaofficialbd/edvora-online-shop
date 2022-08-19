import React from 'react';
import ProductAreaCharts from './Charts/ProductAreaCharts';
import ProductBarChart from './Charts/ProductBarChart';
import ProductLineChart from './Charts/ProductLineChart';

const DashboardHome = () => {
    return (
        <div className='w-100 mx-auto'>
            <h2 className='text-2xl text-bold text-center mb-2 py-2'>Dashboard Home:</h2>
            <ProductBarChart />
            <ProductAreaCharts />
            <ProductLineChart />
        </div>
    );
};

export default DashboardHome;