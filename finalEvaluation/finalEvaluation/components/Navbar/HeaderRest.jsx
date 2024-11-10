import React from 'react'

const HeaderRest = () => {
  return (
      <div className="header-rest">
      <div className="header_logo">
        <span><img src="images/service-1.png" alt="logo" width="100px"></img></span>
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
        <li><a href="./login.html"><button className="header_btn">LOGIN</button></a></li>
      </ul>
    </div>
  )
}

export default HeaderRest
