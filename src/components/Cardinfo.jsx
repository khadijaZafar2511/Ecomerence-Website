import { GlobalContext } from "../Context/context1";
import { useContext } from "react";
import { useParams } from "react-router-dom";


export default function cardinfo() {
    const myvar = useContext(GlobalContext);
    const { state,dispatch } = myvar;
    const { data} = state;
    const { id } = useParams();
    return (
      <>
        {/* <div className="h-screen w-full bg-pink-200">hello</div> */}

        {data.products.map((p) =>
          p.id != id ? null : (
            <div
              id="main"
              key={p.id}
              className="flex lg:flex-row md:flex-row sm:flex-row flex-col lg:gap-3 items-center   shadow-gray-300 shadow-2xl w-full h-screen  "
            >
              <div1 className="lg:h-full lg:w-1/2 md:h-full md:w-1/2  sm:h-full sm:w-1/2 h-4/7 w-full flex  justify-center lg:mt-35 md:mt-30 sm:mt-30 mt-5">
                <div className=" hidden h-9/10 w-3/10 lg:grid lg:grid-cols-1 py-7 px-7 *:w-30 *:h-40 gap-3   *:bg-radial *:from-[#c7c1B4] *:via-[#C4BEB0] *:to-[#9F9888] overflow-y-scroll">
                  <div className="h-full w-full">
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
                <div className=" lg:h-9/10 lg:w-7/10 md:h-2/5 md:w-5/6 sm:h-2/3 sm:w-2/3 h-full w-full  bg-radial from-[#c7c1B4] via-[#C4BEB0] to-[#9F9888]  ">
                  <img
                    src={p.images[0] ? p.images[0] : p.images[1]}
                    className="h-full  w-full "
                  />
                </div>
              </div1>
              <div2 className="  lg:h-full lg:w-1/2  md:h-full md:w-1/2  w-full flex lg:mt-35 md:mt-30 sm:mt-25 mt-3 justify-center ">
                <div className="w-full lg:h-9/10 md:h-7/10 h-9/11 bg-white flex flex-col ">
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
                        dispatch({ type: "setcart", payload: p }));
                    }}
                    className=" border rounded-3xl h-16 md:h-13 lg:h-20 lg:w-1/2 w-2/3 text-[13px] text-white bg-gray-800 mt-10 ml-20 "
                  >
                    Add To Cart
                  </button>

                  <div className="  lg:w-2/3 lg:h-full md:w-4/5 md:h-1/3 w-full h-2/3 lg:ml-3 md:ml-3 sm:ml-3 px-2 border-t border-t-gray-400 mt-7 text-sm  flex flex-col gap-3 overflow-y-scroll ">
                    <h1 className="text-gray-800 font-bold text-xl ml-2 mt-2">
                      Details
                    </h1>
                    <p>
                      <span className="text-gray-800 font-bold text-[15px] ">
                        Description :
                      </span>
                      {p.description}
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
                            PKR {Math.round(p.price)}
                          </p>
                          <p className="text-gray-500 text-[10px] lg:text-sm md:text-sm">
                            Quantity
                          </p>
                          <div className="flex gap-5 p-5">
                            <div className=" flex w-70 h-7 ">
                              <button
                                onClick={() => {
                                  dispatch({
                                    type: "decvalue",
                                    payload: p,
                                    payload2: p.qty > 1 ? --p.qty : p.qty,
                                  });
                                }}
                                className="w-1/4 h-7 border border-gray-300 bg-gray-300   flex items-center justify-center  rounded-l-xl"
                              >
                                <span className="text-4xl mb-2">-</span>
                              </button>
                              <input
                                type="text"
                                disabled
                                value={p.qty}
                                className="w-1/4  h-7 border border-gray-300 text-center "
                              />
                              <button
                                onClick={() => {
                                  dispatch({
                                    type: "incvalue",
                                    payload: p,
                                    payload2: p.qty < 5 ? ++p.qty : p.qty,
                                  });
                                }}
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
      </>
    );
}
