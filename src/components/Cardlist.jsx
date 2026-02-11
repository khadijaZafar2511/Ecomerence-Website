import { useContext } from 'react';
import Cards from './Cards';
import { GlobalContext } from '../Context/context1';

export default function Cardlist() {
  
  const myvar = useContext(GlobalContext);
  const { state } = myvar;
  const { data, loading } = state;
  return (
    <>
      {loading ? (
        <div className="  flex  flex-col mt-25 items-center justify-center">
          <img className="h-10 w-10" src="/loading1.gif" />
          <h1 className='font-semibold text-2xl mt-15'>Loading content  ......</h1>
        </div>
      ) : (
        <div className=" h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4  py-20 lg:p-20">
          {console.log(data)}

          {data &&
            data.products.map((p) => (
              <div key={p.id}>
                <Cards data={p} />
              </div>
            ))}
        </div>
      )}
    </>
  );
}
