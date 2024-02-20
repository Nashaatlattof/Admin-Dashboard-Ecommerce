import React, { useEffect, useState } from 'react'
import { Axios } from '../../../Api/Axios';
import { CAT } from '../../../Api/Api';
import { Container } from 'react-bootstrap';

const WebsiteCategories = () => {
  
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    Axios.get(`${CAT}`).then((res) => {
      setCategories(res.data.slice(-6));
      console.log(res.data);
    });
  }, []);

  const showCategories = categories.map((category, id) => (
    <div
      className="category-box col-12 col-lg-3 col-md-4 d-flex align-items-center justify-content-center"
      key={id}
    >
      <div className="image">
        {" "}
        <img
        src={category.image}
          alt=""
          className="img-fluid "
          style={{ width: "100%", rotate: 90 }}
        />
      </div>
    </div>
  ));
  
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center align-items-stretch flex-wrap pt-5 gap-3">
          {showCategories}
        </div>
      </Container>
    </>
  );
}

export default WebsiteCategories
