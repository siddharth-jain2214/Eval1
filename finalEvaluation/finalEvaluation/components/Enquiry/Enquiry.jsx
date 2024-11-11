import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">
            <ion-icon name="home"></ion-icon>
            <span>Real Estate Agency</span>
          </p>
          <h2 className="h1 hero-title">Elevate Your Lifestyle<br /> with Exquisite Homes</h2>
          <p className="hero-text">
            Carefully selected variety of properties that suit you,<br /> forgetting all the difficulties of finding a residence.
          </p>
          <a href="./enquiry.html"><button className="btn">Make An Enquiry</button></a>
        </div>
        <figure className="hero-banner">
          {/* <img src="images/home.jpg" alt="Hero">  </img> */}
        </figure>
      </div>
    </section>
  );
};

export default Hero;
