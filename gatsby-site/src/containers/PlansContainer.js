import React, { Component } from 'react'
import Style from '../scss/services.module.scss'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { addToCart } from '../actions'
import Plan from '../components/Plan'

class PlansContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={Style.mainContainer}>
      {
        this.props.products.filter(product => product.id >= 10).map(product => {
          return (
            <Plan
              key={product.id}
              product={product}
              onAddToCartClicked={() => this.props.addToCart(product.id)} 
            />
          )
        })
      }
      </div>
    )
  }
}

  const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
  })

  const mapDispatchToProps = dispatch => ({
    addToCart: id => dispatch(addToCart(id))
  })

  export default connect(
    mapStateToProps,
    { addToCart }
  )(PlansContainer)
