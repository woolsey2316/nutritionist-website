import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <picture>
      <div>
        <q>let food be thy medicine and medicine be thy food</q>
        <button type="button">Book a session</button>
      </div>
      <img src="landingpage.png"></img>
    </picture>
    <picture>
      <img src="person.png"></img>
    </picture>
    <h2>Meet Alisson</h2>
    <p>I'm a paragraph. Click here to add your own text and edit me. 
    It’s easy. Just click “Edit Text” or double click me to add your 
    own content and make changes to the font. I’m a great place for you 
    to tell a story and let your users know a little more about you.</p>
    <button>Blog</button>
    <h2>Recipes & Tips</h2>
    <picture>
      <img src ="../images/dish.png"></img>
    </picture>
    <h2>Family and Group Nutrition Counselling</h2>
    <picture>
      <img src="../images/fruit.png"></img>
    </picture>

    <Footer/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
