import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import SiteNavigation from '../components/SiteNavigation'
import Style from '../scss/textbox.module.scss';
import GoogleMap from '../components/GoogleMap';

const Contact = () =>  {
      return (
        <div>
        <SiteNavigation/>
          <picture>
            <Header title="Contact"/>
          </picture>
          <div className={Style.mainContainer}>
          <div className={Style.contactContainer}>
            <div className={Style.contactTextBox}>
              <p className={Style.alisonDescription}>If you need more information, have questions, or would like to 
              offer a suggestion, please be in touch. 
              You can contact me via phone, email or by filling out the form.</p>
              <p className={Style.alisonDescription}>
              <br/>
              I’ll get back to you as soon as possible. </p>
              <br/>
              <p className={Style.alisonDescription}>Tel: 123-456-7890</p>
  
              <p className={Style.alisonDescription}>info@mysite.com</p>
              
              <p className={Style.alisonDescription}>500 Terry Francois Street</p>
              
              <p className={Style.alisonDescription}>San Francisco, CA 94158</p>
              </div>
            <div>
            <ContactForm/>
          </div>
          
          </div>
          <GoogleMap/>
          </div>
        </div>
      )
}

export default Contact