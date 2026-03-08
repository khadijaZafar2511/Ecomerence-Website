import { GlobalContext } from "../Context/context1";
import { useContext ,useState,useRef, useEffect} from "react";
import { useParams } from "react-router-dom";
import Cardlist from "./Cardlist";
import { fetchurl } from "../Services/Productservice";


export default function cardinfo() {
const [p, setP ]= useState(null)
  const myvar = useContext(GlobalContext);
  const scrollleft = useRef(null);
  const { state, dispatch } = myvar;
  const { data } = state;
  const { id } = useParams();
  const [qnty, setQnty] = useState(1)
  const token = localStorage.getItem("token")
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization":token
    }
  }
  

  
 const scrollLeft = () => {
   // Increase scrollLeft by a set amount (e.g., 300px)
   if (scrollleft.current) {
     scrollleft.current.scrollLeft += 300;
   }
 };
 const scrollRight = () => {
   // Increase scrollLeft by a set amount (e.g., 300px)
   if (scrollleft.current) {
     scrollleft.current.scrollLeft -= 300;
   }
 };
  return (
    <>
      {/* <div className="h-screen w-full bg-pink-200">hello</div> */}

      {data &&
        data.map((p) =>
          p.id != id ? null : (
            <div
              id="main"
              key={p.id}
              className="flex lg:flex-row md:flex-row sm:flex-row flex-col lg:gap-3 items-center    w-full h-screen overflow-y-auto md:overflow-y-visible sm:overflow-y-visible lg:overflow-y-visible"
            >
              <div1 className="lg:h-full lg:w-1/2 md:h-full md:w-1/2  sm:h-full sm:w-1/2 h-4/7 w-full flex  justify-center  lg:mt-35 md:mt-30 sm:mt-30 mt-2">
                <div className=" h-full lg:grid lg:grid-cols-1 lg:*:w-30  lg:*:h-40 *:mt-1 md:hidden sm:hidden  *:bg-radial *:from-[#c7c1B4] *:via-[#C4BEB0] *:to-[#9F9888] overflow-y-scroll  [&::-webkit-scrollbar]:w-1    [&::-webkit-scrollbar-track]:bg-gray-100  [&::-webkit-scrollbar-thumb]:bg-gray-500  [&::-webkit-scrollbar-thumb]:rounded-none  overflow-x-hidden">
                  <div className="h-full w-full mr-1">
                    {/* //h-9/10 w-3/10 */}
                    <img
                      src={p.images[2] ? p.images[2] : p.images[1]}
                      className="h-full  w-full"
                    />
                  </div>
                  <div>
                    <img
                      src={p.images[0] ? p.images[0] : p.images[1]}
                      className="h-full  w-full"
                    />
                  </div>
                  <div>
                    <img
                      src={p.images[1] ? p.images[1] : p.images[0]}
                      className="h-full  w-full"
                    />
                  </div>
                  <div>
                    <img
                      src={p.images[2] ? p.images[2] : p.images[1]}
                      className="h-full  w-full"
                    />
                  </div>
                </div>
                <div className="hidden lg:block md:block sm:block lg:h-9/10 lg:w-7/10 md:h-5/6 md:w-9/10 sm:h-4/5 sm:w-9/10 h-full w-full  bg-radial from-[#c7c1B4] via-[#C4BEB0] to-[#9F9888] lg:ml-4 ">
                  <img
                    src={p.images[0] ? p.images[0] : p.images[1]}
                    className="h-full  w-full "
                  />
                </div>
              </div1>
              <div2 className="  lg:h-full lg:w-1/2  md:h-full md:w-1/2  w-full flex lg:mt-35 md:mt-30 sm:mt-25  justify-center ">
                <div className="w-full lg:h-9/10 md:h-7/10 h-full bg-white flex flex-col ">
                  <p className=" px-1 mt-2 text-sm text-gray-500">{`${p.tags[0] ? p.tags[0] : p.title} | ${p.tags[1] ? p.tags[1] : p.title}`}</p>
                  <h1 className=" px-1  text-2xl text-gray-700 font-bold font-sans">
                    {p.title}
                  </h1>
                  <p className="mt-2  px-1 text-xl text-gray-700 font-semibold ">
                    PKR {p.price}
                  </p>
                  <p className=" px-1 mt-1 text-[13px] text-gray-700">
                    SKU: 1-26-130-A-E
                  </p>

                  <button
                    onClick={() => {
                      (dispatch({ type: "setcount" }),
                        dispatch({
                          type: "setcart",
                          payload: p,
                          qnty1: qnty,
                        }));
                    }}
                    className=" border rounded-4xl h-16 md:h-20 lg:h-20 lg:w-1/2 w-4/5 text-[13px] text-white bg-gray-800 mt-10 lg:ml-20  ml-9"
                  >
                    Add To Cart
                  </button>

                  <div className="  lg:w-3/4 lg:h-4/5 md:w-3/4 md:h-7/8 sm:w-4/5 sm:h-1/3 w-full h-2/3 lg:ml-3 md:ml-3 sm:ml-3 px-2 border-t border-t-gray-400 mt-7 text-sm  flex flex-col gap-3 overflow-y-scroll  [&::-webkit-scrollbar]:w-1    [&::-webkit-scrollbar-track]:bg-gray-100  [&::-webkit-scrollbar-thumb]:bg-gray-500  [&::-webkit-scrollbar-thumb]:rounded-none ">
                    <h1 className="text-gray-800 font-bold text-xl ml-2 mt-2">
                      Details
                    </h1>
                    <p>
                      <span className="text-gray-800 font-bold text-[15px] mr-1">
                        Description :
                      </span>
                      <span className="text-[13px]">{p.description}</span>
                    </p>
                    <p>
                      <span className="text-gray-800 font-bold text-[15px]">
                        Attributes
                      </span>
                      <p>
                        <span className="text-gray-800 font-bold text-[12px] mr-1">
                          Brand :
                        </span>
                        {p.brand}
                      </p>
                      <p>
                        <span className="text-gray-800 font-bold text-[12px] mr-1">
                          Rating :
                        </span>
                        {p.rating}
                      </p>
                      <p>
                        <span className="text-gray-800 font-bold text-[12px] mr-1">
                          Stock :
                        </span>
                        {p.stock}
                      </p>
                      <p>
                        <span className="text-gray-800 font-bold text-[12px] mr-1">
                          Warranty :
                        </span>
                        {p.warrantyInformation}
                      </p>
                    </p>

                    <div3 className="h-20/21 w-full border-t border-t-gray-400 mt-4 flex">
                      <div className="h-full  w-1/3 flex items-center justify-center">
                        <img
                          className=" h-6/7 w-9/10 bg-radial  from-[#c7c1B4] via-[#C4BEB0] to-[#9F9888]"
                          src={p.images[0] ? p.images[0] : p.images[1]}
                        />
                      </div>
                      <div className=" w-2/3">
                        <div className="h-full  w-full flex flex-col  px-4  gap-2">
                          <p className="text-[15px] font-semibold   mt-2 text-gray-900 flex">
                            {p.title}
                          </p>
                          <p className="text-sm  text-gray-700 font-semibold">
                            {/* PKR {Math.round(p.price * p.qty)} */}
                            PKR {Math.round(p.price * qnty)}
                          </p>
                          <p className="text-gray-500 text-[10px] lg:text-sm md:text-sm">
                            Quantity
                          </p>
                          <div className="flex gap-5 lg:p-5">
                            <div className=" flex w-70 h-7 ">
                              <button
                                onClick={() => setQnty(qnty - 1)}
                                className="w-1/4 h-7 border border-gray-300 bg-gray-300   flex items-center justify-center  rounded-l-xl"
                              >
                                <span className="text-4xl mb-2">-</span>
                              </button>
                              <input
                                type="text"
                                disabled
                                value={qnty}
                                className="w-1/4  h-7 border border-gray-300 text-center "
                              />
                              <button
                                onClick={() => setQnty(qnty + 1)}
                                className="w-1/4 h-7 border border-gray-300 rounded-r-xl flex items-center justify-center"
                              >
                                <span className="text-2xl mb-2">+</span>
                              </button>
                            </div>
                            <p className="w-40 text-gray-500">
                              Stock : {p.stock}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div3>
                  </div>
                </div>
              </div2>
            </div>
          ),
        )}
      <div className=" mt-8 text-center font-bold text-xl">
        <span>you may like</span>
      </div>
      <div className="w-full flex items-center justify-center ">
        <div className="hidden lg:block mr-4">
          {/* //               <ArrowL handle={scrollRight}/> */}
          {/* Aroow left */}{" "}
          <button>
            <svg
              viewBox="0 0 10 17"
              fill="none"
              xmlns="http://www.w3.org"
              className="w-4 h-8.25 transition-colors duration-200 "
            >
              <path
                d="  M8.5 1.5L1.5 8.5L8.5 15.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400 hover:text-blue-500"
                onClick={scrollRight}
              />
            </svg>
          </button>
        </div>

        <div
          className=" mt-10  h-full w-10/11 grid    lg:auto-cols-[minmax(220px,1fr)]  grid-flow-col md:auto-cols-[minmax(200px,1fr)]   sm:auto-cols-[minmax(200px,1fr)]  auto-cols-[minmax(185px,1fr)]   p-2  overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
          ref={scrollleft}
        >
          <Cardlist />
        </div>

        <div className="hidden lg:block ml-4">
          {/* Aroow right */}

          <svg
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org"
            className="w-4 h-8.25 transition-colors duration-200"
          >
            <path
              d="M1.5 1.5L8.5 8.5L1.5 15.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 hover:text-blue-500"
              onClick={scrollLeft}
            />
          </svg>
        </div>
      </div>
    </>
  );

}
