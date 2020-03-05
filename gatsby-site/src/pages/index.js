import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Dish from "../components/Dish"
import Footer from "../components/footer"
import Person from "../components/Person"
import Fruit from "../components/Fruit"
import LandingPage from "../components/landingpage"
import SiteNavigation from "../components/SiteNavigation"
import AlisonTextBox from "../components/AlisonTextBox"
import BlogTextBox from "../components/BlogTextBox"
import ServicesTextBox from "../components/BlogTextBox"
import style from "../scss/person.module.scss"
import buttonStyle from "../scss/button.module.scss"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <SiteNavigation/>
    <LandingPage/>
    <div className={style.person}>
      <div className={style.meetAlison}>
        <picture>
          <Person/>
        </picture>
        <AlisonTextBox title="Meet Alison"/>
      </div>
      <div className={style.break}/>
      <div style={{display: 'flex',
        width: '616px',
        marginRight: '370px',
        float: 'right'}}>
        <button className={buttonStyle.largeButton}>Blog</button>
        <BlogTextBox title="Recipes & Tips"/>
      </div>
    <picture>
      <Dish/>
    </picture>
    <div style={{    
      display: 'flex',
      /* width: 100vw; */
      marginRight: '240px',
      float: 'right'}}>
        <button className={buttonStyle.largeButton}>Services</button>
        <ServicesTextBox title="Family & Group Nutrition Counselling"/>
      </div>
    <picture>
      <Fruit/>
    </picture>
    </div>
    <Footer/>
  </div>
)

export default IndexPage
