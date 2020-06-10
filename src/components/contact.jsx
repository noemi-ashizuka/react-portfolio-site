import React from 'react';

import MyForm from './my-form';

import '../assets/stylesheets/contact-page.scss';

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <div className="page-container">
      <div className="page-title title-center">
        <h1>Contact Me</h1>
      </div>
      
      <div className="content-image">
        <div className="image-round">
          <img src="https://res.cloudinary.com/dtewjoisz/image/upload/v1585367280/kQqvsX2WRpdnn2MBhUkMuvdk.jpg" alt="site author"></img>
        </div>
        <div className="socials">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/noemi-ashizuka" className="contact-link"><i className="fab fa-github"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/salvina-noemi-calanducci/" className="contact-link"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      
      <MyForm />
    </div>
  )
}

export default Contact;