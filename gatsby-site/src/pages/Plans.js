import React from 'react';
import Footer from '../components/footer'
import Header from '../components/Header'
import SiteNavigation from '../components/SiteNavigation'
import Plan from '../components/Plan'
import Style from '../scss/plan.module.scss'

const Plans = () => {
    return (
      <div>
      <SiteNavigation/>
        <picture>
          <Header title="Choose Your Pricing Plan"/>
        </picture>
        <div className={Style.mainConatiner}>
          <Plan 
            planName="21 Day Cleanse" 
            cost="50" 
            description="A great way to cleanse your body and feel good"/>
          <Plan 
            planName="5 Week Plan" 
            cost="125" 
            description="A plan that will help you consume all the nutrients that you"/>
          <Plan 
            planName="10 Week Plan"  
            cost="225" 
            description="A structured plan to help you achieve your weight loss goals"/>
        </div>
        <Footer/>
      </div>
    )
}

export default Plans;