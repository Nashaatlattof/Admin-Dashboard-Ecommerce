import React, { useEffect, useState } from "react";
import { USER, USERS } from "../../Api/Api";

import { NavLink } from "react-router-dom";
import { Axios } from "../../Api/Axios";
import TableShow from "./Table";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [deleteUsers, setDeleteUsers] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
 const [limit, setLimit] = useState(3);
 const [page, setPage] = useState(2);
 const [loading, setLoading] = useState(false);
 const [total, setTotal] = useState();

  //Get All Users
  useEffect(() => {
    setLoading(true);
    Axios.get(`/${USERS}?limit=${limit}&page=${page}`)
      .then((data) => {
        setTotal(data.data.total);
        setUsers(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [deleteUsers, limit, page]);
  //Get Current User
  useEffect(() => {
    Axios.get(`${USER}`).then((data) => {
      setCurrentUser(data.data);
    });
  }, []);



  const header = [
   
    { key: "name",
      name: "Name" },
    { key: "email",
      name: "Email" },
    { key: "role",
      name: "Role" },
  ];

  async function handleDelete(id) {
    try {
      const res = await Axios.delete(`/${USER}/${id}`);
      setDeleteUsers((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="p-3  w-100 bg-white ">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Users</h1>
          <NavLink to="/dashboard/user/add" className="btn btn-primary">
            Add User
          </NavLink>
        </div>
        <TableShow
          header={header}
          data={users}
          handleDelete={handleDelete}
          currentUser={currentUser}
          limit={limit}
          page={page}
          setPage={setPage}
          setLimit={setLimit}
          loading={loading}
          total={total}
          searchingLink={'USER'}
        />
      </div>
    </>
  );
};

export default Users;
