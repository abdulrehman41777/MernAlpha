import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "0",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "1",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2",
    uv: 2000,
    pv: 8800,
    amt: 2290,
  },
  {
    name: "3",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "4",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "5",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "6",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "7",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "8",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "9",
    uv: 2000,
    pv: 4800,
    amt: 2290,
  },
  {
    name: "10",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "11",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "12",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "6",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


function LineAreaChart() {
  return (
    <>
        <div className="col-lg-6 mx-auto mt-lg-0 mt-2">
          <div className="main-chart-container mx-auto">
            <h6 className="ms-2 mb-4">WEEKLY TRENDS</h6>

            <div style={{ width: "100%", height: "80%" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={300}
                  data={data}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 20,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid height={10} strokeDasharray="0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#1976D2"
                    fill="#1C61A9"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default LineAreaChart;
