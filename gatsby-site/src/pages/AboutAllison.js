import React from 'react';
import Footer from '../components/footer';
import Person2 from '../components/Person2';
import SiteNavigation from '../components/SiteNavigation'

const AboutAllison = () => {
    return (
        <div>
        <SiteNavigation/>
          <header title="About Alison">
            <Person2/>
            <h1>About Allison</h1>
          </header>
          <Person2/>
          <h3>My Story</h3>
          <p>I'm a paragraph. Click here to add your own text and edit me. 
          It’s easy. Just click “Edit Text” or double click me to add your 
          own content and make changes to the font. Feel free to drag and 
          drop me anywhere you like on your page. I’m a great place for you to 
          tell a story and let your users know a little more about you. </p>
          <h4>Specialties</h4>
          <p>Digestive Wellness</p>
          <p>Food allergies and Intolerance</p>
          <p>Healthy cooking / meal planning</p>
          <p>Diet and Detoxing</p>
          <p>Elimination diets</p>
          <Footer/>
        </div>
    )
}

export default AboutAllison;