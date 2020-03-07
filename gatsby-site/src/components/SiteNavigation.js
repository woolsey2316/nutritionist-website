import React from "react"
import { Link } from "gatsby"
import Style from '../scss/SiteNavigation.module.scss'
import SocialMediaQuilt from '../components/SocialMediaQuilt'

const SiteNavigation = () => (
  <nav>
    <div className={Style.container}>
      <h1 className={Style.websiteTitle}>ALISON KNIGHT</h1>
      <p className={Style.subtext}>Nutritionist</p>
    </div>
    <Link
      to="/"
      activeClassName="active"
      activeStyle={{ color: "#a8b26a" }}
      style={{
        fontSize:"15px",
        padding:"5px",
        fontStyle:"normal",
        textDecoration: 'none',
        width:"100px",
        textAlign: 'center'}}
      
    >
      Home
    </Link>
    <Link
      to="/AboutAllison/"
      activeStyle={{ color: "#a8b26a" }}
      style={{
        fontSize:"15px",
        padding:"5px",
        fontStyle:"normal",
        textDecoration: 'none',
        width:"100px",
        textAlign: 'center'}}
    >
      About Allison
    </Link>
    <Link
      to="/Blog/"
      activeStyle={{ color: "#a8b26a" }}
      style={{
        fontSize:"15px",
        padding:"5px",
        fontStyle:"normal",
        textDecoration: 'none',
        width:"100px",
        textAlign: 'center'}}
    >
      Blog
    </Link>
    <Link
      to="/contact/"
      activeStyle={{ color: "#a8b26a" }}
      style={{
        fontSize:"15px",
        padding:"5px",
        fontStyle:"normal",
        textDecoration: 'none',
        width:"100px",
        textAlign: 'center'}}
    >
      Contact
    </Link>
    <Link
      to="/plan/"
      activeStyle={{ color: "#a8b26a" }}
      style={{
        fontSize:"15px",
        padding:"5px",
        fontStyle:"normal",
        textDecoration: 'none',
        width:"100px",
        textAlign: 'center'}}
    >
      Plans
    </Link>
    <Link
      to="/services/"
      activeStyle={{ color: "#a8b26a" }}
      style={{
        fontSize:"15px",
        padding:"5px",
        fontStyle:"normal",
        textDecoration: 'none',
        width:"100px",
        textAlign: 'center'}}
    >
      Services
    </Link>
    <SocialMediaQuilt styleType="black"/>
  </nav>
)

export default SiteNavigation;