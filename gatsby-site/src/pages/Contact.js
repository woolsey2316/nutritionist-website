import React from 'react';
import contactForm from './contactForm';
import Wood from './components/Wood';

const Contact = () => {
    return (
        <div>
          <picture>
            <Wood/>
          </picture>
          <p>If you need more information, have questions, or would like to 
          offer a suggestion, please be in touch. 
          You can contact me via phone, email or by filling out the form.</p>
          <p>
          I’ll get back to you as soon as possible. </p>
          <p>Tel: 123-456-7890

          info@mysite.com
          
          500 Terry Francois Street
          
          San Francisco, CA 94158</p>
          <div>
            <contactForm/>
            <button type="button"></button>
          </div>
        </div>
    )
}