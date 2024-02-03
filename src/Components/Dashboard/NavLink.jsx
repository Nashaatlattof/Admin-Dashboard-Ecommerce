import { faBarsProgress, faCartPlus, faCartShopping, faFolderPlus, faPlus, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";

export const Links = [
  {
    name: "Users",
    icon: faUsers,
    path: "users",
    role: "1995",
  },
  {
    name: "Add User",
    icon: faUserPlus,
    path: "user/add",
    role: "1995",
  },
  {
    name: "Categories",
    icon: faBarsProgress,
    path: "categories",
    role: ["1999", "1995"],
  },
  {
    name: "Add Category",
    icon: faFolderPlus,
    path: "category/add",
    role: ["1999", "1995"],
  },
  {
    name: "products",
    icon: faCartShopping,
    path: "products",
    role: ["1999", "1995"],
  },
  {
    name: "Add Product",
    icon: faCartPlus,
    path: "product/add",
    role: ["1999", "1995"],
  },
  {
    name: "Writer",
    icon: faPlus,
    path: "writer",
    role: ["1992", "1995"],
  },
];
