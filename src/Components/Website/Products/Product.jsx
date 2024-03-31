import React from 'react'

import './product.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStars } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faStar as solidStars } from '@fortawesome/free-solid-svg-icons'
import { CartState } from '../../../Pages/website/context/Context';
import textSlice from '../../helpers/textSlice';


const Product = ({prod}) => {


    const stars = Math.min(Number(prod.rating), 8);

  const showSolidStars = Array.from({ length: stars }).map((_, key) => (
    <FontAwesomeIcon key={key} icon={solidStars} color='gold' />
  ));
  const showEmptyStars = Array.from({ length: 8 - stars }).map((_, key) => (
    <FontAwesomeIcon key={key} icon={regularStars} />
  ));
  
 const {
   state: { cart },
   dispatch,
 } = CartState();


let image = prod.images[0] ? prod.images[0].image : prod.images[0]
 console.log(image);

  return (
    <div className=" product p-3">
      <div className="product-img">
        <img className="img-fluid" src={image} alt="" />
      </div>

      <h3
        className="text-center"
        style={{ fontWeight: "700", transition: "0.1s" }}
      >
        {textSlice(prod.title, 10)}
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
        {textSlice(prod.description, 25)}
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
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: { id: prod.id, ...prod },
              })
            }
          />
        </div>{" "}
        <h3 style={{ transition: "0.1s" }}>
          $ {prod.price}
          <span
            className=" text-decoration-line-through "
            style={{ fontSize: "14px", transition: "0.1s" }}
          >
            110$
          </span>
        </h3>
        <div className="ribbon ribbon-top-left">
          <span>sale</span>
        </div>
      </div>
    </div>
  );
}

export default Product
