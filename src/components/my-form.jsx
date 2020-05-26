import React from "react";

import CustomButton from './custom-button';

import '../assets/stylesheets/contact-form.scss';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mwkrlodv"
        method="POST"
      >
        <label>Email:</label>
        <input className="form-input" type="email" name="email" placeholder="your-email@mail.com" />
        <label>Message:</label>
        <input className="text-input" type="text" name="message" placeholder="your message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <CustomButton>Send</CustomButton>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default MyForm;