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
      lessons: false,
    }
    this.showConsulting = this.showConsulting.bind(this)
    this.showLessons = this.showLessons.bind(this)
  }
  showConsulting() {
    this.setState({ consulting: true, lessons: false })
  }
  showLessons() {
    this.setState({ consulting: false, lessons: true })
  }
  render() {
    return (
      <div className={Style.mainContainer}>
        <button
          className={Style.button}
          type="button"
          onClick={this.showConsulting}
        >
          Consulting
        </button>
        <button
          className={Style.button}
          type="button"
          onClick={this.showLessons}
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
          this.state.lessons && 
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
