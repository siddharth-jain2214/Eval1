import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <header className="header111" data-header="">
        <div className="overlay" data-overlay="" />
        <div className="header-top111">
          <div className="containerWithItems">
            <div className="header-top-heading111">
              <ul className="header-top-list111">
                <li>
                  <a
                    href="mailto:info@homeverse.com"
                    className="header-top-link111"
                  >
                    <ion-icon
                      name="mail-outline"
                      style={{
                        marginRight: "-13%",
                        position: "relative",
                        width: 100,
                        marginTop: "1%",
                        top: 15,
                      }}
                    />
                    <span className="header-info-top111">
                      info@propertypulse.com
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="header-top-link111">
                    <ion-icon
                      name="location-outline"
                      className="header-info-top111"
                      style={{ position: "relative", top: 20 }}
                    />
                    <address className="header-info-top111">
                      15/A NYC,New York,USA
                    </address>
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrapper111">
              <ul className="header-top-social-list111">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="header-top-social-link111"
                    style={{ marginRight: 15, position: "relative", top: 10 }}
                  >
                    <ion-icon name="logo-facebook" style={{ color: "white" }} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    className="header-top-social-link111"
                    style={{ marginRight: 15, position: "relative", top: 10 }}
                  >
                    <ion-icon name="logo-twitter" style={{ color: "white" }} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="header-top-social-link111"
                    style={{ marginRight: 15, position: "relative", top: 10 }}
                  >
                    <ion-icon
                      name="logo-instagram"
                      style={{ color: "white" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.pinterest.com/"
                    target="_blank"
                    className="header-top-social-link"
                    style={{ marginRight: 15, position: "relative", top: 10 }}
                  >
                    <ion-icon
                      name="logo-pinterest"
                      style={{ color: "white" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-rest111">
          <div className="header_logo111">
            <span>
              <img src="/images/service-1.png" alt="logo" width="100px" />
            </span>
            <span
              className="header_logo_cap111"
              style={{ position: "relative", top: 3 }}
            >
              PropertyPulse
            </span>
          </div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#properties1">Property</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul>
            <li>
              <button className="header_btn111">LOGIN</button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
