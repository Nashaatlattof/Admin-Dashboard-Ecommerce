import React from 'react'
import { Carousel, Col, Container, Row, Stack } from 'react-bootstrap'
import img1 from '../../../assets/landing/hero.webp'
import img2 from '../../../assets/landing/hero1.webp'
import img3 from '../../../assets/landing/hero2.webp'
import img4 from '../../../assets/landing/hero3.webp'
import img5 from '../../../assets/landing/hero6.webp';
import './hero.css'


const items = [
  {
    img: img2,
    title: "create your individuality",
    desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    img: img3,
    title: "women's fashion",
    desc: "consectetur adipiscing elit, a pharetra augue mollis interdum.",
  },
  {
    img: img1,
    title: "men's fashion",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const Hero = () => {

  
  return (
    <Container fluid style={{ display: "flex", alignItems: "center" }}>
      <Row>
        <Col xs="12" md={12} lg={8}>
          <Carousel fade>
            {items.map((item, key) => (
              <Carousel.Item key={key}>
                <img
                  src={item.img}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <Carousel.Caption>
                  <h1 style={{textTransform:'uppercase',letterSpacing:'0.2rem'}}>{item.title}</h1> <p>{item.desc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
            {/*  <Carousel.Item>
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
                <h1 >
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
            </Carousel.Item> */}
          </Carousel>
        </Col>
        <Col className="d-none d-lg-block">
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
                  color: "wheat",
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
                  color: "wheat",
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