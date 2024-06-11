import Navbar from "./components/Navbar/Navbar";
import React from 'react'
import Home from "./components/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Details from "./components/Details/Details";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



