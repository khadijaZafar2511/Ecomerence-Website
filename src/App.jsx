import { useState} from "react";
import Cardlist from "./components/Cardlist";
import Navbar from "./components/Navbar";
import Cartlist from "./components/Cartlist"
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import  GlobalProvider from "./Context/context1"

function App() {
  
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Cardlist  />}
            />
            <Route path="/cart" element={<Cartlist />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
