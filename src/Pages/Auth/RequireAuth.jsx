import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import Cookie from "cookie-universal";
import { USER } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";
import { Axios } from "../../Api/Axios";
import Err403 from "./Err403";



export const RequireAuth = ({ allowedRole}) => {
  const cookie = Cookie();
  const token = cookie.get("e-commerce");


  const [user, setUser] = useState("");
console.log(user.role)
const navigate = useNavigate();

  useEffect(() => {
   Axios.get(`/${USER}`)
     .then((data) => {
       setUser(data.data);
     })
     .catch((err) => {
       navigate("/login");
       console.log(err);
     });
  }, []);

  return token ? (
    user === "" ? (
      <Loading />
    ) : allowedRole.includes(user.role) ? (
      <Outlet />
    ): <Err403 role={user.role}/>
  ) : (
    <Navigate to={"/login"} />
  );
};
