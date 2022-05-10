import React from 'react';

const Review = ({ review }) => {

    const { name, img, location, reviews } = review

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{reviews}</p>

                <div className='flex items-center gap-2'>
                    <div className="avatar">
                        <div className="w-20 mask mask-hexagon">
                            <img src={img} />
                        </div>
                    </div>

                    <div>
                        <h4 className='text-md font-bold'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;