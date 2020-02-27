import React from 'react';

const Contact = () => {
    return (
        <div>
          <picture>
            <img src = "..images/wood.png"></img>
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
          <div clasName={StyleMedia.conatctForm}>
            <form></form>
            <button type="button"></button>
          </div>
        </div>
    )
}