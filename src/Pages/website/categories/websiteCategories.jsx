import React, { useEffect, useState } from 'react'
import { Axios } from '../../../Api/Axios';
import { CAT } from '../../../Api/Api';
import { Container } from 'react-bootstrap';
import textSlice from '../../../Components/helpers/textSlice';

const WebsiteCategories = () => {
  
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    Axios.get(`${CAT}`).then((res) => {
      setCategories(res.data.slice(-20));
      console.log(res.data);
    });
  }, []);

  const showCategories = categories.map((category, id) => (
    <div
      className=" p-2 category-box col-12 col-lg-3 col-md-4 d-flex flex-column align-items-center justify-content-start gap-2"
      key={id}
    >
      <div className="image">
        <img
          src={category.image}
          alt=""
          className="img-fluid "
          style={{ width: "100%", rotate: 90, height: "100%" }}
        />
      </div>
      <div className="d-flex align-items-center flex-wrap gap-3">
        <p
          style={{
            backgroundColor: "gray",
            borderRadius: "10px",
            padding: "5px",
            margin:'0'
          }}
        >
          {textSlice(category.title, 8)}
        </p>
        <p className='m-0'>Fashion</p>
        <p className='m-0'>Sports</p>
      </div>
    </div>
  ));
  
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center align-items-stretch flex-wrap py-5 gap-3">
          {showCategories}
        </div>
      </Container>
    </>
  );
}

export default WebsiteCategories
