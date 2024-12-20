import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setFormData((prevData) => ({
      ...prevData, 
      name: event.target.value,
    }));
  };

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setFormData((prevData) => ({
      ...prevData, 
      email: event.target.value,
    }));
  };

  const handleMessageChange = (event) => {
    console.log(event.target.value);
    setFormData((prevData) => ({
      ...prevData, 
      message: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted....');
    alert('We will contact you soon!\nThank you for Visiting Us');
    console.log(formData.name);
    console.log(formData.email);
    console.log(formData.message);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <span className="section-subtitle">Contact Us</span>
        <p className="section-title">Reach out to us.</p>
      </div>
      <div className="row" style={{ marginLeft: 70 }}>
        <div className="contact-details" style={{ marginBottom: 50 }}>
          <p>
            <i className="fas fa-map-marker-alt" /> 15/A NYC, New York, USA
          </p>
          <p>
            <i className="fas fa-envelope" />
            &nbsp;info@propertypulse.com
          </p>
          <p>
            <i className="fas fa-phone" /> (123) 456-7890
          </p>
          <p>
            <i className="fas fa-clock" /> Monday - Friday: 9:00 AM - 5:00 PM
          </p>
          <p>
            <i className="fas fa-clock" /> Saturday: 10:00 AM - 3:00 PM
          </p>
          <p>
            <i className="fas fa-clock" /> Sunday: Closed
          </p>
          <p>
            <i className="fas fa-globe" /> www.propertypulse.com
          </p>
        </div>
        <div className="col form">
          <form className="form form1234" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name*"
              required
              id="name"
              value={formData.name}
              onChange={handleNameChange}
            />
            <input
              type="email"
              placeholder="Email*"
              required
              id="email"
              value={formData.email}
              onChange={handleEmailChange}
            />
            <textarea
              placeholder="Write your message here.....*"
              required
              id="message"
              value={formData.message}
              onChange={handleMessageChange}
            />
            <br />
            <br />
            <button id="submit" type="submit" className="btn contact_btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

