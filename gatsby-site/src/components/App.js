import React from 'react'

import SEO from '../components/seo'
import Dish from '../components/Dish'
import Footer from '../components/Footer'
import Person from '../components/Person'
import Fruit from '../components/Fruit'
import LandingPage from '../components/LandingPage'
import SiteNavigation from '../components/SiteNavigation'
import AlisonTextBox from '../components/AlisonTextBox'
import BlogTextBox from '../components/BlogTextBox'
import ServicesTextBox from '../components/BlogTextBox'
import WebsiteStyle from '../scss/website.module.scss'
import style from '../scss/person.module.scss'
import buttonStyle from '../scss/button.module.scss'

export default () => {
  return (
    <div className={WebsiteStyle.mainContainer}>
      <SEO title="Home" />
      <SiteNavigation />
      <LandingPage />
      <div className={style.meetAlison}>
          <Person />
        <AlisonTextBox title="Meet Alison" />
        
        </div>
        <div className={style.break} />
        <div className={style.blogSection}>
          <div className={style.ghostContainer}>
            <button className={buttonStyle.largeButton}>Blog</button>
          </div>
          <BlogTextBox title="Recipes & Tips" />
        </div>
        <Dish />
      <div
        style={{
          display: "flex",
          /* width: 100vw; */
          marginLeft: "20%"
        }}
      >
        <button className={buttonStyle.largeButton}>Services</button>
        <ServicesTextBox title="Family & Group Nutrition Counselling" />
      </div>
        <Fruit />
      <Footer />
    </div>
  )
}
