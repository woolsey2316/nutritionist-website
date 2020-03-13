import React from 'react'
import ServicesBody from '../components/ServicesBody'
import Footer from '../components/footer.js'
import Header from '../components/Header';
import SiteNavigation from '../components/SiteNavigation'
import SEO from '../components/seo'

const Services = () => {
  return (
      <div>
        <SEO title="services" />
        <SiteNavigation/>
        <Header title="Services"/>
        <ServicesBody/>
        <Footer/>
      </div>
    )
}

export default Services;