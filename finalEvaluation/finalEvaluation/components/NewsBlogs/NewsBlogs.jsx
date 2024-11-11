import React from 'react'
import img1 from '../../src/assets/images/blog-1.png'
import img2 from '../../src/assets/images/blog-2.jpg'
import img3 from '../../src/assets/images/blog-3.jpg'
const NewsBlogs = () => {
  return (
     <section className="blog" id="blog">
  <div className="news-container">
    <div className="news-heading">
      <span className="section-subtitle">News &amp; Blogs</span>
      <h2 className="h2 section-title">Latest News Feeds</h2>
    </div>
    <ul className="blog-list">
      <li>
        <div className="blog-card">
          <figure className="card-banner">
            <img
              src={img1}
              alt="The Most Inspiring Interior Design Of 2021"
              width="100%"
            />
          </figure>
          <div className="blog-content">
            <div className="blog-content-top">
              <ul className="card-meta-list">
                <li>
                  <a href="#" className="card-meta-link">
                    <ion-icon name="person" />
                    <span>by: Admin</span>
                  </a>
                </li>
                <li style={{ marginLeft: 30 }}>
                  <a href="#" className="card-meta-link">
                    <ion-icon name="pricetags" />
                    <span>Interior</span>
                  </a>
                </li>
              </ul>
              <h3 className="blog-title">
                <a href="#">The Most Inspiring Interior Design Of 2021</a>
              </h3>
            </div>
            <div className="blog-content-bottom">
              <div className="publish-date">
                <ion-icon name="calendar" />
                <time dateTime="2022-27-04">Apr 27, 2022</time>
              </div>
              <a href="#" className="read-more-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="blog-card">
          <figure className="card-banner">
            <img
              src={img2}
              alt="Recent Commercial Real Estate Transactions"
              width="100%"
            />
          </figure>
          <div className="blog-content">
            <div className="blog-content-top">
              <ul className="card-meta-list">
                <li>
                  <a href="#" className="card-meta-link">
                    <ion-icon name="person" />
                    <span>by: Admin</span>
                  </a>
                </li>
                <li style={{ marginLeft: 30 }}>
                  <a href="#" className="card-meta-link">
                    <ion-icon name="pricetags" />
                    <span>Estate</span>
                  </a>
                </li>
              </ul>
              <h3 className="h3 blog-title">
                <a href="#">Recent Commercial Real Estate Transactions</a>
              </h3>
            </div>
            <div className="blog-content-bottom">
              <div className="publish-date">
                <ion-icon name="calendar" />
                <time dateTime="2022-27-04">Apr 27, 2022</time>
              </div>
              <a href="#" className="read-more-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="blog-card">
          <figure className="card-banner">
            <img
              src={img3}
              alt="Renovating a Living Room? Experts Share Their Secrets"
              width="100%"
            />
          </figure>
          <div className="blog-content">
            <div className="blog-content-top">
              <ul className="card-meta-list">
                <li>
                  <a href="#" className="card-meta-link">
                    <ion-icon name="person" />
                    <span>by: Admin</span>
                  </a>
                </li>
                <li style={{ marginLeft: 30 }}>
                  <a href="#" className="card-meta-link">
                    <ion-icon name="pricetags" />
                    <span>Room</span>
                  </a>
                </li>
              </ul>
              <h3 className="h3 blog-title">
                <a href="#">
                  Renovating a Living Room? Experts Share Their Secrets
                </a>
              </h3>
            </div>
            <div className="blog-content-bottom">
              <div className="publish-date">
                <ion-icon name="calendar" />
                <time dateTime="2022-27-04">Apr 27, 2022</time>
              </div>
              <a href="#" className="read-more-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>


  )
}

export default NewsBlogs
