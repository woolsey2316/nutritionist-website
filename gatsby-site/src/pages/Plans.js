import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SiteNavigation from '../components/SiteNavigation'
import PlansContainer from '../containers/PlansContainer'

const Plans = () => {
  return (
    <div>
      <SiteNavigation />
      <picture>
        <Header title="Choose Your Pricing Plan" />
      </picture>
      <PlansContainer/>
      <Footer />
    </div>
  )
}

export default Plans
