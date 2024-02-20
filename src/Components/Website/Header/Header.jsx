import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/aram-shop-high-resolution-logo-black-transparent.png";
import { Axios } from "../../../Api/Axios";
import { CAT } from "../../../Api/Api";
import "./nav.css";
import textSlice from "../../helpers/textSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Skeleton from "react-loading-skeleton";

const Header = () => {

  const [categoriess, setCategoriess] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Axios.get(`${CAT}`)
      .then((res) => {
        setCategoriess(res.data.slice( -6));
        console.log(res.data)
      })
      .finally(() => {
       setLoading(false);
      });
  }, []);
 const [isSearchFocused, setIsSearchFocused] = useState(false);
 const searchInputRef = useRef(null);

 const handleSearchIconClick = () => {
   setIsSearchFocused(true);
   if (searchInputRef.current) {
     searchInputRef.current.focus();
   }
 };


  const categoriesShow = categoriess.map((category, key) => (
    <>
      <div
        style={{
          padding: "0.6rem 2rem",
          backgroundColor: "#f3f3f3b0",
          borderRadius: "8px",
        }}
        className="image d-flex align-items-center justify-content-between gap-3"
      >
        <img
          width={"35px"}
          style={{}}
          src={category.image}
          alt=""
          className="img-fluid rounded-3"
        />
        <h6 key={key} className="nav-cat m-0">
          {textSlice(category.title, 15)}
        </h6>
        <FontAwesomeIcon icon={faCaretRight} className="icon-cat" />
      </div>
    </>
  ));

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="200px"
              height=""
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <div
            className="col-md-5 col-12 my-2 my-lg-0  order-3 order-lg-2 position-relative"
            style={{ maxHeight: "100px" }}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className=" mr-sm-2"
              ref={searchInputRef}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <Button
              className="btn btn-dark"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                borderRadius: 0,
              }}
            >
              Search
            </Button>
          </div>

          <div className="col-md-6 col-lg-3 justify-content-center d-flex gap-2  order-2 order-lg-3">
            <Link className="icon" onClick={handleSearchIconClick}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-lg" />
            </Link>
            <div className="icon">
              <FontAwesomeIcon icon={faCartShopping} className="fa-lg" />{" "}
            </div>
            <Link to="/login" className="icon">
              <FontAwesomeIcon
                icon={faUser}
                className="fa-lg fa-sharp fa-thin fa-user"
              />
            </Link>{" "}
            {/*  <Button
                as={Link}
                to="/register"
                style={{ backgroundColor: "rgba(113, 99, 186, 255)" }}
              >
                  <span className="title-btn">Register</span> 
                SignUp
              </Button> 
              <Button
                as={Link}
                to="/login"
                style={{ backgroundColor: "rgba(113, 99, 186, 255)" }}
              >
                 <span className="title-btn">signIn</span> 
                LogIn
                </Button> */}
          </div>
        </Container>
      </Navbar>
      <Container fluid>
        <div className="d-flex align-items-center justify-content-center mb-3 py-3 gap-2 flex-wrap">
          {loading ? (
            <>
              <Skeleton height={"40px"} width={"100px"} className="nav-cat " />

              <Skeleton height={"40px"} width={"100px"} className="nav-cat" />

              <Skeleton height={"40px"} width={"100px"} className="nav-cat" />

              <Skeleton height={"40px"} width={"100px"} className="nav-cat" />

              <Skeleton height={"40px"} width={"100px"} className="nav-cat" />

              <Skeleton height={"40px"} width={"100px"} className="nav-cat" />

              <Skeleton height={"40px"} width={"100px"} className="nav-cat" />
            </>
          ) : (
            <>
              {categoriesShow}
              <Link to="/categories" className="nav-cat-anchor">
                shop All
              </Link>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default Header;
