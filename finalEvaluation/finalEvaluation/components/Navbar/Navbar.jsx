import React from 'react';
import './Header.css'; // Import the CSS for the header
const Header = () => {
  const login_page=()=>{
    window.location.href="./public/login.html";
  }
  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>

      <div className="header-top">
        <div className="container">
          <div className="header-top-heading">
            <ul className="header-top-list">
              <li>
                <a href="mailto:info@propertypulse.com" className="header-top-link">
                  {/* <IonIcon icon={mailOutline} /> */}
                  <span>info@propertypulse.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-link">
                  {/* <IonIcon icon={locationOutline} /> */}
                  <address>15/A NYC, New York, USA</address>
                </a>
              </li>
            </ul>
          </div>
          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="header-top-social-link">
                  {/* <IonIcon icon={logoFacebook} /> */}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="header-top-social-link">
                  {/* <IonIcon icon={logoTwitter} /> */}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="header-top-social-link">
                  {/* <IonIcon icon={logoInstagram} /> */}
                </a>
              </li>
              <li>
                <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer" className="header-top-social-link">
                  {/* <IonIcon icon={logoPinterest} /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-rest">
        <div className="header_logo">
          <span><img src="images/service-1.png" alt="logo" width="100px" /></span>
          <span className="header_logo_cap">PropertyPulse</span>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#properties1">Property</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul>
          <li><button onClick={login_page} className="header_btn">LOGIN</button></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;