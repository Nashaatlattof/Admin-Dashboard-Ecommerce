import React from 'react'
import './footer.css'
import { Container, NavLink } from 'react-bootstrap'
import logo from "../../../assets/ecommerce-high-resolution-logo-white-transparent.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlay, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAnglesRight, faLocationDot, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
const linkData1 = [
  ["About US", "#"],
  ["Our Services", "#"],
  ["Privacy Policy", "#"],
  ["Ivestors", "#"],
];
const linkData3 = [
  ["Ivestors", "#"],
  ["FAQ", "#"],
  ["Shipping", "#"],
  ["Returns", "#"],
  ["Orders Status", "#"],
];

const linkSoacialData = [
  { icon: faFacebookF },
  { icon: faYoutube },
  { icon: faInstagram },
  { icon: faGooglePlay },
];
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div
          className="row  pb-5 pt-5 d-flex flex-wrap align-items-start h-auto  "
          style={{ height: "650px" }}
        >
          <div className=" col-md-12 col-lg-3">
            <img
              src={logo}
              alt=""
              width="150px"
              className="mx-auto d-block mb-3"
            />

            <p style={{ color: "#b9b9b9", textAlign: "center" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              maiores inventore tempora a atque nemo!
            </p>
          </div>
          <div className=" col-md-6 col-lg-3">
            {linkData1.map(([label, href]) => (
              <NavLink
                className="link"
                key={label}
                href={href}
                style={{ color: "#b9b9b9", marginBottom: "1rem" }}
              >
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  style={{ marginRight: "10px" }}
                />{" "}
                <span className="label">{label}</span>
              </NavLink>
            ))}
          </div>

          <div className=" col-md-6 col-lg-3">
            {linkData3.map(([label, href]) => (
              <NavLink
                className="link"
                key={label}
                href={href}
                style={{ color: "#b9b9b9", marginBottom: "1rem" }}
              >
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  style={{ marginRight: "10px" }}
                />
                <span className="label">{label}</span>
              </NavLink>
            ))}
          </div>

          <div className=" col-md-6 col-lg-3">
            <div className="d-flex justify-content-center gap-3">
              {linkSoacialData.map((item) => (
                <NavLink key={item}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{ fontSize: "30px", color: "#b9b9b9" }}
                  />
                </NavLink>
              ))}
            </div>

            <div className="mt-3">
              <div
                className="d-flex gap-2 align-items-center mb-2 justify-content-center"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faLocationDot} />
                <p style={{ color: "#b9b9b9" }} className="mb-0">
                  Damascus, Mazzeh
                </p>
              </div>

              <div
                className="d-flex gap-2 align-items-center mb-2 justify-content-center"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faMobileScreen} />
                <p style={{ color: "#b9b9b9" }} className="mb-0">
                  +963-991889924
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer
