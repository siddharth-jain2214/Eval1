import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer className="footer111">
        <div className="footer-top111">
          <div className="footer-container111">
            <div className="footer-brand111">
              <div className="footer-logo111">
                <span>
                  <img src="images/service-1.png" alt="logo" width="100px" />
                </span>
                <span className="footer-logo-cap111">PropertyPulse</span>
              </div>
              <span className="footer-text111">
                Carefully selected variety of properties that suit you,
                <br /> forgetting all the difficulties of finding a residence.
                <br />
                <br />
              </span>
              <ul className="contact-list111">
                <li>
                  <a className="contact-link111">
                    <ion-icon name="location-outline" />
                    <span>15/A NYC,New York,USA</span>
                  </a>
                </li>
                <li>
                  <a className="contact-link111">
                    <ion-icon name="call-outline" />
                    <span>(123) 456-7890</span>
                  </a>
                </li>
                <li>
                  <a className="contact-link111">
                    <ion-icon name="mail-outline" />
                    <span>info@propertypulse.com</span>
                  </a>
                </li>
              </ul>
              <ul className="social-list111">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="social-link111"
                  >
                    <ion-icon name="logo-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.x.com/" className="social-link111">
                    <ion-icon name="logo-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="social-link111"
                  >
                    <ion-icon name="logo-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" className="social-link111">
                    <ion-icon name="logo-youtube" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-link-box111">
              <ul className="footer-list111">
                <li>
                  <p className="footer-list-title111">Company</p>
                </li>
                <li>
                  <a href="./index.html#about" className="footer-link111">
                    About
                  </a>
                </li>
                <li>
                  <a href="./index.html#blog" className="footer-link111">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="./index.html#service" className="footer-link111">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link111">
                    Locations Map
                  </a>
                </li>
                <li>
                  <a href="#accordionExample" className="footer-link111">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="./index.html#contact" className="footer-link111">
                    Contact us
                  </a>
                </li>
              </ul>
              <ul className="footer-list111">
                <li>
                  <p className="footer-list-title111">Services</p>
                </li>
                <li>
                  <a className="footer-link111">Order tracking</a>
                </li>
                <li>
                  <a className="footer-link111">Wish List</a>
                </li>
                <li>
                  <a href="#" className="footer-link111">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link111">
                    My account
                  </a>
                </li>
                <li>
                  <a className="footer-link111">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a className="footer-link111">Promotional Offers</a>
                </li>
              </ul>
              <ul className="footer-list111">
                <li>
                  <p className="footer-list-title111">Customer Care</p>
                </li>
                <li>
                  <a href="#" className="footer-link111">
                    Login
                  </a>
                </li>
                <li>
                  <a className="footer-link111">My account</a>
                </li>
                <li>
                  <a className="footer-link111">Wish List</a>
                </li>
                <li>
                  <a className="footer-link111">Order tracking</a>
                </li>
                <li>
                  <a href="#accordionExample" className="footer-link111">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="index.html#contact" className="footer-link111">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom111">
          <div className="bottom-container111">
            <p className="copyright111">
              © 2024&nbsp;PropertyPulse. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
