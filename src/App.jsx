
import Navbar from "./components/Navbar";
import Cartlist from "./components/Cartlist"
import Cardinfo from "./components/Cardinfo";
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Register from "./components/Register";
import Login from "./components/Login";
import Search from "./components/Search"
import Order from "./components/Order"
import GlobalProvider from "./Context/context1";
import CartProvider from "./Context/cartcontext";
import PopupProvider from "./Context/popupcontext";
import AuthProvider from "./Context/authcontext";
import ProtectedRoute from "./components/Protectedroute";
import Popupmodel from "./components/Popupmodel";
import Orderpage from "./components/Orderpage"
// import OrderHistory from "./components/Orderitem"
function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <PopupProvider>
              <GlobalProvider>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/pop" element={<Popupmodel />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/home/cardinfo/:id" element={<Cardinfo />} />
                  <Route path="/orderpage" element={<Orderpage />} />
                   {/* <Route path="/orderh" element={<OrderHistory/>} /> */}
                  <Route
                    path="/order"
                    element={
                      <ProtectedRoute>
                        <Order />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <ProtectedRoute>
                        <Cartlist />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </GlobalProvider>
            </PopupProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
