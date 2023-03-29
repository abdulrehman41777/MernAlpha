import React, { useState } from "react";
import { NavLink} from "react-router-dom";

const MenuList = ({ data }) => {
  const [openDropDown, setDropDown] = useState(true);
 

  return (
    <>
      <div className="menu-items mb-4">
        <div
          className="menu-head d-flex justify-content-between dropdown dropdown-6"
          onClick={() => setDropDown(!openDropDown)}
        >
          <h3>
            <i class={data.faClass} aria-hidden="true"></i>
            &nbsp;{data.title}
          </h3>

          {openDropDown ? (
            <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
          )}
        </div>
        <ul
          className={
            openDropDown
              ? "drop-down-show nested-list"
              : "drop-down nested-list"
          }
        >
          {data.options.map((items, index) => (
            <NavLink
              activeclassname="active"
              key={index}
              className="without_active"
              to={data.path[index]}
            >
              <li>{items}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuList;
