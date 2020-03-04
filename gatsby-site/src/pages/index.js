import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Dish from "../components/Dish"
import Footer from "../components/footer"
import Person from "../components/Person"
import Fruit from "../components/Fruit"
import LandingPage from "../components/landingpage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <picture>
      <div>
        <q>let food be thy medicine and medicine be thy food</q>
        <button type="button">Book a session</button>
      </div>
      <LandingPage/>
    </picture>
    <picture>
      <Person/>
    </picture>
    <h2>Meet Alisson</h2>
    <p>I'm a paragraph. Click here to add your own text and edit me. 
    It’s easy. Just click “Edit Text” or double click me to add your 
    own content and make changes to the font. I’m a great place for you 
    to tell a story and let your users know a little more about you.</p>
    <button>Blog</button>
    <h2>Recipes & Tips</h2>
    <picture>
      <Dish/>
    </picture>
    <h2>Family and Group Nutrition Counselling</h2>
    <picture>
      <Fruit/>
    </picture>

    <Footer/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
