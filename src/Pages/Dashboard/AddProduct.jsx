import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Axios } from "../../Api/Axios";
import { CAT, Pro } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  /*  */
  const [form, setForm] = useState({
    category: "Select Category",
    title: "",
    description: "",
    price: "",
    rate:'',
    discount: "",
    About: "",
  });
  const dummyData = {
    category: null,
    title: "dummy",
    description: "ssss",
    price: 1500,
    rate: 4,
    discount: 20,
    About: "about",
  };
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [sent, setSent] = useState(false);
  const [id, setId] = useState("");
  const progress = useRef([]);
  const loop = useRef(-1);

 
  
  // NAVIGATION

  const nav = useNavigate();

  // Handle focus event
  const focus = useRef("");
  useEffect(() => {
    focus.current.focus();
  }, []);

  // Handle onchange event
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(true);
    if (sent !== true) {
      HandleSubmitForm();
    }
  }

  //Get All Categories
  useEffect(() => {
    Axios.get(`/${CAT}`)
      .then((data) => {
        setCategories(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function HandleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("category", form.category);
      data.append("title", form.title);
      data.append("description", form.description);
      data.append("price", form.price);
      data.append("discount", form.discount);
      data.append("About", form.About);
      data.append("rate", form.rate);
      const res = await Axios.post(`${Pro}/edit/${id}`, data);
      nav("/dashboard/products");
      console.log(res.data)
    } catch (err) {
      console.log(err);

      setLoading(false);
    }
  }

  // send data random
  async function HandleSubmitForm() {
    try {
      let res = await Axios.post(`${Pro}/add`, dummyData);
      console.log(res);
      setId(res.data.id);
    } catch (err) {
      console.log(err);
    }
  }

  //sending images before uploading the product
  async function handleChangeImages(e) {
    setImages((prev) => [...prev, ...e.target.files]);
    const imagesAsFiles = e.target.files; 
    for (let i = 0; i < imagesAsFiles.length; i++) {
      loop.current ++;
      const data = new FormData();
      data.append("image", imagesAsFiles[i]);
      data.append("product_id", id);

      try {
        const res = await Axios.post("/product-img/add", data, {
          onUploadProgress : (progrssEvent) => {
            const loaded = progrssEvent.loaded;
            const total = progrssEvent.total;
            const percent = Math.floor((loaded * 100) / total);
            
            if(percent % 10 === 0){
               progress.current[loop.current].style.width = `${percent}%`;
               progress.current[loop.current].setAttribute(
                 "percent",
                 `${percent} %`
               );
            }
            

            
          } 
        });
        
      } catch (err) {
        console.log(err);
      }
    }
  }
  //  Mapping
  const categoriesShow = categories.map((category, key) => (
    <option key={key} value={category.id}>
      {category.title}
    </option>
  ));

  const imagesShow = images.map((img, key) => (
    <div key={key} className="border p-3">
      <div className="d-flex align-items-center justify-content-start gap-2 mb-3 ">
        <img src={URL.createObjectURL(img)} width={"100px"} />
        <div>
          <p className="m-0">{img.name}</p>
          <p className="m-0">
            {img.size / 1024 < 1000
              ? (img.size / 1024).toFixed(1) + " KB"
              : (img.size / (1024 * 1024)).toFixed(1) + " MB"}
          </p>
        </div>
      </div>

      <div className="custom-progress">
        <span
         ref= {(e) => (progress.current[key] = e)} 
         className="progress-item"
         >
        </span>
      </div>
    </div>
  ));

  return (
    <>
      {loading && <Loading />}
      <Form className="w-100 p-5" onSubmit={HandleSubmit}>
        <h1 className="mb-5">Add</h1>

        <Form.Group>
          <Form.Label>category</Form.Label>
          <Form.Select
            name="category"
            value={form.category}
            onChange={handleChange}
            ref={focus}
          >
            <option disabled>Select Category</option>
            {categoriesShow}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="title..."
            name="title"
            value={form.title}
            onChange={handleChange}
            disabled={!sent}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="description..."
            name="description"
            value={form.description}
            onChange={handleChange}
            disabled={!sent}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>price</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="price..."
            name="price"
            value={form.price}
            onChange={handleChange}
            disabled={!sent}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rate">
          <Form.Label>rating</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="rating..."
            name="rate"
            value={form.rate}
            onChange={handleChange}
            disabled={!sent}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="discount">
          <Form.Label>discount</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="discount..."
            name="discount"
            value={form.discount}
            onChange={handleChange}
            disabled={!sent}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="about">
          <Form.Label>about</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="about..."
            name="About"
            value={form.About}
            onChange={handleChange}
            disabled={!sent}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="images">
          <Form.Label>about</Form.Label>
          <Form.Control
            multiple
            type="file"
            onChange={handleChangeImages}
            disabled={!sent}
          />
        </Form.Group>

        <div>{imagesShow}</div>

        <button
          disabled={form.title.length > 1 ? false : true}
          className="save-btn"
          type="submit"
        >
          SAVE
        </button>
      </Form>
    </>
  );
};

export default AddProduct;
