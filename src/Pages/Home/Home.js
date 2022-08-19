import React from 'react';
import Product from '../Products/Product';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Banner />
            <Product />
            {/* <BusinessSummery /> */}
            <Reviews />
        </>
    );
};

export default Home;