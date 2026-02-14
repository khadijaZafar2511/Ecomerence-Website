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
          return {
            ...state,
            cart: [
              ...state.cart,
             (state.cart.find((filter) => filter == action.payload))?"":action.payload
              
            ],
          };
        case "removecart":
          return {
            ...state,
            cart: [...state.cart.filter((filter) => filter != action.payload)],
            count: state.count - 1,
          };
        case "valueinc":
          return {
            ...state,
            value: {
              count1:
                state.value.count1 < 5
                  ? state.value.count1 + 1
                  : state.value.count1,
              id: action.payload,
            },
          };
        case "valuedec":
          return {
            ...state,
            value: {
              count1: state.value.count1 > 1 ? state.value.count1 - 1 : state.value.count1,
              id:action.payload
            }
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
        cart:[],
        value: {
          id: 0,
          count1:1
        }
       
    };
    

      const [state, dispatch] = useReducer(reducer, initialState);
    const[data,setData]=useState("")
    
  useEffect(() => {
    let fetchdata = async () => {
      const res = await fetch(
        "https://dummyjson.com/products?limit=10&skip=10&select=title,price,images,tags",
      );
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
          
            <GlobalContext.Provider value={{ state, dispatch ,initialState}}>
                {children}
            </GlobalContext.Provider>


        </>

    );

}