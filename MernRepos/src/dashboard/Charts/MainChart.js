import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: '10:00',
    service: 2400,
    LWOS: 2400,
  },
  {
    name: '11:00',
    service: 1398,
    LWOS: 2210,
  },
  {
    name: '12:00',
    service: 9800,
    LWOS: 2290,
  },
  {
    name: '13:00',
    service: 3908,
    LWOS: 2000,
  },
  {
    name: '14:00',
    service: 4800,
    LWOS: 2181,
  },
  {
    name: '15:00',
    service: 3800,
    LWOS: 2500,
  },
  {
    name: '16:00',
    service: 4300,
    LWOS: 2100,
  },
  {
    name: '17:00',
  },{
    name: '18:00',
  },{
    name: '19:00',
  },{
    name: '20:00',
  },{
    name: '21:00',  
  },{
    name: '22:00',
  },
];


const MainChart = () => {
  return (
    <>
     <div className="row mt-3">
          <div className="col-12">
            <div className="main-chart-container mx-auto">
              <h6 className="ms-2">
                LWOS {"("} LEAVES WITHOUT SERVICES {")"}
              </h6>
              <div className="chart-nav">
                <div class="btn-group me-2">
                  <button
                    class="btn chart-nav-btn btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gender
                  </button>
                  <ul class="dropdown-menu">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul>
                </div>
                <div class="btn-group me-2">
                  <button
                    class="btn chart-nav-btn btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   Age
                  </button>
                  <ul class="dropdown-menu">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul>
                </div>
                <div class="btn-group me-2">
                  <button
                    class="btn chart-nav-btn btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   Ethnicity
                  </button>
                  <ul class="dropdown-menu">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul>
                </div>
                <div class="btn-group me-2">
                  <button
                    class="btn chart-nav-btn btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   Attrie
                  </button>
                  <ul class="dropdown-menu">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul>
                </div>
                <div class="btn-group me-2">
                  <button
                    class="btn chart-nav-btn btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   Compare
                  </button>
                  <ul class="dropdown-menu">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul>
                </div>
              </div>
              <div style={{ width: "100%", height: "80%" }}>
      <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 0,
          bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar  barSize={10} barGap={8} dataKey="service" stackId="a" fill="#1A65B4" />
        <Bar  barSize={10} barGap={8} dataKey="LWOS" stackId="a" fill="#CD4D4D" />
      </BarChart>
    </ResponsiveContainer> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default MainChart;