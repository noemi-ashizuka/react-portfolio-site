import React, { Component } from 'react';

import MyForm from './my-form';

import '../assets/stylesheets/contact-page.scss';

class Contact extends Component {
  render() {
    return(
      <div>
        <div className="page-title">
          <h1>Contact Me</h1>
        </div>
        <div className="social">

        </div>
        <MyForm />
      </div>
    )
  }
}

export default Contact;