import React from 'react';
import datas from './ReviewsAPI'

const Reviews = () => {
    return (
        <div className='m-3 p-3'>
            <h2 className='text-center text-4xl my-3 py-3 text-blue-600 font-bold'>Customar Review</h2>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>

                {
                    datas?.map(data => <div key={data.id} className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <div className="avatar m-2 p-2  justify-center">
                            <div className="w-24 mx-3 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={data.img} alt={data.title} className='' />
                            </div>
                        </div>
                        <div className="card-body mt-0 pt-0 text-center">
                            <h2 className="font-bold ">{data.title}</h2>
                            <p className=''><span className='font-semibold'>Ratings: </span>{data.ratings} start</p>
                            <p className='mt-0'><span className='text-xl'></span> {data.review}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;