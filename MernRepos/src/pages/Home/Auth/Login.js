import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../../config";

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    try {
      axios.post(`${API_BASE_URL}/auth/login`, userInput).then((res) => {
        console.log(res.data, "-------> This is Data", res.data.token);
        localStorage.setItem("user", res.data.token);
        alert("Logged In ");
        navigate("/");
      });
    } catch (error) {
      console.log(error);
      alert("Try With Correct Credentials");
    }
  };
  return (
    <>
      <div className="singup-wrapper">
        <h1 className="text-center display-4 text-light mb-3">Login</h1>
        <div className="signup-form">
          <form onSubmit={onLogin}>
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
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div className="text-light text-center mt-3">
              <span>
                Don't Have An Account? <Link to="/signup">Signup</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
