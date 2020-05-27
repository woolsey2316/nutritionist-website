import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div style={{padding:'2em 10%'}}>
    <h2>Shopping Cart</h2>
    <hr/>
    <CartContainer />
  </div>
)

export default App