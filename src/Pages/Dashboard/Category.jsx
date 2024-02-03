import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Axios } from "../../Api/Axios";
import { CATEGORY, USER } from "../../Api/Api";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const Category = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /*     const id= Number(window.location.pathname.replace("/Dashboard/users/",""))


 */
  /*  const id = window.location.pathname.split("/").slice(-1)[0]; */

  const {id} = useParams()


  useEffect(() => {
    setLoading(true);
    Axios.get(`/${CATEGORY}/${id}`)
      .then((data) => {
        setTitle(data.data.title);
       
        setLoading(false);
      })
      .then(() => setDisable(false))
      .catch(() => navigate("/categories/page", { replace: true }));
  }, []);

  async function HandleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const Form = new FormData();
    Form.append("title", title);
    Form.append("image", image);
    try {
      const res = await Axios.post(`${CATEGORY}/edit/${id}`, Form);
      navigate("/dashboard/categories");
    } catch (err) {
      console.log(err);
      setLoading(false);
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
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="title..."
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail2">
          <Form.Label>Image</Form.Label>

          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <button disabled={disable} className="save-btn" type="submit">
          SAVE
        </button>
      </Form>
    </>
  );
};

export default Category;
