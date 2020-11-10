import React, { Component } from 'react'
import Consulting from '../components/Consulting'
import Lesson from '../components/Consulting'
import Style from '../scss/services.module.scss'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { addToCart } from '../actions'

export class ServicesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      consulting: true,
    }
    this.showConsulting = this.showConsulting.bind(this)
  }
  showConsulting(truthy) {
    this.setState({ consulting: truthy })
  }
  componentDidMount() {
    this.showConsulting(true);
  }

  render() {
    return (
      <div className={Style.mainContainer}>
        <button
          className={this.state.consulting ? Style.button__underlined : Style.button}
          type="button"
          onClick={() => this.showConsulting(true)}
        >
          Consulting
        </button>
        <button
          className={!this.state.consulting ? Style.button__underlined : Style.button}
          type="button"
          onClick={() => this.showConsulting(false)}
        >
          Lessons
        </button>
        <div className={Style.break} />
        {
          this.state.consulting && 
          this.props.products.filter(product =>  product.id < 7).map(product => {
              return (
                <Consulting
                  key={product.id}
                  product={product}
                  onAddToCartClicked={() => this.props.addToCart(product.id)} 
                />
              )
            }
          )
        }
        {
          !this.state.consulting && 
          this.props.products.filter(product =>  product.id >= 7 && product.id < 10).map(product => {
              return(
                <Lesson
                  key={product.id}
                  product={product}
                  onAddToCartClicked={() => this.props.addToCart(product.id)} 
                />
              )
            }
          )
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
  mapDispatchToProps
)(ServicesContainer)
