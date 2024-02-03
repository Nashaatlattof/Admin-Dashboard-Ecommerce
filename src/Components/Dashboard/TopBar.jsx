import React, { useContext, useEffect, useState } from 'react'
import './Bar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../../Context/MenuContext';
import { Dropdown , Image, SplitButton } from 'react-bootstrap';
import { Axios } from '../../Api/Axios';
import { LOGOUT, USER } from '../../Api/Api';
import { useNavigate } from 'react-router-dom';
import Cookie from 'cookie-universal'
import brand from '../../assets/aram-shop-high-resolution-logo-black-transparent.png'
const TopBar = () => {
  const menu= useContext(Menu);
  const setIsOpen = menu.setIsOpen;
  const[name, setName]= useState("");

  const cookie = Cookie()
  const navigate= useNavigate();

   useEffect(() => {
     Axios.get(`/${USER}`)
       .then((data) => {
         setName(data.data.name);
       })
       .catch((err) => {
         
         console.log(err);
       });
   }, []);

 async function handleLogout() {
   try {
     const res = await Axios
       .get(`/${LOGOUT}`)
      
     navigate("/login");
     cookie.remove("e-commerce")

   } catch (err) {
     console.log(err);
   }
 }
  return (
    <div className="top-bar d-flex align-items-center justify-content-between mb-3 ">
      <div className="d-flex align-items-center gap-5 w-25">
        <Image width={"120px"} fluid src={brand} alt="" />
        <FontAwesomeIcon
          onClick={() => setIsOpen((prev) => !prev)}
          icon={faBars}
          className="title-btn"
        />
      </div>

      <div className="w-25 d-flex justify-content-end">
        <SplitButton drop="up-centered" title={name}>
          <Dropdown.Item onClick={handleLogout} className=" btn btn-success">
            LogOut
          </Dropdown.Item>
        </SplitButton>
      </div>
    </div>
  );
}

export default TopBar
