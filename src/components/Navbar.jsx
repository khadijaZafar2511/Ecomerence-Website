import { useState } from "react";



export default function Navbar() {
    const [state, setState] = useState(false);
    function toggleHandle() {
        setState(!state)
    }

  return (
    <>
      <header className=" h-16 w-full bg-gray-800 text-gray-200 ">
        <navbar className="h-16 w-full bg-gray-800 flex  px-3">
          <div className=" h-full lg:w-1/3 w-2/3  flex items-center justify-start  ">
            <div
              onClick={toggleHandle}
              className=" w-[6dvh] flex items-center justify-center  "
            >
              <img
                className=" h-[3dvh] w-[4dvh]  lg:hidden "
                src="/public/main-menu (1).png   "
              />
            </div>
            <p className="font-semibold lg:text-3xl md:text-3xl text-xl text-blue-400 p-1  border-blue-400 rounded  border-t-3 border-b-3">
              Ecommerence
            </p>
          </div>
          <div
            className={`absolute left-0 ${state ? "top-16" : "-top-full"} bg-gray-800 w-full h-50 lg:h-16 lg:static  lg:flex  ml-0 lg:ml-6`}
          >
            <ul
              className="flex flex-col items-center justify-center gap-3 py-7 lg:[&>*:hover]:border-blue-400 lg:[&>*:hover]:rounded lg:[&>*:hover]:border-t-3 lg:[&>*:hover]:border-b-3
            lg:[&>*:focus]:border-blue-400 lg:[&>*:focus]:rounded lg:[&>*:focus]:border-t-3 lg:[&>*:focus]:border-b-3 lg:flex-row [&>*:hover]:text-blue-400  lg:*:px-3 lg:*:py-2 "
            >
              <li className="lg:px-4 lg:py-2">Home</li>
              <li>Today's Deal</li>
              <li>Customer Services</li>
              <li>Shopping Cart</li>
            </ul>
          </div>
          <div className="  h-full w-1/2 lg:w-1/3 ">
            <div className=" h-full w-full flex md:justify-end lg:justify-end justify-center items-center  md:gap-2 ">
              <p className=" h-4/5 w-1/2 lg:w-1/3 md:w-1/4 font-normal flex flex-col  items-center justify-center hover:text-blue-400 text-[12px]">
                Returns
                <spam className=" flex font-bold text-normal text-[15px] ">
                  & Orders
                </spam>
              </p>
              <div className=" h-4/5  w-1/2 lg:w-1/3 md:w-1/4 flex items-center justify-center hover:border-blue-400 hover:rounded  hover:border-t-3 hover:border-b-3 ">
                <img src="/public/shopping-cart.png " className="w-auto h-9 " />
                <h1 className="flex items-center justify-end">Cart</h1>
              </div>
            </div>
          </div>
        </navbar>
      </header>
    </>
  );
}
