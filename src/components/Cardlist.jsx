
import Cards from './Cards';
export default function Cardlist({ data }) {
    // const products = [
    //   { id: 1, name: "Laptop", price: "1200" },
    //   { id: 2, name: "mouse", price: "300" },
    //   { id: 3, name: "mobile phone", price: "1000" },
    //   { id: 4, name: "computer", price: "900" },
    //   { id: 5, name: "shirt", price: "200" },
    //   { id: 6, name: "jacket", price: "150" },
    //   { id: 7, name: "shoes", price: "300" }
    // ];
   

  return (
    <>
      <div className=" h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4  py-20 lg:p-20">
        { console.log(data )}
             
        {
         data &&
      
         data.products.map((p) => (<div key={p.id}>
            
            <Cards data={p} />
          </div>)
        )
          }
      </div>
    </>
  );
}
