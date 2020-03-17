import React from "react"
import NavLink from "../components/NavLink"
import Style from '../scss/SiteNavigation.module.scss'
import SocialMediaQuilt from '../components/SocialMediaQuilt'

const SiteNavigation = () => (
  <nav>
    <div className={Style.container}>
      <h1 className={Style.websiteTitle}>ALISON KNIGHT</h1>
      <p className={Style.subtext}>Nutritionist</p>
    </div>
    <NavLink name="Home"/>
    <NavLink name="About Alison"/>
    <NavLink name="Contact"/>
    <NavLink name="Plans"/>
    <NavLink name="Services"/>
    <SocialMediaQuilt styleType="black"/>
  </nav>
)

export default SiteNavigation;