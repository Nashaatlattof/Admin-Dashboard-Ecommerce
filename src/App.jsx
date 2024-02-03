import "./App.css";
import Home from "./Pages/website/Home";
import Signup from "./Pages/Auth/Signup";
import { Routes, Route } from "react-router-dom";
import Users from "./Pages/Dashboard/Users";
import GoogleCallBack from "./Pages/Auth/GoogleCallBack";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { RequireAuth } from "./Pages/Auth/RequireAuth";
import User from "./Pages/Dashboard/User";
import AddUser from "./Pages/Dashboard/AddUser";
import Writer from "./Pages/Dashboard/Writer";
import Err404 from "./Pages/Auth/Err404";
import RequireBack from "./Pages/Auth/RequireBack";
import Categories from "./Pages/Dashboard/Categories";
import AddCategory from "./Pages/Dashboard/AddCategory";
import Category from "./Pages/Dashboard/Category";
import Test from "./Pages/Test";
import Products from "./Pages/Dashboard/Products";
import AddProduct from "./Pages/Dashboard/AddProduct";
function App() {
  return (
    <>
      <Routes>
        {/* puplic routs */}
        <Route path="/" element={<Home />}></Route>

        <Route element={<RequireBack />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Route>

        <Route
          path="/auth/google/callback"
          element={<GoogleCallBack />}
        ></Route>
        <Route path="/*" element={<Err404 />}></Route>
        {/* protected routs */}
        <Route element={<RequireAuth allowedRole={["1995", "1900", "1999"]} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route element={<RequireAuth allowedRole={"1995"} />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<User />} />
              <Route path="user/add" element={<AddUser />} />
            </Route>

            <Route element={<RequireAuth allowedRole={["1900", "1995"]} />}>
              <Route path="writer" element={<Writer />} />
            </Route>

            <Route element={<RequireAuth allowedRole={["1999", "1995"]} />}>
              <Route path="categories" element={<Categories />} />
              <Route path="category/add" element={<AddCategory />} />
              <Route path="categories/:id" element={<Category />} />
              <Route path="products" element={<Products />} />
              <Route path="product/add" element={<AddProduct />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
