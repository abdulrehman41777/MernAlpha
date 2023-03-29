import React, { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../context/context";
import MenuList from "./SidebarContent/MenuList";

const Sidebar = () => {
  const { close, closeSidebar } = useContext(myContext);

  const menuData = [
    {
      title: "OPERATIONS",
      options: [
        "Car List",
        "Add car",
        "Update car",
        "Delete car",
      ],
      faClass: "fa fa-th-large",
      path: [
        "/dashboard/all-car",
        "/dashboard/addcar",
        "/dashboard/updatecar",
        "/dashboard/deletecar",
      ],
    },
    {
      title: "CATEGORIES",
      options: [
        "Add Category",
        "List Category",
        "Delete Category",
      ],
      faClass: "fa fa-th-large",
      path: [
        "/dashboard/category/addcat",
        "/dashboard/category/listcat",
        "/dashboard/category/deletecat",

      ],
    },
   
  ];

  return (
    <div className={close ? "sidebar-hide" : "sidebar"}>
      <div className="close">
        <span onClick={closeSidebar}>X</span>
      </div>
      <div className="sidebar-heading">
      <Link to="/dashboard">
      <h2 className="dashboar_logo text-light">Dahboard</h2>
      </Link>
      </div>
      <div className="sidebar-menu">
        <div className="menu">
          {menuData.map((data, index) => (
            <MenuList key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Sidebar;
