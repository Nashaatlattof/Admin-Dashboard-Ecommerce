import React, { useEffect, useState } from 'react'
import { Axios } from '../../Api/Axios';
import { CAT, CATEGORY } from '../../Api/Api';
import TableShow from './Table';
import { NavLink } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';


const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [deleteUsers, setDeleteUsers] = useState(false);
    const [limit, setLimit]= useState(8);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState();

//Get All Categories
  useEffect(() => {
    setLoading(true);
    Axios.get(`/${CAT}?limit=${limit}&page=${page}`)
      .then((data) => {
        setTotal(data.data.total);
        setCategories(data.data.data);
        console.log(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [deleteUsers,limit, page]); 


   async function handleDelete(id) {
     try {
       const res = await Axios.delete(`/${CATEGORY}/${id}`);
       setDeleteUsers((prev) => !prev);
     } catch (error) {
       console.log(error);
     }
   }

  const header = [
    {
        key:"title",
      name: "category1",
    },
    {
        key:"image",
      name: "image",
    },
    {
        key:"created_at",
      name: "created",
    },
    {
        key:"updated_at",
      name: "updated",
    },
  ];

  return (
    <>
      <div className=" w-100  ">
        <div className="d-flex align-items-center justify-content-between p-3 bg-white mb-2">
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">Home</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Categories</Breadcrumb.Item>
          </Breadcrumb>

          <NavLink to="/dashboard/category/add" className="btn btn-success">
            Add Category
          </NavLink>
        </div>
        <div>
          {" "}
          <TableShow
            header={header}
            data={categories}
            handleDelete={handleDelete}
            limit={limit}
            page={page}
            setPage={setPage}
            setLimit={setLimit}
            loading={loading}
            total={total}
            searchingLink={CATEGORY}
          />
        </div>
      </div>
    </>
  );
}

export default Categories
