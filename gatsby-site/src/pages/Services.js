import React from "react"
import ServicesContainer from "../containers/ServicesContainer"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SiteNavigation from "../components/SiteNavigation"
import SEO from "../components/seo"

const Services = () => {
  return (
    <div>
      <SEO title="services" />
      <SiteNavigation />
      <Header title="Services" />
      <ServicesContainer />
      <Footer />
    </div>
  )
}

export default Services
