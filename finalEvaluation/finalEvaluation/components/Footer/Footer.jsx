import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-top">
    <div className="footer-container">
      <div className="footer-brand">
        <div className="footer-logo">
          <span>
            <img src="images/service-1.png" alt="logo" width="100px" />
          </span>
          <span className="footer-logo-cap">PropertyPulse</span>
        </div>
        <span className="footer-text">
          Carefully selected variety of properties that suit you,
          <br /> forgetting all the difficulties of finding a residence.
          <br />
          <br />
        </span>
        <ul className="contact-list">
          <li>
            <a className="contact-link">
              <ion-icon name="location-outline" />
              <span>15/A NYC,New York,USA</span>
            </a>
          </li>
          <li>
            <a className="contact-link">
              <ion-icon name="call-outline" />
              <span>(123) 456-7890</span>
            </a>
          </li>
          <li>
            <a className="contact-link">
              <ion-icon name="mail-outline" />
              <span>info@propertypulse.com</span>
            </a>
          </li>
        </ul>
        <ul className="social-list">
          <li>
            <a
              href="https://www.facebook.com/"
              className="social-link"
              target="_blank"
            >
              <ion-icon name="logo-facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.x.com/"
              className="social-link"
              target="_blank"
            >
              <ion-icon name="logo-twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              className="social-link"
              target="_blank"
            >
              <ion-icon name="logo-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              className="social-link"
              target="_blank"
            >
              <ion-icon name="logo-youtube" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-link-box">
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Company</p>
          </li>
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#blog" className="footer-link">
              Blog
            </a>
          </li>
          <li>
            <a href="#service" className="footer-link">
              All Products
            </a>
          </li>
          <li>
            <a className="footer-link">Locations Map</a>
          </li>
          <li>
            <a href="./enquiry.html" className="footer-link">
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" className="footer-link">
              Contact us
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Services</p>
          </li>
          <li>
            <a className="footer-link">Order tracking</a>
          </li>
          <li>
            <a className="footer-link">Wish List</a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Login
            </a>
          </li>
          <li>
            <a className="footer-link">My account</a>
          </li>
          <li>
            <a className="footer-link">Terms &amp; Conditions</a>
          </li>
          <li>
            <a className="footer-link">Promotional Offers</a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Customer Care</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              My account
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Wish List
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Order tracking
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="bottom-container">
      <p className="copyright">
        © 2024&nbsp;PropertyPulse. All Rights Reserved
      </p>
    </div>
  </div>
</footer>

  )
}

export default Footer
