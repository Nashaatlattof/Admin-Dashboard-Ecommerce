import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Axios } from "../../Api/Axios";
import { USER } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handle focus event
  const focus = useRef("");
  useEffect(() => {
    focus.current.focus();
  }, []);

  /*     const id= Number(window.location.pathname.replace("/Dashboard/users/",""))


 */

  async function HandleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await Axios.post(`${USER}/add`, {
        name: name,
        email: email,
        password: password,
        role: role,
      });
      navigate("/dashboard/users");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <Loading />}
      <Form className="w-100 p-5" onSubmit={HandleSubmit}>
        <h1 className="mb-5">Add</h1>
        <Form.Group className="mb-3" controlId="formBasicName1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name..."
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            controlId="exampleForm.ControlInput1"
            ref={focus}
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
          <Form.Label>password</Form.Label>

          <Form.Control
            type="password"
            placeholder="name@example.com"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            controlId="exampleForm.ControlInput3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail4">
          <Form.Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            controlId="exampleForm.ControlInput4"
          >
            <option disabled value="">
              select role
            </option>
            <option value="1995">admin</option>
            <option value="2001">user</option>
            <option value="1992">writer</option>
            <option value="1999">product manager</option>
          </Form.Select>
        </Form.Group>

        <button
          disabled={
            name.length > 1 &&
            email.length > 1 &&
            password.length > 1 &&
            role !== ""
              ? false
              : true
          }
          className="save-btn"
          type="submit"
        >
          SAVE
        </button>
      </Form>
    </>
  );
};

export default AddUser;
