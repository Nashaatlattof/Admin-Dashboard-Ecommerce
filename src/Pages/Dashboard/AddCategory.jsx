import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Axios } from "../../Api/Axios";
import { CATEGORY } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const AddCategory = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handle focus event
  const focus = useRef("");
  useEffect(() => {
    focus.current.focus();
  }, []);

  async function HandleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    const Form = new FormData();
    Form.append("title", title);
    Form.append("image", image);

    try {
      const res = await Axios.post(`${CATEGORY}/add`, Form);
      navigate("/dashboard/categories");
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
          <Form.Label>title</Form.Label>
          <Form.Control
            type="text"
            placeholder="title..."
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            controlId="exampleForm.ControlInput1"
            ref={focus}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail2">
          <Form.Label>image</Form.Label>

          <Form.Control
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files.item(0))}
          />
        </Form.Group>

        <button
          disabled={title.length > 1 ? false : true}
          className="save-btn"
          type="submit"
        >
          SAVE
        </button>
      </Form>
    </>
  );
};

export default AddCategory;
