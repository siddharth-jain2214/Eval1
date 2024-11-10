import React from 'react'

const HeaderTop = () => {
  return (
    <div>
      <div className="container">
        <div className="header-top-heading">
          <ul className="header-top-list">
            <li>
              <a href="mailto:info@homeverse.com" className="header-top-link">
                <ion-icon name="mail-outline"
                  style="margin-right: -13%; position: relative; width: 100px; margin-top: 1%;"></ion-icon>

                <span>info@propertypulse.com</span>
              </a>
            </li>

            <li>
              <a href="#" className="header-top-link">
                <ion-icon name="location-outline" ></ion-icon>
                <address>15/A NYC,New York,USA</address>
              </a>
            </li>
          </ul>
        </div>
        <div className="wrapper">
          <ul className="header-top-social-list">
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="header-top-social-link"
                style="margin-right: 15px;">
                <ion-icon name="logo-facebook" style="color: white;"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://x.com/" target="_blank" className="header-top-social-link" style="margin-right: 15px;">
                <ion-icon name="logo-twitter" style="color: white;"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/" target="_blank" className="header-top-social-link"
                style="margin-right: 15px;">
                <ion-icon name="logo-instagram" style="color: white;"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://in.pinterest.com/" target="_blank" className="header-top-social-link"
                style="margin-right: 15px;">
                <ion-icon name="logo-pinterest" style="color: white;"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
