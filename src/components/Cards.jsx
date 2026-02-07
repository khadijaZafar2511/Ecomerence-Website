import { useState } from "react";


export default function Cards({data}) {
  return (
    <>
      {console.log(data.brand)}
      <div className="flex flex-col  gap-1  shadow-gray-300 shadow-2xl  ">
        <img
          src={data.images[0] ? data.images[0] : data.images[1]}
          className=" h-20/21 bg-radial  from-[#c7c1B4] via-[#C4BEB0] to-[#9F9888] w-full "
        />
        <p className="text-sm text-gray-500">{`${(data.tags[0])?data.tags[0]:data.title} | ${(data.tags[1])?data.tags[1]:data.title}`}</p>
        <h1 className="text-base font-semibold">{data.title}</h1>

        <div className="flex justify-between  items-center mb-2">
          <p className="text-sm text-gray-800 font-semibold">
            PKR {data.price}
          </p>
          <button className=" border rounded h-6 w-20 text-[13px] text-white bg-gray-800 mr-1">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
