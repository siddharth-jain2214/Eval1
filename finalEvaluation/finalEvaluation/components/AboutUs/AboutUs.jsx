import React from 'react';
import img1 from '../../src/assets/images/value.jpg';

const About = () => {
  return (
    <section className="about" id="about">
  <div className="about-container">
    <figure className="about-banner">
      <img
        src={img1}
        alt="House interior"
        style={{
          width: 472,
          height: 634,
          borderRadius: "236px 236px 12px 12px",
          bottom: "-2.5rem",
          border: "5px solid black"
        }}
      />
    </figure>
    <div className="about-content">
      <span className="section-subtitle">About Us</span>
      <h2 className="h2 section-title" style={{ marginTop: 20 }}>
        The Leading Real Estate
        <br /> Rental Marketplace.
      </h2>
      <p className="about-text">
        Over 39,000 people work for us in more than 70 countries all over the
        <br /> This breadth of global coverage, combined with specialist
        services
      </p>
      <ul
        className="about-list"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <li className="about-item">
            <div className="about-item-icon">
              <ion-icon name="home-outline" />
            </div>
            <p className="about-item-text">Smart Home Design</p>
          </li>
          <li className="about-item">
            <div className="about-item-icon">
              <ion-icon name="leaf-outline" />
            </div>
            <p className="about-item-text">Beautiful Scene Around</p>
          </li>
        </div>
        <div>
          <li className="about-item">
            <div className="about-item-icon">
              <ion-icon name="wine-outline" />
            </div>
            <p className="about-item-text">Exceptional Lifestyle</p>
          </li>
          <li className="about-item">
            <div className="about-item-icon">
              <ion-icon name="shield-checkmark-outline" />
            </div>
            <p className="about-item-text">Complete 24/7 Security</p>
          </li>
        </div>
      </ul>
      <p className="callout">
        We are always ready to help by providing the best service.
        <br /> We believe a good place to live can make your life better.
      </p>
      <div
        className="about-btn"
        style={{ borderRadius: "20px 20px 20px 20px" }}
      >
        <a href="#service">Our Services</a>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;
