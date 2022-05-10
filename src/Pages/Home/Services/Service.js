import React from 'react';

const Service = ({service}) => {

    const {name, img, description} = service

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default Service;