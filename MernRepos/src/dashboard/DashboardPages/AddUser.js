import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import  API_BASE_URL  from "../../config";
import myContext from "../../context/context";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

const AddUser = () => {
  const { close } = useContext(myContext);

  const [userInput, setUserInput] = useState({
    name: "",
    make: "",
    cmodel: "",
    color: "",
    category: "",
    registration: "",
  });

  const [allCategory, setAllCategory] = useState([]);

  const handleInputs = (e) => {

    setUserInput({ ...userInput, [e.target.name]: e.target.value });

  };

  const getCategory = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/category/all-category`);
      setAllCategory(response.data);
    } catch (error) {
      console.log(error, "unable to get cat list");
    }
  };

  const postNewCat = async (e) => {
    e.preventDefault()
    try {
      console.log(userInput, "i am here")
      await axios.post(`${API_BASE_URL}/car/post-car`, userInput );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <Topbar />
      <Sidebar />
      <div className={close ? "DashboardFull" : "Dashboard"}>
        <h1 className="text-light text-center">ADD NEW CAR </h1>
        <div className="form-container mx-auto">
          <form className="text-light">
            <div className="mb-3">
              <label className="form-label">CAR NAME</label>
              <input
                type="text"
                name="name"
                value={userInput.name}
                onChange={handleInputs}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CAR MAKE</label>
              <input
                type="text"
                name="make"
                value={userInput.make}
                onChange={handleInputs}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CAR MODAL</label>
              <input
                type="text"
                name="cmodel"
                value={userInput.cmodel}
                onChange={handleInputs}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CAR COLOR</label>
              <input
                type="text"
                name="color"
                value={userInput.color}
                onChange={handleInputs}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CAR REGISTRATION</label>
              <input
                type="text"
                name="registration"
                value={userInput.registration}
                onChange={handleInputs}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">CAR CATEGORIES</label>
              <br />
              <select
                defaultValue={"DEFAULT"}
                name="category"
                onChange={handleInputs}
              >
                <option value="DEFAULT" disabled>
                  select category
                </option>
                {allCategory.map((data) => (
                  <option key={data._id} value={data.type}>
                    {data.type}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={postNewCat}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
