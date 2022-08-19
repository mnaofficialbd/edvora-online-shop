import React from 'react';
import useProducts from '../../../hooks/useProducts';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const ProductAreaCharts = () => {
    const [products]=useProducts();
    return (
        <div className='w-full mx-auto'>
            {
                <AreaChart width={1000} height={400} data={products}>
                <XAxis dataKey={"name"}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
                <Area type="monotone" dataKey={'selling_price'} stackId='1' stroke='#8884d8' fill='#8884d8' />
                <Area type="monotone" dataKey={'stock'} stackId='1' stroke='#ffc658' fill='#ffc658' />
                </AreaChart>
            }
            <h2 className='text-center text-xl'>Selling VS Stock</h2>
        </div>
    );
};

export default ProductAreaCharts;