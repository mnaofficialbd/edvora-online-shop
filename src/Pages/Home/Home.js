import React from 'react';
import Product from '../Products/Product';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Product />
            <BusinessSummery />
            <Reviews />
        </div>
    );
};

export default Home;