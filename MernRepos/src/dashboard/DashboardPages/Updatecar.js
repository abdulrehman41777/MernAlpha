import axios from "axios";
import React from "react";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/context";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import API_BASE_URL from "../../config";
import { Col, Row, Table } from "react-bootstrap";
import UpdateModal from "../Components/UpdateModal";

const Updatecar = () => {
  const { close } = useContext(myContext);
  const [cars, setCars] = useState([]);
  const [show, setShow] = useState(false);
  const [car_id, setCar_id] = useState();
  const [allCategory, setAllCategory] = useState([]);

  const getCategory = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/category/all-category`);
      setAllCategory(response.data);
    } catch (error) {
      console.log(error, "unable to get cat list");
    }
  };

  console.log(cars, "alpha hereeddddddddddddddddddd");
  const getCatList = async () => {
    try {
      await axios.get(`${API_BASE_URL}/car/cars`).then((response) => {
        setCars(response.data);
        console.log(response);
      });
    } catch (error) {
      console.log(error, "unable to get cat list");
    }
  };

  useEffect(() => {
    getCatList();
    getCategory();

  }, []);

  const handleButton = (id) => {
    setShow(true);
    setCar_id(id);
  };

  return (
    <>
      <Topbar />
      <Sidebar />
      <div className={close ? "DashboardFull" : "Dashboard"}>
        <h1 className="text-light">Alpha</h1>

        <Table>
          <Row className="text-light">
            <Col>_id</Col>
            <Col>Name</Col>
            <Col>Make</Col>
            <Col>Model</Col>
            <Col>Color</Col>
            <Col>Registration</Col>
            <Col>Category</Col>
            <Col>Select</Col>
          </Row>
          {cars.map((car) => (
            <Row className="text-light">
              <Col>{car._id.substring(10, 25)}</Col>
              <Col>{car.name}</Col>
              <Col>{car.make}</Col>
              <Col>{car.cmodel}</Col>
              <Col>{car.color}</Col>
              <Col>{car.registration}</Col>
              <Col>{car.category}</Col>
              <Col>
                <button
                  className="text-white"
                  onClick={() => handleButton(car)}
                >
                  Update
                </button>

               

              </Col>
            </Row>
          ))}
          </Table>
          {show ? <UpdateModal allCategory={allCategory} setShow={setShow} car_id={car_id} /> : ""}
      </div>
    </>
  );
};

export default Updatecar;
