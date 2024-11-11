import React from 'react'

const ContactUs = () => {
  return (
    <section className="contact" id="contact">
  <div className="contact-heading">
    <span className="section-subtitle">Contact Us</span>
    <p className="section-title">Reach out to us.</p>
  </div>
  <div className="row" style={{ marginLeft: 70 }}>
    <div className="contact-details" style={{ marginBottom: 50 }}>
      <p>
        <i className="fas fa-map-marker-alt" /> 15/A NYC,New York,USA
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
      <form className="form form1234" action="./nextpage">
        <input type="text" placeholder="Name*" required="" id="input1" />
        <input type="email" placeholder="Email*" required="" id="input2" />
        <textarea
          placeholder="Write your message here.....*"
          required=""
          id="input3"
          defaultValue={""}
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

  )
}

export default ContactUs
