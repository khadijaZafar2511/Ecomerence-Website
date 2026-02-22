import { useContext, useState} from 'react';
import Cards from './Cards';
import Cardinfo from './Cardinfo';
import { GlobalContext  } from '../Context/context1';
import { Link } from 'react-router-dom';
// import Popup from "./Popup"

export default function Cardlist() {
  const[open , setOpen]=useState(true)
  
  const myvar = useContext(GlobalContext);
  const { state } = myvar;
  const { data, loading } = state;
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
        <div className=" h-full w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-y-6 px-2 py-20 lg:p-20 ">
          {data &&
            data.products.map((p) => (
              <Link to={`/cardinfo/${p.id}`}
                className="flex items-center  w-25/26"
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
      )}

    

      {/* <div className=" bg-green-200 w-full h-full ">
        {console.log(open)}
        <Popup open={{ open, setOpen }} />
      </div> */}
    </>
  );
      }


      
    
    


 