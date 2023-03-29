import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { AppProvider } from "./context/context";
import { routes, AuthRoutes } from "./routes/routes";

function App() {
  const element = useRoutes(routes);
  const authelement = useRoutes(AuthRoutes);

  
  const [user, setUser] = useState(false);

  useEffect(() => {
    let userExist = localStorage.getItem("user");
    
    if (userExist) {
      setUser(true);
    } 

  }, []);

  return (
    <>
      <AppProvider>

      {
        user ? authelement :  element
      }
      
      </AppProvider>
    </>
  );
}

export default App;
