import React, { useEffect, useState } from "react";
import { Axios } from "../../Api/Axios";
import { PRO, Pro } from "../../Api/Api";
import TableShow from "./Table";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [deleteProducts, setDeleteProducts] = useState(false);

  console.log(products);
  //Get All Categories
  useEffect(() => {
    Axios.get(`/${PRO}`)
      .then((data) => {
        console.log(data.data)
        setProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [deleteProducts]);

  async function handleDelete(id) {
    try {
      const res = await Axios.delete(`/${Pro}/${id}`);
      setDeleteProducts((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  }

  const header = [
   
    {
      key: "title",
      name: "tilte",
    },
    {
      key: "description",
      name: "description",
    },
    {
      key: "price",
      name: "price",
    },
    {
      key: "About",
      name: "About",
    },
    {
      key: "discount",
      name: "discount",
    },
  ];

  return (
    <>
      <div className="p-3  w-100 bg-white ">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Products Page</h1>
          <NavLink to="/dashboard/product/add" className="btn btn-primary">
            Add Product
          </NavLink>
        </div>
        <TableShow
          header={header}
          data={products}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Products;
