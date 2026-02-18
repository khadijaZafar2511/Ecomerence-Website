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
        {console.log(cart)}
        <div className="mt-4 h-full w-full grid grid-col-1 gap-3">
          {cart && cart.length != 0 ? (
            cart.map((p) => (
              <div  key={p.id}>
                <Cart cart={p} />
              </div>
            ))
          ) : (
            <div className="w-full min-h-screen overflow-hidden flex flex-col items-center justify-center  ">
              <h1 className="lg:text-2xl text-xl font-semibold text-gray-700 mb-10">
                No items in cart yet
              </h1>
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="tracking-wider text-sm font-semibold lg:h-15 lg:w-80 h-13 w-60 border rounded-4xl text-gray-200 bg-gray-800  mb-30"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          )}
        </div>
      </>
    );
}
