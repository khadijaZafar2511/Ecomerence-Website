import Cart from "./Cart"
import { useContext } from "react";
import { GlobalContext } from "../Context/context1";
import { useNavigate } from "react-router-dom";
export default function Cartlist() {
      const myvar = useContext(GlobalContext);
        const { state} = myvar;
  const { cart } = state;
  const navigate = useNavigate();
    return (
      <>
        <div className=" h-full w-full grid grid-col-1 gap-3">
          {(console.log(cart))}
          {cart.length!=0 ? 
            cart.map((p) => (
              <div key={p.id}>
                <Cart cart={p} />
              </div>
            ))
          : 
          <div className="w-full min-h-screen ">
            <h1 className="text-2xl font-semibold  ml-150 mt-50">
              No items in cart yet
            </h1>
            <button onClick={()=>{ navigate("/")}} className="h-15 w-80 border rounded-4xl text-gray-200 bg-gray-800 mt-10 ml-135 ">
              Continoue To Shopping
            </button>
          </div>
          }
        </div>
      </>
    );
}
