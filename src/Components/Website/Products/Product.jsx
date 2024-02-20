import React from 'react'

import './product.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStars } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faStar as solidStars } from '@fortawesome/free-solid-svg-icons'

const Product = ({img}) => {
    const stars = Math.min(5.8, 8);
  const showSolidStars = Array.from({ length: stars }).map((_, key) => (
    <FontAwesomeIcon key={key} icon={solidStars} color='gold' />
  ));
  const showEmptyStars = Array.from({ length: 8 - stars }).map((_, key) => (
    <FontAwesomeIcon key={key} icon={regularStars} />
  ));
  
  return (
    <div className=" product p-3">
      <div className="product-img">
        <img className="img-fluid" src={img} alt="" />
      </div>
      
        <h3
          className="text-center"
          style={{ fontWeight: "700", transition: "0.1s" }}
        >
          Casual Wear
        </h3>
        <div className="d-flex justify-content-center">
          {showSolidStars}
          {showEmptyStars}
        </div>
        <p
          className="text-center"
          style={{
            backgroundColor: "#7163ba",
            margin: "1rem -1.5rem",
            padding: "0 1rem",
            transition: "0.1s",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="d-flex justify-content-around align-content-center gap-3 ">
          <div className="">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{
                padding: "0.5rem",
                backgroundColor: "#80808061",
                borderRadius: "8px",
                fontSize: "25px",
                transition: "0.1s",
              }}
            />
          </div>{" "}
          <h3 style={{ transition: "0.1s" }}>
            190${" "}
            <span
              className=" text-decoration-line-through "
              style={{ fontSize: "14px", transition: "0.1s" }}
            >
              110$
            </span>
          </h3>
        

        <span className="discount">discount</span>
      </div>
    </div>
  );
}

export default Product
