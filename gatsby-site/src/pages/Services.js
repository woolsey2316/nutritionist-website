import React from 'react';
import Consulting from '../components/consulting'
import Footer from '../components/footer.js'

const Services = () => {
    return (
      <div>
        <header>
          <Wood/>
          <h3>Services</h3>
        </header>
        <Consulting time="1hr" cost="$100" heading ="Personal Nutrition Counselling"/>
        <Consulting time="1.5hr" cost="$100" heading ="Family Nutrition Counselling"/>
        <Consulting time="1hr" cost="$70" heading ="Sustainable Weight Management"/>
        <Consulting time="1hr" cost="$80" heading ="Food Sensitivities"/>
        <Consulting time="1hr" cost="$200" heading ="Initial Nutrition Asesment"/>
        <Consulting time="1hr" cost="$50" heading ="Improving Lifestyle Workshop"/>
        <Footer/>
      </div>

    )
}

export default Services;