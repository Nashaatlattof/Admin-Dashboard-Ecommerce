import React, { useEffect, useRef, useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import '../Auth/Auth.css'
import axios from 'axios';

import Cookie from 'cookie-universal'

import { BsFillExclamationOctagonFill } from "react-icons/bs";
import Loading from '../../Components/Loading/Loading';
import IconSvg from '../../Components/Loading/iconSvg';
import { useNavigate } from 'react-router-dom';

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
        <Row style={{ height: "100vh" }}>
          <Form className="formL" onSubmit={handleSubmit}>
            <div className="form-style">
              <IconSvg color="#416d6d" />
              <h1 className="mb-5 text-center" style={{ color: "#416d6d" }}>
                LogIn
              </h1>

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

              <Form.Group className="mb-4 form-costum">
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
              <div className="d-flex justify-content-center align-items-center ">
                <button className="btn btn-success btn1">Save</button>
              </div>

              <div className="google-btn mt-5 ">
                <a href={`http://127.0.0.1:8000/login-google`}>
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <p className="btn-text">
                    <b>Sign in with google</b>
                  </p>
                </a>
              </div>
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
        </Row>
      </Container>
    </>
  );
}

export default Login
