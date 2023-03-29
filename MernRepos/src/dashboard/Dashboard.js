import { useContext } from "react";
import myContext from "../context/context";
import MainChart from "./Charts/MainChart";
import LineAreaChart from "./Charts/LineAreaChart";
import ChartPie from "./Charts/ChartPie";
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const { close } = useContext(myContext);

  return (
    <>
    <Topbar />
    <Sidebar />
    <div className={close ? "DashboardFull" : "Dashboard pb-5"}>
      <div className="container">
        <div className="row mx-auto mt-3">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="top_box top_box_1 m-2  mx-auto">
              <span>TOTAL CUSTOMERS</span>
              <h3>105</h3>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="top_box top_box_2 m-2 mx-auto">
              <span>AVG. QUAUE TIME</span>
              <h3>04:48</h3>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="top_box top_box_3 m-2 mx-auto">
              <span>AVG. SERVICE TIME</span>
              <h3>06:20</h3>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="top_box top_box_4 m-2 mx-auto">
              <span>LWOS</span>
              <h3>19</h3>
            </div>
          </div>
        </div>
        <MainChart/>
        <div className="row mt-3">
        <LineAreaChart/>
             <ChartPie/>
        </div>
      </div>
    </div>
    </>
  );
};



export default Dashboard;