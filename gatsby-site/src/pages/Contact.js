import React from "react"
import ContactForm from "../components/ContactForm"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SiteNavigation from "../components/SiteNavigation"
import Style from "../scss/textbox.module.scss"
import style from "../scss/contact-form.module.scss"
import GoogleMap from "../components/GoogleMap"

const Contact = () => {
  return (
    <div>
      <SiteNavigation />
      <picture>
        <Header title="Contact" />
      </picture>
      <div className={Style.mainContainer}>
        <div className={Style.contactContainer}>
          <div className={Style.contactTextBox}>
            <p className={style.contactDescription}>
              If you need more information, have questions, or would like to
              offer a suggestion, please be in touch. You can contact me via
              phone, email or by filling out the form.
            </p>
            <p className={style.fancyText}>
              <br />
              I’ll get back to you as soon as possible.{" "}
            </p>
            <br />
            <p className={style.contactDescription}>
            Tel: 123-456-7890
            <br/>
            info@mysite.com
            <br/>
            500 Terry Francois Street
            <br/>
            San Francisco, CA 94158 </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
        <GoogleMap />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
