import axios from 'axios';
import React from 'react'

import { useContext, useEffect, useState } from 'react';
import myContext from '../../context/context';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import API_BASE_URL from '../../config';
import { Col, Row, Table } from 'react-bootstrap';


const List = () => {
  const { close } = useContext(myContext);
  const [cars, setCars] = useState([]);


  console.log(cars, "alpha hereeddddddddddddddddddd")
 const getCatList = async () =>{
    try {
      await axios.get(`${API_BASE_URL}/car/cars`)
      .then((response) =>{
        setCars(response.data);
         console.log(response);
      })
    } catch (error) {
      console.log(error, "unable to get cat list");
    }
 }

 useEffect(() => {
   getCatList();
 }, [])

  return (
    <>
    <Topbar/>
    <Sidebar/>
    <div className={close ? "DashboardFull" : "Dashboard"}>
    <h1 className='text-light'>Alpha</h1>

    <Table>
<Row className='text-light'>
<Col>_id</Col>
<Col>Name</Col>
<Col>Make</Col>
<Col>Model</Col>
<Col>Color</Col>
<Col>Registration</Col>
<Col>Category</Col>
</Row>
{cars.map(car => (
<Row className='text-light'>
<Col>{car._id.substring(10, 25)}</Col>
<Col>{car.name}</Col>
<Col>{car.make}</Col>
<Col>{car.cmodel}</Col>
<Col>{car.color}</Col>
<Col>{car.registration}</Col>
<Col>{car.category}</Col>
</Row>

))}
</Table>
    </div>
    </>
    )
}

export default List;
