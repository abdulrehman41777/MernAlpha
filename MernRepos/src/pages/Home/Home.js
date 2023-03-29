import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const userAuth = localStorage.getItem("user");
    console.log(userAuth, "local storage");

    if (userAuth) {
      setUser(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(false);
  };

  return (
    <div>
      <h2 className="text-center text-light">Home</h2>
      <br />

      {user ? (
        <div>
          <button onClick={logout}>
            <h2 className="text-center">Logout</h2>
          </button>

          <Link to="/dashboard">
            <h2 className="text-center">Go to Dashboard</h2>
          </Link>
        </div>
      ) : (
        <>
          <Link to="/login">
            <h2 className="text-center">Login</h2>
          </Link>
          <Link to="/signup">
            <h2 className="text-center">Signup</h2>
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;
