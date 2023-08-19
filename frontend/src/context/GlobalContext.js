import React from "react";
import axios from 'axios';
const GlobalContext=React.createContext()
const BASE_URL="http://localhost:5000/";

export const GlobalProvider=({children})=>{
    return(
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}