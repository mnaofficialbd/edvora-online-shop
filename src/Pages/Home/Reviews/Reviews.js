import React from 'react';
import datas from './ReviewsAPI'

const Reviews = () => {
    return (
        <div>
            <h2>This is reviews section</h2>
            {datas.map((data, index) => {
                return (<div key={index}>
                    <img src={data.image} alt={data.title} />
                    <h2>customer: {data.title}</h2>
                    <p>review: {data.desc}</p>
                </div>)
            })}
        </div>
    );
};

export default Reviews;