import React from "react";
import "./Hero.css";
const Hero = () => {
  const handleClick= ()=>{
    alert("we will get back to u soon....");
  }
  const handleApp=()=>{
    let shubham= prompt("Enter your free hours to get an appointment: ");
    alert('Thanks u for responding...,we will contact u soon at '+shubham);

  }
  return (
    <>
      <div className="hero">
        <div className="background">
          <img
            src="https://wallpaperaccess.com/full/1700233.jpg"
            alt=""
            className="hero_img"
            height={634}
            width={472}
          />
          <div className="hero_description">
            <h1>Garden City Asset</h1>
            <h2>$66,356</h2>
            <h2>1432 Willow Creek Road, San Diego, CA 92109</h2>
            <h2>
              <ion-icon name="bed-outline"></ion-icon>3 Bedroom |&nbsp;
              <ion-icon name="man-outline"></ion-icon>2 Bathroom |&nbsp;
              <ion-icon name="square-outline"></ion-icon>
              3450 Square Ft
            </h2>
            <h2>East facing</h2>
            <h2>24 hrs electricity & water</h2>
            <h2>Car parking and garage available</h2>
            <a href="#property_agent"><button className="property_btn">Buy Now</button></a>
          </div>
        </div>
      </div>
      <div className="property_agent" id="property_agent">
        <div className="properties-heading1">
          <span className="section-subtitle">Property Agent</span>
          <h2 className="section-title">Property Agent Details</h2>
        </div>
        <div className="agent_description">
          <h2>Name: Tushar Kalra</h2>
          <h2>Phone: 7209632587</h2>
          <h2>Experience: 5yrs+</h2>
          <h2>Deals: 50</h2>
          <h2>Agency: Sankalp Constructions</h2>
          <h2>Ratings: 4.5+</h2>
          <div className="call_btn">
          <button className="property_btn"  onClick={handleClick}>Make a Call</button>
          <button className="property_btn" onClick={handleApp}>Get an Appointment</button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Hero;
