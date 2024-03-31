import React, { useEffect, useRef, useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import '../Auth/Auth.css'
import axios from 'axios';

import Cookie from 'cookie-universal'

import { BsFillExclamationOctagonFill } from "react-icons/bs";
import Loading from '../../Components/Loading/Loading';
import IconSvg from '../../Components/Loading/iconSvg';
import { useNavigate } from 'react-router-dom';
import IconGoogle from '../../assets/google-color.svg'
const Login = () => {
  //states
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
//cookie
const cookie =  Cookie();

//handle focus event

  const focus= useRef(null)
useEffect(() => {
  focus.current.focus();
}, [])






  function handleChange(event) {
    setForm({ ...form, [event.target.id]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
    const res=  await axios.post(`http://127.0.0.1:8000/api/login`, form);  
    cookie.set("e-commerce", res.data.token);
      setLoading(false);
      setError("");
     /*   const role = res.data.user.role;
       const go = role === "1995" ? "users" : "writer"
       window.location.pathname = `/dashboard/${go}`; */
       const role = res.data.user.role;
       let go;

       if (role === "1995") {
         go = "dashboard/users";
       } else if (role === "2001") {
         go = "test";
       } else {
         go = "dashboard/writer";
       }

       window.location.pathname = `/${go}`;
 
    } catch (err) {
      console.log(err)
      setLoading(false);
      if (err.response.status === 401) {
        setError("Wrong in Email Or Password  ");
      } else {
        setError("Internal Server Error");
      }
    }
  }
  return (
    <>
      {loading && <Loading />}
      <Container>
        <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
          <Form className="formL" onSubmit={handleSubmit}>
            <div className="form-style">
              <div
                className="mb-4"
                style={{ display: "flex", gap: 20, justifyContent: "center" }}
              >
                <IconSvg color="#416d6d" />
                <h2 className=" text-center" style={{ color: "#416d6d" }}>
                  LogIn
                </h2>
              </div>

              <Form.Group className="mb-4 form-costum">
                <Form.Control
                  ref={focus}
                  type="email"
                  placeholder="Enter email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  id="email"
                />
                <Form.Label>Email address</Form.Label>
              </Form.Group>

              <Form.Group className="form-costum">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  minLength="6"
                  value={form.password}
                  onChange={handleChange}
                  id="password"
                />
                <Form.Label>Password</Form.Label>
              </Form.Group>
              <p className="fw-light" style={{ textAlign: "end" }}>
                forget your password ?
              </p>
              <div>
                <button className="btn btn-success btn1">Sign In</button>
                <p className="fw-light">don't have acount? Sign IN </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 20,
                  marginBottom: "1rem",
                }}
              >
                <span
                  className="line"
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "#416d6d",
                  }}
                ></span>
                <span
                  className="seperator-text"
                  style={{
                    height: "36px",
                    backgroundColor: "#416d6d",
                    minWidth: "36px",
                    borderRadius: "50%",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  OR
                </span>
                <span
                  className="line"
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "#416d6d",
                  }}
                ></span>
              </div>
              <a
                href={`http://127.0.0.1:8000/login-google`}
                style={{ color: "black" }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    border: "1px solid black",
                    padding: "8px",
                  }}
                >
                  <img width={"42px"} src={IconGoogle} alt="" />
                  <span color="black">Login With Google</span>
                </div>
              </a>

              {error !== "" && (
                <div className="error ">
                  <div>{error} </div>
                  <span className="ms-5">
                    <BsFillExclamationOctagonFill size={30} />
                  </span>
                </div>
              )}
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Login
