import React from 'react';
import useProducts from '../../../hooks/useProducts';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const ProductLineChart = () => {
    const [products]=useProducts();
    return (
        <div>
            {<LineChart width={1000} height={400} data={products}>
                <Line dataKey={'selling_price'}></Line>
                <Line dataKey={'stock'}></Line>
                <XAxis dataKey={'name'}></XAxis>
                <Tooltip />
                <YAxis />
            </LineChart>}
            <h2 className='text-center text-xl'>Stock Wise price</h2>
        </div>
    );
};

export default ProductLineChart;