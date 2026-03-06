import Cardlist from "./Cardlist";
import { useContext,useState,useEffect } from "react";
import { GlobalContext } from "../Context/context1";
import { fetchurl } from "../Services/Productservice";
import { useSearchParams } from "react-router-dom";

export default function Home() {
   const myvar = useContext(GlobalContext);
    const { state,dispatch } = myvar; 
  const { data, loading } = state;
  const [data1, setData1] = useState(null);
     const [searchParams] = useSearchParams();
     const title = searchParams.get("title")|| "";
     const id = searchParams.get("id")|| "";

   const auth = () => {
     const token1 = localStorage.getItem("token");
     if (!token1) {
       window.location.href = "/";
     }
     return token1;
   };
   const token = auth();
   const options = {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
       AUthorization: token,
     },
   };
   useEffect(() => {
     try {
       const fetchdata = async () => {
         const data2 = await fetchurl(id, title, options);
         if (data2) {
               setData1(data2);
         }
     
       };
       fetchdata();
       
    if (data1) {
      dispatch({ type: "setdata", payload: data1 });
      dispatch({ type: "setloading" });
      
    }
     } catch (err) {
       console.log(err);
     }
   }, []);

  return (
    <>
      {/* {console.log(loading)} */}
      {/* {console.log(data)} */}
    
      {loading  ? (
        <div className="  flex  flex-col mt-25 items-center justify-center ">
          <img className="h-10 w-10" src="/loading1.gif" />
          <h1 className="font-semibold text-2xl mt-15">
            Loading Products ......
          </h1>
        </div>) : 
       (
      <div className="w-full h-full lg:px-2 lg:py-20 md:py-20 gap-4  ">
          <div
              
            className=" grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 "
          >
            <Cardlist  />
          </div>
      </div>
        )}
    </>
  );
}

