import axios from "axios";
import React from "react";
import { useContext, useEffect, useState } from "react";
import API_BASE_URL from "../../../config";
import { Col, Row, Table } from "react-bootstrap";
import Sidebar from "../../Sidebar";
import Topbar from "../../Topbar";
import myContext from "../../../context/context";

const ListCat = () => {
  const { close } = useContext(myContext);
  const [category, setCategory] = useState([]);

  const getCatList = async () => {
    try {
      await axios
        .get(`${API_BASE_URL}/category/all-category`)
        .then((response) => {
          setCategory(response.data);
          console.log(response);
        });
    } catch (error) {
      console.log(error, "unable to get cat list");
    }
  };

  useEffect(() => {
    getCatList();
  }, []);

  const deleteCat = async (id) => {
    try {
      await axios
        .delete(`${API_BASE_URL}/category/remove-category/${id}`)
        .then((response) => {
          console.log(response);
          getCatList();
        });
    } catch (error) {
      console.log(error, "unable to get cat list");
    }
  }

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
          </Row>
          {category?.map((category) => (
            <Row className="text-light">
              <Col>{category._id?.substring(10, 25)}</Col>
              <Col>{category?.type}</Col>
              <Col>
                <button className="text-white" onClick={() => deleteCat(category?._id)}>Delete Category</button>
              </Col>
            </Row>
          ))}
        </Table>
      </div>
    </>
  );
};

export default ListCat;
