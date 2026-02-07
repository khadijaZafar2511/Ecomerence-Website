import { useEffect, useState} from "react";
import Cardlist from "./components/Cardlist";
import Navbar from "./components/Navbar";
// import Navbar2 from "./components/Navbar2";

function App() {
  const [data,setData] = useState("");


  useEffect(() => {
     let fetchdata = async () => {
       
       const res = await fetch(
         "https://dummyjson.com/products?limit=20&skip=10&select=title,price,images,tags",
       );
       const data = await res.json();
     
       setData(data)
       console.log(data)
      
     };
     fetchdata();
   
  }, [data])
 
    
  return (
    <>
      <Navbar />
      {/* <Navbar2 /> */}
      <Cardlist data={ data} />
    </>
  );
}

export default App;
