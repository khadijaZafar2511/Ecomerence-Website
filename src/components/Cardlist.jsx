import { useContext, useState,useRef} from 'react';
import Cards from './Cards';
import { GlobalContext  } from '../Context/context1';
import { Link } from 'react-router-dom';
import {ArrowL,ArrowR} from './Arrow';
// import Popup from "./Popup"

export default function Cardlist() {
  const [open, setOpen] = useState(true);
  const scrollleft=useRef(null)
  
  const myvar = useContext(GlobalContext);
  const { state } = myvar;
  const { data, loading } = state;

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
      {loading && open ? (
        <div className="  flex  flex-col mt-25 items-center justify-center">
          <img className="h-10 w-10" src="/loading1.gif" />
          <h1 className="font-semibold text-2xl mt-15">
            Loading Products ......
          </h1>
        </div>
      ) : (
        <div className="w-full h-full lg:px-2 lg:py-20 md:py-20 gap-4 flex items-center">
            <div className="hidden lg:block">
              {/* <ArrowL handle={scrollRight}/> */}
            {/* Aroow left */}
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
            ref={scrollleft}
            className="  h-full w-full grid    lg:auto-cols-[minmax(220px,1fr)]  grid-flow-col md:auto-cols-[minmax(200px,1fr)]   sm:auto-cols-[minmax(200px,1fr)]  auto-cols-[minmax(185px,1fr)]   p-2  overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden "
          >
            {data &&
              data.products.map((p) => (
                <Link
                  to={`/cardinfo/${p.id}`}
                  className="flex items-center mb-3  w-25/26"
                  // onClick={() => {
                  //   setOpen(false);
                  //   console.log(open);
                  // }}
                  key={p.id}
                >
                  <Cards data={p} />
                </Link>
              ))}
          </div>
          <div className="hidden lg:block">
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
      )}
    </>
  );
}
      

           


      
    
    


 