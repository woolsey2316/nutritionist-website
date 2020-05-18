import React from 'react'
import PropTypes from 'prop-types'
import Style from '../../scss/product.module.scss'

const Product = ({ price, quantity, title }) => (
  <div className={Style.container}>
    <p className={Style.title}>{title}</p>
    <p className={Style.subtext}>- &#36;{price}{quantity ? ` x ${quantity}` : null}</p>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product