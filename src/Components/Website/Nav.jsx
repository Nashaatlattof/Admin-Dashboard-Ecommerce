import React from 'react'
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/aram-shop-high-resolution-logo-black-transparent.png";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

const Header = () => {

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
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2"><LocalGroceryStoreOutlinedIcon /></Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>

              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>

            <div className='d-flex gap-2' >
              <Button as={Link} to="/register" variant="dark">
               {/*  <span className="title-btn">Register</span> */}
               SignUp
              </Button>
              <Button as={Link} to="/login" variant="dark">
                {/* <span className="title-btn">signIn</span> */}
                LogIn
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header
