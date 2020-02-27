import React from 'react';
import Footer from '../components/footer';

const AboutAllison = () => {
    return (
        <div>
          <header src="../images/wood.png">
            <h1>About Allison</h1>
          </header>
          <img src="../images/person2.png"></img>
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