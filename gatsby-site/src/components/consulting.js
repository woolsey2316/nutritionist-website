import React from 'react';

const consulting = (imageURL,heading,time,cost) => {
    return (
        <div>
          <img src={imageURL}></img>
          <h2>{heading}</h2>
          <p>{time}</p>
          <p>{cost}</p>
          <button type="button">Book Now</button>
        </div>
    )
}