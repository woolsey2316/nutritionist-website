import React from "react"
import { Link } from "gatsby"
import Style from '../scss/SiteNavigation.module.scss'

const SiteNavigation = () => (
  <nav>
    <div className={Style.container}>
      <h1>ALISON KNIGHT</h1>
      <p>Nutritionist</p>
    </div>
    <Link
      to="/"
      activeClassName="active"
      activeStyle={{ color: "#a8b26a" }}
      style={{
        fontSize:"15px",
        padding:"1%",
        fontStyle:"normal",
        textDecoration: 'none',
        width:"100px"}}
      
    >
      Home
    </Link>
    <Link
      to="/AboutAllison/"
      activeStyle={{ color: "#a8b26a" }}
      style={{
        fontSize:"15px",
        padding:"1%",
        fontStyle:"normal",
        textDecoration: 'none',
        width:"100px"}}
    >
      About Allison
    </Link>
    <Link
      to="/Blog/"
      activeStyle={{ color: "#a8b26a" }}
      style={{
        fontSize:"15px",
        padding:"1%",
        fontStyle:"normal",
        textDecoration: 'none',
        width:"100px"}}
    >
      Blog
    </Link>
    <Link
      to="/contact/"
      activeStyle={{ color: "#a8b26a" }}
      style={{
        fontSize:"15px",
        padding:"1%",
        fontStyle:"normal",
        textDecoration: 'none',
        width:"100px"}}
    >
      Contact
    </Link>
    <Link
      to="/plan/"
      activeStyle={{ color: "#a8b26a" }}
      style={{
        fontSize:"15px",
        padding:"1%",
        fontStyle:"normal",
        textDecoration: 'none',
        width:"100px"}}
    >
      Plans
    </Link>
    <Link
      to="/services/"
      activeStyle={{ color: "#a8b26a" }}
      style={{
        fontSize:"15px",
        padding:"1%",
        fontStyle:"normal",
        textDecoration: 'none',
        width:"100px"}}
    >
      Services
    </Link>
  </nav>
)

export default SiteNavigation;