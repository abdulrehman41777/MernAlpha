import { createContext, useState } from "react";


const myContext = createContext();

export const AppProvider = ({children})=>{

   const [close, setClose] = useState(false);

   const openSidebar = ()=>{
    setClose(false);
   }

   const closeSidebar = ()=>{
    setClose(true);
   }


    return (
       <myContext.Provider 
          value={{
            close,
            openSidebar,
            closeSidebar
          }}
       >
        {children}
       </myContext.Provider>
    );
}

export default myContext;