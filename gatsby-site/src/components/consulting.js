import React from 'react';
import Style from '../scss/consulting.module.scss'
import Image from './image'

const Consulting = (props) => {
    return (
        <div className={Style.mainContainer}>
          {props.img}
          <h2 className={Style.title}>{props.heading}</h2>
          <p className={Style.time}>{props.time}</p>
          <p className={Style.cost}>{props.cost}</p>
          <button className={Style.button} type="button">Book Now</button>
        </div>  
    )
}

export default Consulting;