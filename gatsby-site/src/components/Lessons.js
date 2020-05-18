import React from "react"
import { addToCart } from '../actions'

const Lesson = ( props ) => {
  return (
    <div>
      <img src={props.imageURL}></img>
      <h2>{props.heading}</h2>
      <p>{props.time}</p>
      <p>{props.cost}</p>
      <button 
        type="button" 
        onAddToCartClicked={() => addToCart(props.id)} >
        Book Now
      </button>
    </div>
  )
}

export default Lesson
