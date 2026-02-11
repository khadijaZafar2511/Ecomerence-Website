import { createContext, useReducer, useEffect, useState} from "react";

export const GlobalContext = createContext();

    function reducer(state, action) {
      switch (action.type) {
        case "setcount":
          return { ...state , count: state.count + 1 };

        case "setloading":
              return {...state,  loading: false };
          case "setdata":
              return { ...state, data: action.payload }
          case "setcart":
              return{...state, cart:[ ...state.cart , action.payload]}
          default:
            return{...state}
      }
    }
  
export default function GlobalProvider({ children }) {

      const initialState = {
        count: 0,
          data: "",
          loading: true,
        cart:[]
    };
    

      const [state, dispatch] = useReducer(reducer, initialState);
    const[data,setData]=useState("")
    
  useEffect(() => {
    let fetchdata = async () => {
      const res = await fetch(
        "https://dummyjson.com/products?limit=20&skip=10&select=title,price,images,tags",
      );
      const data = await res.json();
      if (data) {
        dispatch({ type: "setdata", payload: data });
        dispatch({ type: "setloading" })
        setData(data)
      }

      
        
    };
    fetchdata();
  }, [data]);

    return (
        <>
          
            <GlobalContext.Provider value={{ state, dispatch ,initialState}}>
                {children}
            </GlobalContext.Provider>


        </>

    );

}