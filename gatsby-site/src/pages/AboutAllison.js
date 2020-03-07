import React from 'react';
import Footer from '../components/footer';
import Person2 from '../components/Person2';
import SiteNavigation from '../components/SiteNavigation'
import Header from '../components/header'
import style from "../scss/textbox.module.scss";

const AboutAllison = () => {
    return (
        <div>
        <SiteNavigation/>
          <Header title="About Alison"/>
          <div className={style.mainContainer}>
            <Person2/>
            <div className={style.storyTextBox}>
              <h2 className={style.title}>My Story</h2>
              <p className={style.description}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or 
              double click me to add your own content and make changes to the font. Feel free to drag and drop me 
              anywhere you like on your page. I’m a great place for you to tell a story and let your users know a 
              little more about you.
    
              This is a great space to write long text about your company and your services. You can use this 
              space to go into a little more detail about your company. Talk about your team and what services 
              you provide. Tell your visitors the story of how you came up with the idea for your business and 
              what makes you different from your 
              competitors. Make your company stand out and show your visitors who you are.</p>
            </div>
          </div>
          <Footer/>
        </div>
    )
}

export default AboutAllison;