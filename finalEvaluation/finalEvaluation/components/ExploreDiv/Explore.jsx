import React from 'react'

const Explore = () => {
  return (
    <section className="cta">
  <div className="cta-container">
    <div className="cta-card">
      <div className="card-content">
        <h2 className="card-title">Looking for a dream home?</h2>
        <p className="card-text" style={{ color: "white" }}>
          We can help you realize your dream of a new home
        </p>
      </div>
      <a href="#home">
        <button
          className="btn cta-btn"
          style={{ borderRadius: "20px 20px 20px 20px" }}
        >
          <span className="cta_explore_btn">Explore Properties</span>
          <ion-icon name="arrow-forward-outline" />
        </button>
      </a>
    </div>
  </div>
</section>

  )
}

export default Explore
