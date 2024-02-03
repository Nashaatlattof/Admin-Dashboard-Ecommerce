import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Form, Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PaginatedItems from "../../Components/Dashboard/pagination/Pagination";
import { Axios } from "../../Api/Axios";
import { useEffect, useState } from "react";


export default function TableShow({ header, data, handleDelete, currentUser, limit, page, setPage, setLimit, handleSearch, loading , total, searchingLink}) {
  const user = currentUser || {
    name: "",
  };

  /*   let paginateData = [];
  if (data.length !== 0) {
    for (let i = (page - 1) * limit; i < limit * page; i++) {
      paginateData.push(data[i]);
    }
  } */
  /* const start = (page - 1) * limit;
const end = Number(start) + Number(limit);
const final = data.slice(start, end);

const filterdData = final.filter((item) => item.title.toLowerCase().includes(search.toLocaleLowerCase())) */
 
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
   const dispalyedData = search.length > 0 ? filteredData : data;
   const [searchLoading, setSearchLoading] = useState(false);
const [results, setResults] = useState(false)

  async function getDataSearching() {
    try {
      const res = await Axios.post(`${searchingLink}/search?title=${search}`);
      console.log(res);
      setFilteredData(res.data);
    } catch (error) {
      console.log(error);
    } finally{
      setSearchLoading(false);
      setResults(false);
    }
  }
  console.log(filteredData);

  useEffect(() => {
    const debounce = setTimeout(() => {
    search.length > 0 ? getDataSearching() : setSearchLoading(false);
    }, 500);
    return () => clearTimeout(debounce);
  }, [search]);

  //Display Header Table
  const headerShow = header.map((item, key) => (
    <th  key={key}>
      {item.name}
    </th>
  ));
  //Display Body Table
  const dataShow = dispalyedData.map((item1, key) => (
    <tr key={key}>
      <td>{key + 1}</td>

      {header.map((item2, key2) => (
        <td key={key2}>
          {item2.key === "image" ? (
            <img width={"30px"} src={item1[item2.key]} />
          ) : item1[item2.key] === "1995" ? (
            "admin"
          ) : item1[item2.key] === "1992" ? (
            "writer"
          ) : item1[item2.key] === "1999" ? (
            "product manager"
          ) : item1[item2.key] === "2001" ? (
            "user"
          ) : (
            item1[item2.key]
          )}
          {user && item1[item2.key] === user.name && " (Your Acount )"}
        </td>
      ))}
      <td className="d-flex align-items-center gap-3">
        <Link to={`${item1.id}`}>
          <FontAwesomeIcon
            icon={faPen}
            style={{
              color: "gray",
              fontSize: "25px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          />
        </Link>
        {user.name !== item1.name && (
          <FontAwesomeIcon
            onClick={() => handleDelete(item1.id)}
            icon={faTrash}
            style={{ color: "red", fontSize: "25px", cursor: "pointer" }}
          />
        )}
      </td>
    </tr>
  ));

  return (
    <>
      <div className="d-flex flex-column bg-white p-3">
        <div className=" d-flex mb-2">
          <div className="col-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className=" mr-sm-2"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSearchLoading(true);
              }}
            />
          </div>
          <div className="col-1">
            <Form.Select
              onChange={(e) => {
                setLimit(e.target.value);
              }}
              aria-label="3"
            >
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </Form.Select>
          </div>
        </div>

        <Table  >
          <thead className="bg-success">
            <tr
            
              className="heading-table"
            
            >
              <th>Id</th>
              {headerShow}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="text-center" colSpan={12}>
                  <Spinner animation="border" size="sm" />
                </td>
              </tr>
            ) : searchLoading ? (
              <tr>
                <td className="text-center" colSpan={12}>
                  <Spinner animation="grow" />
                </td>
              </tr>
            ) : search.length > 0 ? (
              <tr>
                <td className="text-center" colSpan={12}>
                  no results found
                </td>
              </tr>
            ) : (
              dataShow
            )}
          </tbody>
        </Table>

        <div className="d-flex align-items-center justify-content-end flex-wrap ">
          <PaginatedItems
            setPage={setPage}
            itemsPerPage={limit}
            data={data}
            total={total}
          />
        </div>
      </div>
    </>
  );
}


