import { useState,useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/context1";
import { fetchurl } from "../Services/Productservice";

export default function Navbar() { 
  const [state1, setState1] = useState(false);
  const [input, setInput] = useState("");
  const [data1, setData1] = useState(null);
  function toggleHandle() {
    setState1(!state1);
  }
  const myvar = useContext(GlobalContext);
  const { state, dispatch } = myvar;
  const { count } = state;

  const handleinput = (e) => {
    setInput(e.target.value);
    console.log(input);
    dispatch({ type: "setquery", payload: e.target.value })
  };
 

  //   const token = localStorage.getItem("token");
  //   const options = {
  //     method:"GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization":token
  //     },
  //   };
  //   useEffect(() => {
  //     const fetchdata = async() => {
  //       const fdata = await fetchurl(input, input, options)
  //       const res= await fdata.json()
  //  }
  //     fetchdata();
  //   }, [])

  // const auth = () => {
  //   const token1 = localStorage.getItem("token");
  //   if (!token1) {
  //     navigate("/")
  //   }
  //   return token1;
  // };
  // const token = auth();
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     AUthorization: token,
  //   },
  // };
  
    

  // useEffect(() => {
   
  //   // console.log(fetchurl(input, options));
    
  //   const fetchdata = async () => {
  //     try {
  //       console.log(input)
  //       const data2 = await fetchurl(input, options);
  //       if (data2) {
  //         setData1(data2);
  //      dispatch({ type: "setdata", payload: data1 });
  //      dispatch({ type: "setloading" });
  //      console.log("navbar");
  //      console.log(data1);
  //         console.log(data1)
  //       }
         
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     fetchdata();
       
  //   };
  // },[state.data])


  return (
    <>
      <header className=" h-16 w-full bg-gray-800 text-gray-200 overflow-x-hidden   ">
        <nav className="h-16 w-full bg-gray-800 flex  px-3 ">
          <div1 className="  h-full lg:w-1/3 w-2/3 md:w-1/3 sm:w-1/3  flex items-center justify-start  ">
            <div
              onClick={toggleHandle}
              className=" w-7 mr-1 sm:mr-1 md:mr-2  sm:w-7 md:w-7  flex items-center   "
            >
              <img
                className=" h-6 w-10  lg:hidden "
                src="/main-menu (1).png   "
              />
            </div>
            <p className="font-semibold lg:text-3xl md:text-3xl text-xl text-blue-400 p-1  border-blue-400 rounded  border-t-3 border-b-3">
              Ecommerence
            </p>
          </div1>
          <div2
            onClick={toggleHandle}
            className={` absolute left-0 ${state1 ? "top-16" : "-top-full"} z-50 bg-gray-800 lg:w-22/24 w-full h-50 lg:h-16 lg:static  lg:flex  ml-0 lg:ml-6`}
          >
            <ul
              className="flex flex-col items-center justify-center gap-3 py-7 lg:[&>*:hover]:border-blue-400 lg:[&>*:hover]:rounded lg:[&>*:hover]:border-t-3 lg:[&>*:hover]:border-b-3
           *:flex lg:[&>*:focus]:border-blue-400 lg:[&>*:focus]:rounded lg:[&>*:focus]:border-t-3 lg:[&>*:focus]:border-b-3 lg:flex-row [&>*:hover]:text-blue-400 lg:[&>*:hover]:text-gray-200 lg:*:px-3 lg:*:py-2 "
            >
              <Link className="lg:px-4 lg:py-2" to="/home">
                Home
              </Link>
              <Link to="/home">Today's Deal</Link>
              <Link to="/home">Customer Services</Link>
            </ul>
          </div2>
          <div4 className="lg:flex lg:items-center   md:flex md:items-center sm:flex  sm:items-center hidden h-16 lg:w-2/3 md:w-1/2 sm:w-1/2 md:ml-1 md:mr-2">
            <input
              onInput={handleinput}
              className=" border-none w-15/17 h-12 bg-white text-blue-500"
            ></input>
            <div className="w-2/17 h-12 bg-gray-200 flex items-center justify-center">
              <img className="w-2/3   h-2/3" src="/Search (2).png" />
            </div>
          </div4>
          <div5 className="  h-16 w-full flex items-center justify-center lg:hidden md:hidden sm:hidden fixed top-16 left-0 bg-gray-800">
            <input
              onInput={handleinput}
              className=" border-none w-13/17 h-12 bg-white text-blue-500"
            ></input>
            <div className="w-2/17 h-12 bg-gray-200 flex items-center justify-center">
              <img className="w-2/3   h-2/3" src="/Search (2).png" />
            </div>
          </div5>

          <div3 className=" h-full w-1/2 lg:w-1/3 md:w-1/3 sm:w-1/3">
            <div className=" h-full w-full flex    justify-center items-center  md:gap-4 ">
              <p className=" h-4/5 w-1/2 lg:w-1/2 md:w-1/3 font-normal flex flex-col  items-center justify-center hover:text-blue-400 text-[12px] ">
                Returns
                <span className=" flex font-bold text-normal text-[15px] ">
                  & Orders
                </span>
              </p>
              <Link
                to="/cart"
                className="h-4/5  w-1/2 lg:w-1/2 md:w-1/4 flex items-center justify-center hover:border-blue-400 hover:rounded  hover:border-t-3 hover:border-b-3 "
              >
                <img src="/shopping-cart.png " className="w-auto h-9 " />
                <h1 className="flex items-center justify-end text-[15px] ">
                  Cart({count})
                </h1>
              </Link>
            </div>
          </div3>
        </nav>
      </header>
    </>
  );
}
