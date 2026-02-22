import { createContext, useReducer, useEffect, useState} from "react";

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
                cart: state.cart.map(p => (p.id == action.payload.id) ? { ...p , qty:p.qty+1 } : p)
              }
            else return {
              ...state,
              cart: [...state.cart, { ...action.payload, qty: 1 }]
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
        }
       
    };
    

      const [state, dispatch] = useReducer(reducer, initialState);
    const[data,setData]=useState("")
    
  useEffect(() => {
    let fetchdata = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      if (data) {
        dispatch({ type: "setdata", payload: data });
        dispatch({ type: "setloading" })
        setData(data)
      }

      
        
    };
    fetchdata();
  }, []);

    return (
      <>
      
        <GlobalContext.Provider value={{ state, dispatch, initialState }}>
          {children}
        </GlobalContext.Provider>
      </>
    );

}