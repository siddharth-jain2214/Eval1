import React from 'react'
import img1 from '../../src/assets/images/property-1.jpg'
import img2 from '../../src/assets/images/property-2.jpg'
import img3 from '../../src/assets/images/property-3.jpg'
import img4 from '../../src/assets/images/popular1.jpg'
import img5 from '../../src/assets/images/popular2.jpg'
import img6 from '../../src/assets/images/popular3.jpg'
const Properties = () => {
  return (
    <section className="properties1" id="properties1">
  <div className="properties-container1">
    <div className="properties-heading1">
      <span className="section-subtitle">Properties</span>
      <h2 className="section-title">Featured Listings</h2>
    </div>
    <div className="properties_cards">
      <div className="properties_cards1">
        <div className="card property-card" style={{ width: 400, height: 530 }}>
          <img
            src={img1}
            className="card-img-top"
            alt="property1"
            height="300px"
            width="400px"
          />
          <div className="card-body">
            <h2 className="popular__price">
              <span id="price-0" />
            </h2>
            <h3 className="popular__title" id="prop_name-0" />
            <ul className="card-list">
              <li className="list-group-item">
                <ion-icon name="bed-outline" />
                3 Bedroom |&nbsp;
                <ion-icon name="man-outline" />
                2 Bathroom |&nbsp;
                <ion-icon name="square-outline" />
                3450 Square Ft
              </li>
            </ul>
            <p className="popular__description" id="address-0" />
            <button className="btn property_btn1">View Details</button>
          </div>
        </div>
        <div className="card property-card" style={{ width: 400, height: 530 }}>
          <img
            src={img2}
            className="card-img-top"
            alt="property2"
            height="300px"
            width="400px"
          />
          <div className="card-body">
            <h2 className="popular__price">
              <span id="price-1" />
            </h2>
            <h3 className="popular__title" id="prop_name-1" />
            <ul className="card-list">
              <li className="list-group-item">
                <ion-icon name="bed-outline" />
                5 Bedroom |&nbsp;
                <ion-icon name="man-outline" />
                3 Bathroom |&nbsp;
                <ion-icon name="square-outline" />
                3150 Square Ft
              </li>
            </ul>
            <p className="popular__description" id="address-1" />
            <button className="btn property_btn1">View Details</button>
          </div>
        </div>
        <div className="card property-card" style={{ width: 400, height: 530 }}>
          <img
            src={img3}
            className="card-img-top"
            alt="property3"
            height="300px"
            width="400px"
          />
          <div className="card-body">
            <h2 className="popular__price">
              <span id="price-2" />
            </h2>
            <h3 className="popular__title" id="prop_name-2" />
            <ul className="card-list">
              <li className="list-group-item">
                <ion-icon name="bed-outline" />
                4 Bedroom |&nbsp;
                <ion-icon name="man-outline" />
                3 Bathroom |&nbsp;
                <ion-icon name="square-outline" />
                3200 Square Ft
              </li>
            </ul>
            <p className="popular__description" id="address-2" />
            <button className="btn property_btn1">View Details</button>
          </div>
        </div>
      </div>
      <div className="properties_cards2">
        <div className="card property-card" style={{ width: 400, height: 530 }}>
          <img
            src={img4}
            className="card-img-top"
            alt="property4"
            height="300px"
            width="400px"
          />
          <div className="card-body">
            <h2 className="popular__price">
              <span id="price-3" />
            </h2>
            <h3 className="popular__title" id="prop_name-3" />
            <ul className="card-list">
              <li className="list-group-item">
                <ion-icon name="bed-outline" />
                3 Bedroom |&nbsp;
                <ion-icon name="man-outline" />
                4 Bathroom |&nbsp;
                <ion-icon name="square-outline" />
                3640 Square Ft
              </li>
            </ul>
            <p className="popular__description" id="address-3" />
            <button className="btn property_btn1">View Details</button>
          </div>
        </div>
        <div className="card property-card" style={{ width: 400, height: 530 }}>
          <img
            src={img5}
            className="card-img-top"
            alt="property5"
            height="300px"
            width="400px"
          />
          <div className="card-body">
            <h2 className="popular__price">
              <span id="price-4" />
            </h2>
            <h3 className="popular__title" id="prop_name-4" />
            <ul className="card-list">
              <li className="list-group-item">
                <ion-icon name="bed-outline" />
                3 Bedroom |&nbsp;
                <ion-icon name="man-outline" />
                2 Bathroom |&nbsp;
                <ion-icon name="square-outline" />
                3650 Square Ft
              </li>
            </ul>
            <p className="popular__description" id="address-4" />
            <button className="btn property_btn1">View Details</button>
          </div>
        </div>
        <div className="card property-card" style={{ width: 400, height: 530 }}>
          <img
            src={img6}
            className="card-img-top"
            alt="property6"
            height="300px"
            width="400px"
          />
          <div className="card-body">
            <h2 className="popular__price">
              <span id="price-5" />
            </h2>
            <h3 className="popular__title" id="prop_name-5" />
            <ul className="card-list">
              <li className="list-group-item">
                <ion-icon name="bed-outline" />
                5 Bedroom |&nbsp;
                <ion-icon name="man-outline" />
                4 Bathroom |&nbsp;
                <ion-icon name="square-outline" />
                4450 Square Ft
              </li>
            </ul>
            <p className="popular__description" id="address-5" />
            <button className="btn property_btn1">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Properties
