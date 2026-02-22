import { useContext } from "react";
import { GlobalContext } from "../Context/context1";

export default function Cards({ data }) {
  const myvar = useContext(GlobalContext);
  const {  dispatch } = myvar;

  return (
    <>
      <div className="flex flex-col   shadow-gray-300 shadow-2xl w-full   ">
        <div className=" h-50  lg:h-60  bg-radial from-[#c7c1B4] via-[#C4BEB0] to-[#9F9888] w-full">
          <img
            src={data.images[0] ? data.images[0] : data.images[1]}
            className="h-full  w-full"
          />
        </div>
        <div className="h-28 flex flex-col gap-1">
          <p className=" px-1 mt-2 text-sm text-gray-500">{`${data.tags[0] ? data.tags[0] : data.title} | ${data.tags[1] ? data.tags[1] : data.title}`}</p>
          <h1 className=" px-1 lg:text-[15px] text-sm text-gray-700 font-semibold">
            {data.title}
          </h1>

          <div className="flex justify-between  items-center mb-3">
            <p className=" px-1 text-[13px] text-gray-500 font-semibold">
              PKR {data.price}
            </p>
            {/* <button
            onClick={() => {
             (dispatch({ type: "setcount" }),
               dispatch({ type: "setcart", payload: data}));
            }}
            className=" border rounded lg:h-7 lg:w-20 h-9 w-25 text-[13px] text-white bg-gray-800 mr-3"
          >
            Add To Cart
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
