import axios from "axios";
import React, {useState} from "react";
import API_BASE_URL from "../../config";


const UpdateModal = ({allCategory , setShow, car_id}) => {
    const [userInput, setUserInput] = useState({
        name: "",
        make: "",
        cmodel: "",
        color: "",
        category: "",
        registration: "",
      });
    

  const handleInputs = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(car_id, 'xxxxx modal form xxxxx');
    try {
        await axios.patch(`${ API_BASE_URL}/car/update-car/${car_id._id}`, userInput)
        alert('updated successfully');
    } catch (error) {
        console.log(error, 'Unable to update car!');
    }

  }


  return (
    <>
      <div className="modal-wrapper">
      <span className="close-modal" onClick={()=>setShow(false)}>X</span>
        <div className="form_container">
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                value={car_id.name}
                onChange={handleInputs}
              />
            </div>
            <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="make"
              placeholder="make"
              value={car_id.make}
              onChange={handleInputs}
            />
          </div>
          <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="cmodel"
            placeholder="cmodel"
            value={car_id.cmodel}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-3">
        <select
        defaultValue={"DEFAULT"}
        name="category"
        onChange={handleInputs}
      >
        <option value="DEFAULT" disabled>
          select category
        </option>
        {allCategory?.map((data) => (
          <option key={data._id} value={data.type}>
            {data.type}
          </option>
        ))}
      </select>
      </div>
      <div className="mb-3">
      <input
        type="text"
        className="form-control"
        name="registration"
        placeholder="registration"
        value={car_id.registration}
        onChange={handleInputs}
      />
    </div>
    <div className="mb-3">
    <input
      type="text"
      className="form-control"
      name="color"
      placeholder="color"
      value={car_id.color}
      onChange={handleInputs}
    />
  </div>


            <button type="submit" 
            className="btn btn-primary"
            onClick={handleUpdate}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
