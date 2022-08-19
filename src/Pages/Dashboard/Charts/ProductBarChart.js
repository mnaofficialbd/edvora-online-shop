import React from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useProducts from '../../../hooks/useProducts';

const ProductBarChart = () => {
    const [products]=useProducts();

    return (
        <div>
            {
                <BarChart width={1000} height={400} data={products}>
                    <XAxis dataKey={"name"}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                    <Legend></Legend>
                    <Bar dataKey="selling_price" stackId="a" fill="#8884d8" />
                    <Bar dataKey="stock" stackId="a" fill="#82ca9d" />
                </BarChart>
            }
            <h2 className='text-center text-xl'>Selling VS Stock</h2>
        </div>
    );
};

export default ProductBarChart;