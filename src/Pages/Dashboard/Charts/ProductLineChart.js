import React from 'react';
import useProducts from '../../../hooks/useProducts';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const ProductLineChart = () => {
    const [products]=useProducts();
    return (
        <div className='area-chart'>
            <h2>Investment VS Revenue</h2>
            <h2>Month Wise Sell</h2>
            {<LineChart width={400} height={300} data={products}>
                <Line dataKey={'selling_price'}></Line>
                <Line dataKey={'stock'}></Line>
                <XAxis dataKey={'name'}></XAxis>
                <Tooltip />
                <YAxis />
            </LineChart>}
        </div>
    );
};

export default ProductLineChart;