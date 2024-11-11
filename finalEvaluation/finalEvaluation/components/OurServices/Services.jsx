import React from 'react';
import img1 from '../../src/assets/images/service-1.png'
import img2 from '../../src/assets/images/service-2.png'
import img3 from '../../src/assets/images/service-3.png'
const Services = () => {
  return (
    <section className="service" id="service">
  <div className="service-container">
    <div className="service-heading">
      <span className="section-subtitle service-subtitle">Our Services</span>
      <h2 className="h2 section-title" style={{ marginTop: 20 }}>
        Our Main Focus
      </h2>
    </div>
    <ul className="service-list">
      <li>
        <div className="service-card">
          <div className="card-icon">
            <img src={img1} alt="Service icon" />
          </div>
          <h3 className="h3 card-title">
            <a href="#">Buy a home</a>
          </h3>
          <p className="card-text">
            Explore an extensive portfolio of homes tailored to your unique
            preferences and needs.we have options to match every lifestyle and
            budget and get to you a house.
          </p>
          <a href="#properties1" className="card-link">
            <span>Find A Home</span>
            <ion-icon name="arrow-forward-outline" />
          </a>
        </div>
      </li>
      <li>
        <div className="service-card">
          <div className="card-icon">
            <img src={img2} alt="Service icon" />
          </div>
          <h3 className="h3 card-title">
            <a href="#">Rent a home</a>
          </h3>
          <p className="card-text">
            Browse through a diverse selection of rental properties, offering
            everything from cozy apartments to spacious houses. Find a home that
            fits your lifestyle and budget with ease.
          </p>
          <a href="#" className="card-link">
            <span>Find A Home</span>
            <ion-icon name="arrow-forward-outline" />
          </a>
        </div>
      </li>
      <li>
        <div className="service-card">
          <div className="card-icon">
            <img src={img3} alt="Service icon" />
          </div>
          <h3 className="h3 card-title">
            <a href="#">Sell a home</a>
          </h3>
          <p className="card-text">
            Unlock the true value of your home with our tailored approach,
            designed to attract serious buyers and achieve a sale that meets
            your financial goals.
          </p>
          <a href="#" className="card-link">
            <span>Find A Home</span>
            <ion-icon name="arrow-forward-outline" />
          </a>
        </div>
      </li>
    </ul>
  </div>
</section>


  );
};

export default Services;
