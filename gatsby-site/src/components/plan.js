import React from 'react'
import Style from '../scss/plan.module.scss'
import ButtonStlye from '../scss/button.module.scss'

const Plan = (props) => {
    return (
      <div>
        <div className={Style.planContainer}>
          <h2 className={Style.heading}>{props.planName}</h2>
          <div className={Style.priceContainer}>
            <p className={Style.dollarSign}>$</p>
            <p className={Style.price}>{props.cost}</p>
          </div>
          <p className={Style.description} >{props.description}</p>
          <p className={Style.subtext}>Valid for one Year</p>
          <button className={Style.button} type="button">Start Now</button>
          <div className={Style.benefitContainer}>
            <p className={Style.description} >This is a Benefit</p>
            <p className={Style.description} >This is a Benefit</p>
            <p className={Style.description} >This is a Benefit</p>
          </div>
        </div>
      </div>
    ) 
}

export default Plan;