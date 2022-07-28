import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Home from "./components/Home";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {

  return (
    <Box bgColor='brand.black'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App