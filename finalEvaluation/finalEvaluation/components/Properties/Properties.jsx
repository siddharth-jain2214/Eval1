import React, { useState } from 'react';
import img1 from '../../src/assets/images/property-1.jpg';
import img2 from '../../src/assets/images/property-2.jpg';
import img3 from '../../src/assets/images/property-3.jpg';
import img4 from '../../src/assets/images/popular1.jpg';
import img5 from '../../src/assets/images/popular2.jpg';
import img6 from '../../src/assets/images/popular3.jpg';
import { useNavigate } from 'react-router-dom';

const Properties = () => {
  const [properties] = useState([
    { price: "$65,356", prop_name: "Garden City Asset", address: "1432 Willow Creek Road, San Diego, CA 92109", img: img1 },
    { price: "$35,159", prop_name: "Golden Oak Residence", address: "4597 Oak Hill Drive, Lexington, KY 40502", img: img2 },
    { price: "$75,043", prop_name: "Gables Luxurious House", address: "2945 Elmwood Street, Minneapolis, MN 55416", img: img3 },
    { price: "$86,967", prop_name: "Whispering Pines Estate", address: "6520 Pinecrest Boulevard, Fort Worth, TX 76107", img: img4 },
    { price: "$55,348", prop_name: "Maplewood Heaven", address: "2876 Maplewood Avenue, Portland, OR 97205", img: img5 },
    { price: "$67,521", prop_name: "Horizon View Villa", address: "4863 Willow Bend Road, Houston, TX 77056", img: img6 }
  ]);

  const navigate = useNavigate();

  const goToNewPage = () => {
    navigate('/new-page'); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('We will contact you soon!\nThank you for Visiting Us');
    e.target.reset();
  };

  return (
    <section className="properties1" id="properties1">
      <div className="properties-container1">
        <div className="properties-heading1">
          <span className="section-subtitle">Properties</span>
          <h2 className="section-title">Featured Listings</h2>
        </div>
        <div className="properties_cards">
          {properties.map((property, index) => (
            <div className="card property-card" style={{ width: 400, height: 530 }} key={index}>
              <img
                src={property.img}
                className="card-img-top"
                alt={`property${index + 1}`}
                height="300px"
                width="400px"
              />
              <div className="card-body">
                <h2 className="popular__price">{property.price}</h2>
                <h3 className="popular__title">{property.prop_name}</h3>
                <ul className="card-list">
                  <li className="list-group-item">
                    <ion-icon name="bed-outline" /> 3 Bedroom |&nbsp;
                    <ion-icon name="man-outline" /> 2 Bathroom |&nbsp;
                    <ion-icon name="square-outline" /> 3450 Square Ft
                  </li>
                </ul>
                <p className="popular__description">{property.address}</p>
                <button className="btn property_btn1" onClick={goToNewPage}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Properties;
