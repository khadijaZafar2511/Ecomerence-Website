
import {useState } from "react"

export default function Navbar2() {
  const [state, setState] = useState(false)
 


  function toggleHandler() {
    setState(!state);
   
  }
  
 

  

  return (
    <>
      <div className="  border index-50 px-5 w-full   bg-gray-800 text-gray-300 font-semibold text-sm">
        <div className="h-16 flex ">
          <div
            onClick={toggleHandler}
            className=" w-[7dvh] flex items-center justify-center mr-2 lg:hidden "
          >
            <img className="h-[4dvh] w-[7dvh]" src="/main-menu (1).png" />
          </div>
          <p className="flex items-center justify-center   text-3xl">
            Ecommerence
          </p>
          <div className={`lg:w-11/13 lg:flex lg:static absolute ${state? "top-16":"-top-full"} left-0 bg-gray-600  lg:bg-gray-800 w-full` }>
            <div className="h-full w-full">
              <ul className="  h-full w-full lg:gap-2 gap-4 flex  lg:flex-row   flex-col  items-center lg:ml-2 lg:py-0 py-3 [&>*:hover]:border [&>*:hover]:rounded  [&>*:hover]:border-t-3 [&>*:hover]:border-b-3">
                <li className=" h-4/5 w-1/6 flex justify-center items-center   hover:rounded  hover:border-t-3 hover:border-b-3 ">
                  Home
                </li>
                <li className="  whitespace-nowrap h-4/5 w-1/5 flex justify-center items-center ">
                  Today's deal
                </li>
                <li className=" whitespace-nowrap h-4/5 w-1/4 flex justify-center items-center  ">
                  Customer Services
                </li>
                <li className=" whitespace-nowrap h-4/5 w-1/5 flex justify-center items-center ">
                  Shopping Cart
                </li>
              </ul>
            </div>
          </div>
          <div className="h-16  w-3/5 flex justify-center items-center">
            {/* <input
              type="text"
              className=" h-10 w-5/6   bg-white focus:border-none  outline-0 text-black text-base"
              placeholder="Ecommerence Search"
            />

            <div className="w-1/13 mr-5  bg-gray-200 h-10 flex items-center justify-center border ">
              <img src="/public/search.png" className="h-2/3 w-full" />
            </div> */}
          </div>

          <div className="w-1/5 flex items-center ml-0 gap-1 mr-0">
            <p className=" h-4/5 w-1/2 flex items-center justify-center font-bold hover:border hover:rounded  hover:border-t-3 hover:border-b-3 text-sm">
              Returns & Orders
            </p>
            <div className=" h-4/5 w-1/2 flex items-center justify-center hover:border hover:rounded  hover:border-t-3 hover:border-b-3 ">
              <img src="/public/shopping-cart.png " className="w-auto h-9 " />
              <h1 className="flex items-center justify-end">Cart</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
