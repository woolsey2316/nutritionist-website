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
      <div style={{display:'flex',margin:'372px',width:'100vw',marginLeft:'357px'}}>
        <button className={buttonStyle.largeButton}>Blog</button>
        <BlogTextBox title="Recipes & Tips"/>
      </div>
    </div>
    
    <picture>
      <Dish/>
    </picture>
    <h2>Family and Group Nutrition Counselling</h2>
    <picture>
      <Fruit/>
    </picture>

    <Footer/>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
