import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_BASE_URL from "../../../config";

const Signup = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInputs = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const onSignUp = (e) => {
    e.preventDefault();
    try {
      axios.post(`${API_BASE_URL}/auth/register`, userInput).then((res) => {
        console.log(res.data);
        alert("Signup successful");
        navigate('/login');
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="singup-wrapper">
        <h1 className="text-center display-4 text-light mb-3">Sign Up</h1>
        <div className="signup-form">
          <form onSubmit={onSignUp}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Username"
                value={userInput.name}
                onChange={handleInputs}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={userInput.email}
                onChange={handleInputs}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={userInput.password}
                onChange={handleInputs}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                value={userInput.confirm_password}
                onChange={handleInputs}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Signup
              </button>
            </div>
            <div className="text-light text-center mt-3">
              <span>
                {" "}
                Already Member? <Link to="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
