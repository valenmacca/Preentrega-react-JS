import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import NavBar from "./component/NavBar/NavBar";

const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
  );
};

export default App;
