import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Bar.css";
import { Menu } from '../../Context/MenuContext';
import { Window } from '../../Context/WindowContext';
import { Links } from './NavLink';
import { Axios } from '../../Api/Axios';
import { USER } from '../../Api/Api';
import { Typography } from '@mui/material';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const SideBar = () => {

  const [currentUser, setCurrentUser] = useState("");

  const menu = useContext(Menu);
  const isOpen= menu.isOpen;
   const setIsOpen = menu.setIsOpen;
  const window= useContext(Window);
  const windowSize = window.windowSize;
  
  const navigate = useNavigate();

  
  useEffect(() => {
   Axios.get(`/${USER}`)
     .then((data) => {
       setCurrentUser(data.data);
     })
     .catch((err) => {
       navigate("/login");
       console.log(err);
     });
  }, []);
    
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "0",

          width: "100%",
          height: "100vh",
          backgroundColor: "rgb(0, 0, 0, 0.2)",
          display: windowSize < "768" && isOpen ? "block" : "none",
        }}
      ></div>
      <div
        className="side-bar pt-4 "
        style={{
          left: windowSize < "768" ? (isOpen ? 0 : "-100%") : 0,
          width: isOpen ? "240px" : "fit-content",
          position: windowSize < "768" ? "fixed" : "sticky",
        }}
      >
      {isOpen && <Typography sx={{ fontSize: "1.6rem", color:'white' ,textAlign:'center',marginBottom:'1rem' }}>DASHBOARD</Typography>}  
        {isOpen && windowSize < "768" ? <FontAwesomeIcon
          onClick={() => setIsOpen((prev) => !prev)}
          icon={faBars}
          className="title-btn"
        /> : '' }
        {Links.map(
          (link, key) =>
            link.role.includes(currentUser.role) && (
              <>
                {" "}
                <NavLink
                  key={key}
                  to={link.path}
                  className="d-flex align-items-center  side-bar-link"
                  style={{ justifyContent: isOpen ? "flex-start" : "center" }}
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    cursor={"pointer"}
                    style={{
                      padding: isOpen ? "10px 8px 10px 15px" : "10px 13px ",
                    }}
                  />
                  <span style={{ display: isOpen ? "block" : "none" }}>
                    {link.name}
                  </span>
                </NavLink>
              </>
            )
        )}
      </div>
    </>
  );
}

export default SideBar
