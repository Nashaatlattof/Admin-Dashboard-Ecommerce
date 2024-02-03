import React, { useEffect, useState } from 'react'
import {  Form } from 'react-bootstrap'
import { Axios } from '../../Api/Axios'
import { USER } from '../../Api/Api'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading'

const User = () => {
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [role, setRole]= useState("")
    const [disable, setDisable]= useState(true)
    const [loading, setLoading]= useState(false)

    const navigate= useNavigate()

/*     const id= Number(window.location.pathname.replace("/Dashboard/users/",""))


 */
/*  const id = window.location.pathname.split("/").slice(-1)[0];
 */
const { id } = useParams();


    useEffect(() => {
      setLoading(true)
        Axios.get(`/${USER}/${id}`)
        .then((data) => {
            setName(data.data.name)
            setEmail(data.data.email)  
            setRole(data.data.role) 
            setLoading(false) 
        }).then(() => setDisable(false))
        .catch(() =>  navigate('/users/page' , {replace: true}))
      }
       ,[])  

   async function HandleSubmit(e) {
        setLoading(true)
        e.preventDefault();
        try{
        const res= await Axios.post(`${USER}/edit/${id}`, {name:name,email:email,role:role})
            navigate("/dashboard");
        }catch(err){
            console.log(err)
            setLoading(false)
        }

        
    }

  return (
    /* <Row className="justify-content-md-center align-items-md-start pt-5 vh-100 w-100 bg-white ">
      <Col xs={10} className="mb-5 "> */
    <>
      {loading && <Loading />}
      <Form className="w-100 p-5" onSubmit={HandleSubmit}>
        <h1 className="mb-5">Update User</h1>
        <Form.Group className="mb-3" controlId="formBasicName1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name..."
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            controlId="exampleForm.ControlInput1"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail2">
          <Form.Label>Email address</Form.Label>

          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            controlId="exampleForm.ControlInput2"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail3">
          <Form.Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            controlId="exampleForm.ControlInput3"
          >
            <option disabled value=''>select role</option>
            <option value='1992'>admin</option>
            <option value='2001'>user</option>
            <option value='1900'>writer</option>
            </Form.Select>
        </Form.Group>

        <button disabled={disable} className="save-btn" type="submit">
          SAVE
        </button>
      </Form>
    </>
  );
}

export default User
