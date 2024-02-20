import React, { useEffect, useState } from 'react'
import Product from './Product'


import img1 from '../../../assets/latest-products/[removal.ai]_3a138818-1d16-43b3-acfc-d2cd100dee6a-nasa-space-bear-print-t-shirt.png'
import img2 from '../../../assets/latest-products/[removal.ai]_175e01c6-a444-4171-b335-7f498a33a432-paper-plane-of-liberty-print-crew-neck-short-sleeve-t-shirts-khaki-_-xl.png'
import img3 from '../../../assets/latest-products/[removal.ai]_a5152733-87ad-4f76-88db-70c53b3bc127-paper-plane-of-liberty-print-crew-neck-short-sleeve-t-shirts-black-_-xl.png'
import img4 from '../../../assets/latest-products/[removal.ai]_cb26310b-c3c1-45f1-8bb9-b9ef1fe5271c-mens-nasa-space-bear-print-o-neck-casual-loose-short-sleeve-t-shirt.png'
import img5 from '../../../assets/latest-products/shirt3-HwQ10bVo.png'
import img6 from '../../../assets/latest-products/shirt2-XQzG6elp.png'
import img7 from '../../../assets/latest-products/shirt-cwf9SKdB.png'

import { SaleProducts } from '../../../Api/Api'



import { Axios } from '../../../Api/Axios'
import SkiletonPage from '../skelton/SkeletonPage'



const LatestProducts = () => {

  const [loading, setLoading] = useState(false);

  const products = [
    {
      title: "Casual Wear",
      price: 180,
      discont: 120,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, minus?",
      rating: 70,
      img: img1
    },
    {
      title: "Casual Wear",
      price: 180,
      discont: 120,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, minus?",
      rating: 70,
      img: img2
    },
    {
      title: "Casual Wear",
      price: 180,
      discont: 120,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, minus?",
      rating: 70,
      img:img3
    },
    {
      title: "Casual Wear",
      price: 180,
      discont: 120,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, minus?",
      rating: 70,
      img:img4
    },
    {
      title: "Casual Wear",
      price: 180,
      discont: 120,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, minus?",
      rating: 70,
      img:img5
    },
    {
      title: "Casual Wear",
      price: 180,
      discont: 120,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, minus?",
      rating: 70,
      img:img6
    },
    {
      title: "Casual Wear",
      price: 180,
      discont: 120,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, minus?",
      rating: 70,
      img:img7
    },
  ];
  
  const [products1, setProducts1]=useState([])
console.log(products1)

/* useEffect(() => {
  axios.get("http://127.0.0.1:8000/api/latest-sale").then((res) => {
    setProducts1(res.data);
    console.log(res.data);
  }).finally(() => {  });
}, []);  */
useEffect(() => {
Axios.get(`${SaleProducts}`).then((res) => {
  console.log(res.data[0].images[0].image);
  setProducts1(res.data);
});
}, []); 





   const showProduct = products.map((product, key) => (
     <div key={key} className="col-12 col-md-6 col-lg-3 mt-5 mb-5">
     <Product  img={product.img}/>
      
     </div>
   ));

  return (
    <div className="container  p-5 text-center">
      {/*  {header section} */}
      <div className="section-header">
        <p className="m-0" style={{ color: "wheat", fontSize: "24px" }}>
          top selling products for you{" "}
        </p>
        <h1
          style={{
            color: "var(--mycolor)",
            fontWeight: "bold",
            margin: 0,
            fontSize: "2.875rem",
          }}
        >
          Products
        </h1>
        <p style={{ color: "var(--subtitle)" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          incidunt aut, odit veniam reiciendis eius.
        </p>
      </div>
      {/*  {body section} */}
      <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap mt-5">
        {loading ? (
          <>
           
              <SkiletonPage leng="7" height="350px" width="250px" />
           
          </>
        ) : (
          <>{showProduct}</>
        )}
      </div>
    </div>
  );
}

export default LatestProducts
