import Auth from "./components/Auth";
import Home from "./components/Home";
import { ChakraProvider } from '@chakra-ui/react';
import { useUserContext } from "./context/UserContext";
import { useEffect } from "react";

function App() {
  const {auth}=useUserContext();
  
  return (
    <ChakraProvider>
      {auth?<Home/>:<Auth/>}
    </ChakraProvider>
  );
}


export default App;
