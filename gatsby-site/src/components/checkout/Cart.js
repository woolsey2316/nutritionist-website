import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Style from '../../scss/button.module.scss'
import productStyle from '../../scss/product.module.scss'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <div>{nodes}</div>
      <p className={productStyle.title}>Total: &#36;{total}</p>
      <button 
        className={Style.button}
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart