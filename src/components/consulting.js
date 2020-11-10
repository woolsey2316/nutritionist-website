import React from 'react'
import PropTypes from 'prop-types'
import Style from '../scss/consulting.module.scss'
import ButtonStyle from '../scss/services.module.scss'
import Image from '../components/ImageComponents/Image'

const Consulting = ({product, onAddToCartClicked}) => {
  return (
    <div className={Style.mainContainer}>
      <Image filename={product.img}/>
      <h2 className={Style.title}>{product.title}</h2>
      <p className={Style.time}>{product.time + ' hr'}</p>
      <p className={Style.cost}>&#36;{ product.price}</p>
      <p className={Style.time}>{product.inventory + ' left'}</p>
      <button 
        className={ButtonStyle.bookNowButton}
        type="button" 
        onClick={onAddToCartClicked} >
        Book Now
      </button>
    </div>
  )
}

Consulting.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired
}

export default Consulting;



