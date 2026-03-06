import { useState} from "react";
import Cardlist from "./components/Cardlist";
import Navbar from "./components/Navbar";
import Cartlist from "./components/Cartlist"
import Cardinfo from "./components/Cardinfo";
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import GlobalProvider from "./Context/context1"
import Home from "./components/Home"
import Register from "./components/register";
import Login from "./components/Login";

function App() {
  
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cartlist />} />
            <Route path="home/cardinfo/:id" element={<Cardinfo />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
