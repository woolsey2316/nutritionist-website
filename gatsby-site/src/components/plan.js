import React from 'react';

const plan = (planName,cost) => {
    return (
        <div>
          <h2>{planName}</h2>
          <p>{cost}</p>
          <p>{description}</p>
          <p>Valid for one Year</p>
          <button type="button">Start Now</button>
        </div>
    ) 
}