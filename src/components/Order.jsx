import { useEffect, useState } from "react";
import { fetchurl } from "../Services/Productservice";
import { useLocation,Link } from "react-router-dom";
export default function Order() {
  const location = useLocation()
  const [saveinfo, setSaveinfo] = useState(false)
  const [isopen, setIsopen] = useState(false)
  const [formdata, setFormdata] = useState(null);
 
  let address;
  const handlerChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: (e.target.value) })
  }
  const products = location.state?.products;
  const productArray = products
    ? products.map((p) =>
    ({
      product: p.product._id,
      name: p.product.title,
      price: p.product.price,
      quantity: p.quantity
     
    }))
    : [];
  
  console.log(productArray);
  
  
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ formdata, productArray }),
  };
  const handlerOrder = async (e) => {
    e.preventDefault()
    const fetchorder = await fetch("http://localhost:3000/order", options);
    const orderdata = await fetchorder.json()
    console.log(orderdata)
  }






  const infohandler = () => {
    // setSaveinfo(true)
  }

  const showpopup = () => {
    setIsopen(true)
  }
 

 
if(!products) return (
  <div className="w-full min-h-screen overflow-hidden flex flex-col items-center justify-center  ">
    <p className=" mr-2 lg:text-2xl text-xl font-semibold text-gray-700 mb-5">
      Move to
      <Link to="/home" className="text-blue-500">
        <span> HOME</span>
      </Link>
    </p>
    <button className="tracking-wider text-sm font-semibold lg:h-15 lg:w-80 h-13 w-60 border rounded-4xl text-white bg-blue-500">
      YOU HAVE NOT ORDER YET
    </button>
  </div>
);

     return (
       <>
         <div className=" min-h-screen bg-gray-100 py-4 px-4 lg:px-15 md:px-2 sm:px-4 grid grid-cols-1  md:grid-cols-6  gap-5 mt-15 sm:mt-10">
           <div className="w-full md:col-span-4   ">
             {saveinfo ? (
               <div className=" h-40 space-y-4 bg-white">
                 <div className="flex justify-between py-2 px-5 border-b border-gray-200 font-medium bg-gray-50 text-gray-700">
                   <p> Shipping & Billing</p>
                   <button onClick={showpopup} className="text-blue-500">
                     EDIT
                   </button>
                 </div>
                 <div className="flex flex-col gap-3 px-4 text-sm font-semibold text-gray-600">
                   <p>
                     <span className="mr-3">khadija zafar</span> 03408725796
                   </p>
                   <p>chak no 118/9-l, Sahiwal , Punjab</p>
                 </div>
               </div>
             ) : (
               <div className=" p-8 rounded-xl shadow-lg space-y-9 text-left bg-white">
                 <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">
                   User Profile
                 </h2>
                 <form className="space-y-7">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col">
                       <div className="text-sm font-semibold text-gray-600 mb-1">
                         First Name
                       </div>
                       <input
                         type="text"
                         name="firstname"
                         onChange={handlerChange}
                         placeholder="Enter first name"
                         className="py-2 px-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                       />
                     </div>
                     <div className="flex flex-col">
                       <div className="text-sm font-semibold text-gray-600 mb-1">
                         Last Name
                       </div>
                       <input
                         type="text"
                         name="lastname"
                         onChange={handlerChange}
                         placeholder="Enter last name"
                         className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                       />
                     </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col">
                       <div className="text-sm font-semibold text-gray-600 mb-1">
                         Email
                       </div>
                       <input
                         type="email"
                         name="email"
                         onChange={handlerChange}
                         placeholder="Enter your email"
                         className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                       />
                     </div>
                     <div className="flex flex-col">
                       <div className="text-sm font-semibold text-gray-600 mb-1">
                         Address
                       </div>
                       <input
                         type="text"
                         name="address"
                         onChange={handlerChange}
                         placeholder="Enter your adress"
                         className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                       />
                     </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col">
                       <div className="text-sm font-semibold text-gray-600 mb-1">
                         City
                       </div>
                       <input
                         type="text"
                         name="city"
                         onChange={handlerChange}
                         placeholder="Enter your city"
                         className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                       />
                     </div>
                     <div className="flex flex-col">
                       <div className="text-sm font-semibold text-gray-600 mb-1">
                         Select your province
                       </div>
                       <select
                         name="province"
                         onChange={handlerChange}
                         className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none "
                       >
                         <option value="Punjab">Punjab</option>
                         <option value="Sindh">Sindh</option>
                         <option value="Balochistan">Balochistan</option>
                         <option value="K.P.K"> K.P.K</option>
                       </select>
                     </div>
                   </div>

                   <div className="pt-4 flex gap-5">
                     <button
                       onClick={infohandler}
                       type="submit"
                       className="w-auto bg-blue-500 text-white px-12 py-2 rounded-md hover:bg-blue-600 transition"
                     >
                       Save
                     </button>
                     <button
                       type="button"
                       className="px-12 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                     >
                       Cancel
                     </button>
                   </div>
                 </form>
               </div>
             )}

             {/* p.product details */}
             {products.map((p) => (
               <div1
                 key={p.product._id}
                 className="w-full bg-white mt-4 text-gray-700 font-semibold space-y-5 grid sm:grid-cols-5 grid-cols-3 "
               >
                 <img
                   className="h-30 w-35 p-2"
                   src={
                     p.product.images[0]
                       ? p.product.images[0]
                       : p.product.images[1]
                   }
                 />
                 <div className="md:col-span-4 sm:col-span-3 col-span-2 space-y-4 ">
                   <p className="mt-3 text-gray-600">
                     {p.product.title}/{p.product.brand}/
                     {p.product.description.slice(0, 25)}...
                   </p>
                   <div className="flex justify-between   ">
                     <p className="flex  flex-col md:flex-row  md:gap-7 md:text-xl text-sm">
                       <span className="text-orange-400 ">
                         Rs. {p.product.price - 100}
                         <span className="line-through text-gray-400 font-normal md:text-[15px] text-sm">
                           Rs. {p.product.price}
                         </span>
                       </span>
                       <span className="text-gray-600 md:text-[16px]">
                         Qty : {p.quantity || 1}
                       </span>
                     </p>
                     <img className="h-4 w-4 mr-3" src="/bin.png" />
                   </div>
                 </div>
               </div1>
             ))}
           </div>

           {/* Container div2 */}

           <div className="w-full md:col-span-2  bg-white h-100 p-4">
             <div className="text-gray-800  py-5    border-b flex justify-between">
               <p className="text-xl font-semibold ">
                 Invoice and Contact Info
               </p>
               <button className=" text-blue-500  font-medium ">EDIT</button>
             </div>

             <h1 className=" text-gray-800  font-medium p-4">Order Summary Info</h1>

             <div className="text-gray-500 text-sm font-medium flex flex-col gap-4 *:flex *:justify-between">
               <p>
                 Total items :<span>Rs. 2</span>
               </p>
               <p>
                 Delivery Fee :<span>Rs. 200</span>
               </p>
               <p className="text-gray-800 mt-8 py-2 border-t border-gray-300">
                 Total:<span>400</span>
               </p>
             </div>

             <button
               onClick={handlerOrder}
               className="bg-gray-900 text-white px-12 lg:px-21 md:w-auto py-3 rounded w-auto  mt-4"
             >
               Proceed to Pay
             </button>
           </div>
         </div>
       </>
     );
};


