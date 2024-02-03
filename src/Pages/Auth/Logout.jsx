import axios from 'axios';
import React from 'react'
import { LOGOUT, baseUrl } from '../../Api/Api';
import Cookie from "cookie-universal";
import { useNavigate } from 'react-router-dom';


const Logout = () => {

    const cookie = Cookie();
const navigate= useNavigate()

    async function handleLogout(){
        try{
        const res = await axios.get(`${baseUrl}/${LOGOUT}`, {
          headers: { Authorization: "Bearer " + cookie.get("e-commerce") },
        }).then((data) => console.log(data))
        navigate("/")
       
        }
        catch(err){
        console.log(err)
        }
        
    }
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <button className="btn btn-success btn1" onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Logout
