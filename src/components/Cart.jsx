import { useContext ,useState} from "react";
import { GlobalContext } from "../Context/context1";

export default function Cart({ cart }) {
  
    const myvar = useContext(GlobalContext);
  const { dispatch, state } = myvar;
  const { value } = state;

  return (
    <>
      {cart && (
        <divm className="   min-h-full w-full flex flex-col gap-3  px-4 py-2">
          <div1 className=" shadow-gray-300 shadow-2xl w-full lg:w-2/3  flex items-center   h-55  ">
            <div className="bg-radial  from-[#c7c1B4] via-[#C4BEB0] to-[#9F9888] w-2/5 md:w-1/5 sm:w-1/5 lg:w-50 h-40">
              <img
                className="w-full h-full "
                src={cart.images[0] ? cart.images[0] : cart.images[1]}
              />
            </div>
            <div className="flex w-6/7 lg:w-full flex-col lg:flex-row ">
              <div className="h-full  w-full flex flex-col  px-4  gap-2">
                <p className="text-[15px] font-semibold lg:font-bold md:text-xl lg:text-xl flex">
                  {cart.title}
                </p>
                <p className="text-sm  text-gray-700 font-semibold">
                  PKR {cart.price}
                </p>
                <p className="text-gray-500 text-[10px] lg:text-sm md:text-sm">{`${cart.tags[0] ? cart.tags[0] : cart.title} | ${cart.tags[1] ? cart.tags[1] : cart.title}`}</p>
              </div>
              <div className="   flex ml-7 mt-8 lg:p-4 gap-5 lg:ml-10 ">
                <div className=" flex w-30 h-7 ">
                  <button
                    onClick={() => {
                      dispatch({type:"valuedec",payload:cart.id})
                    }}
                    className="w-1/4 h-7 border border-gray-300 bg-gray-300   flex items-center justify-center  rounded-l-xl"
                  >
                    <span className="text-4xl mb-2">-</span>
                  </button>
                  <input
                    type="text"
                    disabled
                    value={cart.id==value.id?value.count1:1}
                  
                    className="w-1/4  h-7 border border-gray-300 text-center "
                  />
                  <button
                    onClick={() => {
                     dispatch({type:"valueinc" , payload:cart.id})
                    }}
                    className="w-1/4 h-7 border border-gray-300 rounded-r-xl flex items-center justify-center"
                  >
                    <span className="text-2xl mb-2">+</span>
                  </button>
                </div>
                <button
                  onClick={() => {
                    dispatch({ type: "removecart", payload: cart });
                  }}
                  className="w-5 mt-1 h-5"
                >
                  <img src="/bin.png" />
                </button>
              </div>
            </div>
          </div1>
        </divm>
      )}
    </>
  );
}
