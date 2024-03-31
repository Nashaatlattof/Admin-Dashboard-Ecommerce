import React, { useEffect, useRef, useState } from "react";
import { Badge, Button, Container, Form, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/aram-shop-high-resolution-logo-black-transparent.png";
import { Axios } from "../../../Api/Axios";
import { CAT } from "../../../Api/Api";
import "./nav.css";
import textSlice from "../../helpers/textSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretRight,
  faCartShopping,
  faMagnifyingGlass,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Skeleton from "react-loading-skeleton";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { CartState } from "../../../Pages/website/context/Context";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [categoriess, setCategoriess] = useState([]);
  const [loading, setLoading] = useState(true);
 const {
   state: { cart },
   dispatch,
 } = CartState();

 const cartItemCount = cart.reduce((total, product) => total + product.qty, 0);


  useEffect(() => {
    Axios.get(`${CAT}`)
      .then((res) => {
        setCategoriess(res.data.slice(-4));
        console.log(res.data);
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

  const handleShowCart = () => {


  }

  const categoriesShow = categoriess.map((category, key) => (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "0.4rem 1rem",
          backgroundColor: "#f3f3f3b0",
          borderRadius: "8px",
       
        }}
        className="image d-flex align-items-center justify-content-between gap-3"
      >
        <img
          width={"35px"}
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
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ position: "sticky", top: 0, left: 0, zIndex: "100" }}
      >
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
            className="d-flex gap-2 col-12 col-lg-6 my-2 my-lg-0  order-3 order-lg-2 position-relative"
            style={{ maxHeight: "100px" }}
          >
            <Button
              className="d-lg-none btn-dark"
              onClick={() => setShowMenu(true)}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
            {showMenu && (
              <div className="fixed">
                <FontAwesomeIcon
                  icon={faRectangleXmark}
                  style={{
                    cursor: "pointer",
                    fontSize: "32px",
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                  }}
                  onClick={() => setShowMenu(false)}
                />
                <div className="h-100 d-flex justify-content-center align-items-center">
                  <ul
                    style={{
                      minWidth: "70%",
                      alignItems: "center",
                      gap: "10px",
                      padding: "3rem 0",
                      backgroundColor: "rgba(255, 255, 255,0.5)",
                      listStyle: "none",
                      borderRadius: "12px",
                    }}
                  >
                    {categoriess.map((category, key) => (
                      <li
                        className="menu-link"
                        key={key}
                        style={{
                          margin: "0 2rem",

                          padding: "0.5rem 0",
                          textAlign: "center",
                        }}
                      >
                        <a
                          className="d-block "
                          style={{ color: "var(--mycolor)", fontSize: "22px" }}
                        >
                          {textSlice(category.title, 15)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
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
            <NavLink to="/shoppingCart" className="icon">
              <Badge style={{
                position:'absolute',
                 top:'8px',
                  fontSize:'10px',
                  bgColor:'var(--mycolor)!important'}}> {cartItemCount}</Badge>
              <FontAwesomeIcon style={{position:'relative'}} icon={faCartShopping} className="fa-lg" />{" "}
            </NavLink>
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

      <Navbar
        expand="lg"
        className="d-flex gap-3  mb-3 shadow-sm"
        style={{ height: "60px", bgColor: "#F8F9FA", justifyContent: "center" }}
      >
        <div className="d-flex ps-2 pe-2 gap-2">
          <DropdownButton
            id="dropdown-basic-button"
            className=""
            title="Categories"
          >
            <Dropdown.Item href="#/action-1">Men's</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Women's</Dropdown.Item>
            <Dropdown.Item href="#/action-3">kit's</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            id="dropdown-basic-button"
            className=" btn-dark"
            title="Dashboard"
          >
            <Dropdown.Item href="#/action-1">Users</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Categories</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Products</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            id="dropdown-basic-button"
            className=" btn-dark"
            title=" Latest Products"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            id="dropdown-basic-button"
            className=" btn-dark"
            title="Products"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            id="dropdown-basic-button"
            className=" btn-dark"
            title="Pages"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </Navbar>

      {/* <div className=" d-none d-lg-flex  align-items-center justify-content-center mb-1 py-3 gap-2 flex-wrap">
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
        </div> */}
    </>
  );
};

export default Header;
