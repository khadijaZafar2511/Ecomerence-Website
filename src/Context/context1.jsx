import { createContext, useReducer, useEffect, useState } from "react";
import { fetchurl } from "../Services/Productservice";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

    function reducer(state, action) {
      switch (action.type) {
        case "setcount":
          return { ...state, count: state.count + 1 };

        case "setloading":
          return { ...state, loading: false };
        case "setdata":
          return { ...state, data: action.payload };
        case "setcart":
          // also try find  method
          const existing = state.cart.find((p) => p.id == action.payload.id)
          try {
            if (existing)
              return {

                // update qty here and search why its not updating here
                ...state,
                cart: state.cart.map(p => (p.id == action.payload.id) ? { ...p , qty:p.qty+action.qnty1 } : p)
              }
            else return {
              ...state,
              cart: [...state.cart, { ...action.payload, qty: action.qnty1 }]
            }
          }
          catch(err){console.log(err)}
             
         
        case "removecart":
          return {
            ...state,
            cart: [...state.cart.filter((filter) => filter != action.payload)],
            count: state.count - 1,
          };
        case "incvalue":
          
          return {
            ...state,
          
            cart:
              state.cart.map(p=> (p.id == action.payload.id) ?{ ...action.payload, qty:action.payload2} : p ) 
             
          };
        case "decvalue":
       
          return {
            ...state,
          
             cart:
              state.cart.map(p=> (p.id == action.payload.id) ?{ ...action.payload, qty:action.payload2} : p )
          };
        case "setquery":
          return {
            ...state , query:action.payload
          }
        default:
          return { ...state };
      }
    }
  
export default function GlobalProvider({ children }) {

      const initialState = {
        count: 0,
          data: "",
          loading: true,
        cart:[ ],
        value: {
          id: 0,
          count1: 1,
          prev:1
        },
        query:""
       
    };
    

      const [state, dispatch] = useReducer(reducer, initialState);
  const [datac, setDatac] = useState("")
  
  const navigate = useNavigate();
  const auth = () => {
    const token1 = localStorage.getItem("token");
    if (!token1) {
      navigate("/")
    }
    return token1;
}
     const token=auth()
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "AUthorization": token
      },
       

    };
    // if(body)
    // options.body=JSON.stringify(body)
      console.log(state);
  
  useEffect(() => {
   
    const fetchdata = async () => {
      const data1 = await fetchurl(state.query, options);
      setDatac(data1);
      console.log(data1);

      
      if (data1) {
        dispatch({ type: "setdata", payload: data1 });
        dispatch({ type: "setloading" });
        
      }

    };
    fetchdata();
    console.log(datac);
   
      console.log(state.query);
        
   
    
  }, [state.query]);

    return (
      <>
      
        <GlobalContext.Provider value={{ state, dispatch, initialState }}>
          {children}
        </GlobalContext.Provider>
      </>
    );

}