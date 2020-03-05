import React from 'react';
import Footer from '../components/footer'
import Wood from '../components/wood'
import SiteNavigation from '../components/SiteNavigation'

const Plans = () => {
    return (
      <div>
      <SiteNavigation/>
        <picture>
          <Wood/>
          <h1>Plans</h1>
        </picture>
        <Footer/>
      </div>
    )
}

export default Plans;