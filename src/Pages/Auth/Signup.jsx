import React, { useEffect, useRef, useState } from 'react'
import { baseUrl,REGISTER } from '../../Api/Api'
import axios from 'axios'
import Cookie from "cookie-universal";
import Loading from '../../Components/Loading/Loading'
import { BsFillExclamationOctagonFill } from 'react-icons/bs'
import "../../Css/components/form.css"
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    //states
    const [form,setForm]=useState({
        name:'',
        email: '',
        password:''
    })
    //  cookies
    const cookie  = Cookie();
   const [error,setError]=useState('')
   const[loading, setLoading]=useState(false);
    // navigation
   const navigate= useNavigate(); 
    // Handle focus event
   const focus = useRef("")
   useEffect(() => {
    focus.current.focus();
   },[])

    function handleChange(event) {
        setForm({...form, [event.target.id]: event.target.value})
    }

   async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        try{
          const res= await axios.post(`${baseUrl}/${REGISTER}`, form);
           setLoading(false);
            setError("");
            cookie.set("e-commerce", res.data.token);
            navigate("/dashboard/users", {replace: true})
        }catch(err){
           setLoading(false);
           console.log(err)
            if(err.response.status === 422){
              setError("Email Is Already Been taken ")
              
            } else{
              setError("Internal Server Error")
             
            }
            
        }
    }
  return (
    <>
      {loading && <Loading />}
 
        

        <div className="container">
          <div className="row " style={{ height: "100vh" }}>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-style">
                <h1 className="mb-5 text-center" style={{ color: "#416d6d" }}>
                  Register Now
                </h1>

                <div className="form-costum">
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter Name ..."
                    value={form.name}
                    onChange={handleChange}
                    required
                    ref={focus}
                  ></input>
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-costum">
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email ..."
                    value={form.email}
                    onChange={handleChange}
                    required
                  ></input>
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-costum">
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter Password ..."
                    value={form.password}
                    onChange={handleChange}
                    required
                  ></input>
                  <label htmlFor="password">Password</label>
                </div>

                <div className="d-flex justify-content-center align-items-center ">
                  <button className="btn btn-success btn1">Save</button>
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
            </form>
          </div>
        </div>
     
    </>
  );
}

export default Signup
