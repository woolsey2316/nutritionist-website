import React from "react"
import axios from "axios"
import Style from "../scss/contact-form.module.scss"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
    }
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" })
  }

  render() {
    return (
      <div className={Style.formContainer}>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className={Style.formGroup}>
            <input
              type="text"
              className={Style.input}
              value={this.state.name}
              placeholder="Name"
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className={Style.formGroup}>
            <input
              type="email"
              className={Style.input}
              aria-describedby="emailHelp"
              value={this.state.email}
              placeholder="Email"
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className={Style.formGroup}>
            <textarea
              className={Style.input}
              rows="7"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
              placeholder="Message"
              style={{ resize: "none" }}
            />
          </div>
          <div className={Style.miniContainer}>
            <button type="submit" className={Style.button}>
              Submit
            </button>
            <p className={Style.subtext}>Thanks for submitting!</p>
          </div>
        </form>
      </div>
    )
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then(response => {
      if (response.data.status === "success") {
        alert("Message Sent.")
        this.resetForm()
      } else if (response.data.status === "fail") {
        alert("Message failed to send.")
      }
    })
  }
}

export default ContactForm
