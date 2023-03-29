import { useContext } from "react";
import { useLocation } from "react-router-dom";
import myContext from "../context/context";
const Topbar = () => {

  const { close, openSidebar } = useContext(myContext);
  // get url path to show on top bar
  const location = useLocation();
  let path = location.pathname.split('/');
  path.shift();
  let m = path[0]?.charAt(0).toLocaleUpperCase() + path[0]?.slice(1);
  let o = path[1]?.charAt(0).toLocaleUpperCase() + path[1]?.slice(1);

  
  return (
    <>
      <nav
        className={
          close
            ? "TopbarFull navbar"
            : "Topbar navbar"
        }
      >
        <div className="container-fluid topbarItems">
          <span className="navbar-brand" onClick={openSidebar} >
            {close ? <i class="fa fa-align-left" aria-hidden="true"></i> : ""}
          </span>
           <span className={close? `URLpathPadding topPath`: `URLpath topPath`}>
             {m? `${m} > ` : "Dashboard"} 
             {o? o : ""}
            </span> 
          <figure className="user_img">
            <img src="/img/user1.png" alt="user" width={45}/>
          </figure>
        </div>
      </nav>
    </>
  );
};



export default Topbar;