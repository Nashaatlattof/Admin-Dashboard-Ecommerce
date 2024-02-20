import React from 'react'
import { Container, Row } from 'react-bootstrap'
import logo1 from '../../../assets/logo/logo1.png'
import logo2 from '../../../assets/logo/logo2.png'
import logo3 from '../../../assets/logo/logo3.png'
import logo4 from '../../../assets/logo/logo4.png'
import logo5 from '../../../assets/logo/logo5.png'
import logo6 from '../../../assets/logo/logo6.png'
import Marquee from 'react-fast-marquee'
import './hero.css'
const Features = () => {
  return (
    <Container
      fluid
      style={{
        paddingTop: "50px",
        margin: "50px 0",
        backgroundColor: "#F8F9FA",
      }}
    >
      <Row>
        <h1 className="text-center">With Great Outcomes.</h1>
        <h4 className="text-center text-muted">
          Our customers have gotten offers from awesome companies.
        </h4>

        <Marquee direction="right">
          <div className="wrapper">
            <div className="wrapper-img  ">
              <img width={100} src={logo1} alt="" />
            </div>
            <div className="wrapper-img ">
              <img width={100} src={logo2} alt="" />
            </div>
            <div className="wrapper-img  ">
              <img width={100} src={logo3} alt="" />
            </div>
            <div className="wrapper-img  ">
              <img width={100} src={logo4} alt="" />
            </div>
            <div className="wrapper-img ">
              <img width={100} src={logo5} alt="" />
            </div>
          </div>
        </Marquee>
        <Marquee direction="left">
          <div className="wrapper">
            <div className="wrapper-img">
              <img width={100} src={logo1} alt="" />
            </div>
            <div className="wrapper-img">
              <img width={100} src={logo2} alt="" />
            </div>
            <div className="wrapper-img">
              <img width={100} src={logo3} alt="" />
            </div>
            <div className="wrapper-img">
              <img width={100} src={logo4} alt="" />
            </div>
            <div className="wrapper-img">
              <img width={100} src={logo5} alt="" />
            </div>
          </div>
        </Marquee>
      </Row>
    </Container>
  );
}

export default Features;
