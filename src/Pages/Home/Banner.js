import React from 'react';

const Banner = () => {
    return (
        <div class="carousel w-full">
            <div class="carousel-item relative w-full">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/299/813/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="Banner" className="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="/" class="btn btn-circle">❮</a>
                    <a href="/" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;