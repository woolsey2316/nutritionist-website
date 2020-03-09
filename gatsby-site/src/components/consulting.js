import React from 'react';

const Consulting = (props) => {
    return (
        <div>
          <img src={props.imageURL}></img>
          <h2>{props.heading}</h2>
          <p>{props.time}</p>
          <p>{props.zcost}</p>
          <button type="button">Book Now</button>
        </div>
    )
}

export default Consulting;