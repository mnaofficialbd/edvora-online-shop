import React from 'react';
import ProductAreaCharts from './Charts/ProductAreaCharts';

const DashboardHome = () => {
    return (
        <div>
            <h2 className='text-2xl text-bold text-center mb-2 py-2'>Dashboard Home:</h2>
            <ProductAreaCharts />
        </div>
    );
};

export default DashboardHome;