import React from 'react'
import { SwiperSlide } from 'swiper/react';
import { faStar as regularStars } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductSale = ({product}) => {
const stars = Math.min(Number(product.rating), 6);

const showSolidStars = Array.from({ length: stars }).map((_, key) => (
  <FontAwesomeIcon key={key} icon={solidStars} color="gold" />
));
const showEmptyStars = Array.from({ length: 6 - stars }).map((_, key) => (
  <FontAwesomeIcon key={key} icon={regularStars} />
));
  return (
    <div className="product-slide">
      <div className="new-badge">NEW</div>
      <img src={product.image} alt={product.name} className="product-image" />
      <img
        src={product.hoverImage}
        alt={product.name}
        className="product-image-hover"
      />
      <div className="product-info">
        <h5>{product.name}</h5>
        <p className="product-price">{product.price}</p>
        <div className="d-flex justify-content-center">
          {showSolidStars}
          {showEmptyStars}
        </div>
      </div>
    </div>
  );
}

export default ProductSale