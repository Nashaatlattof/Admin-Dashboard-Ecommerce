import React from 'react'
import { Carousel, Col, Container, Row, Stack } from 'react-bootstrap'
import img1 from '../../../assets/hero.jpg'
import img2 from '../../../assets/hero1.jpg'
import img3 from '../../../assets/hero2.jpg'
import img4 from '../../../assets/hero3.jpg'
import img5 from '../../../assets/hero6.jpg';
import './hero.css'

const Hero = () => {

  
  return (
    <Container style={{ display: "flex", alignItems: "center" }}>
      <Row>
        <Col xs="12" md={8}>
          <Carousel fade>
            <Carousel.Item>
              <img
                src={img1}
                style={{ width: "100%", borderRadius: "8px" }}
                alt=""
              />
              <Carousel.Caption>
                <h1>
                  create your <span>individuality</span>{" "}
                </h1>{" "}
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={img2}
                style={{ width: "100%", borderRadius: "8px" }}
                alt=""
              />{" "}
              <Carousel.Caption>
                <h1 className="text-capitalize">
                  men's <span>fashion</span>
                </h1>{" "}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={img3}
                style={{ width: "100%", borderRadius: "8px" }}
                alt=""
              />{" "}
              <Carousel.Caption>
                <h1 className="text-capitalize">
                  women's <span>fashion</span>
                </h1>{" "}
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="d-none d-md-block">
          <Stack gap={3}>
            <div style={{ position: "relative" }}>
              <img
                src={img4}
                style={{ width: "100%", borderRadius: "8px" }}
                alt=""
              />

              <h1
                style={{
                  position: "absolute",
                  left: "10%",
                  top: "10%",
                  fontWeight: "900",
                  color: "white"
                }}
                className="text-uppercase"
              >
                new <br></br>
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "1.5rem",
                    color: "rgba(113, 99, 186, 255)",
                  }}
                >
                  arrivals
                </span>
              </h1>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src={img5}
                style={{ width: "100%", borderRadius: "8px" }}
                alt=""
              />

              <h1
                style={{
                  position: "absolute",
                  left: "10%",
                  top: "10%",
                  fontWeight: "900",
                  color: "white",
                }}
                className="text-uppercase"
              >
                big <br></br>
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "1.5rem",
                    color: "rgba(113, 99, 186, 255)",
                  }}
                >
                  clearance
                </span>
              </h1>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero

 {
   /*   <div style={{border: '1px solid red', width:'70%', position:'relative'}}>
            <img src={img1} style={{width:'100%'}} alt=""  />
            <div style={{position:'absolute', top:0, left:0, transform: 'transalteX(-50%)'}}>
                <h1 className='fw-light '>create your individuality</h1>
            </div>
        </div>
        <div></div> */
 }