import { createContext,useContext, useReducer, useEffect } from "react";
import { AuthContext } from "./authcontext";

 export const PopupContext = createContext()
function reducer(state, action) {
    switch (action.type) {
        case "setOpen":
            return {
                ...state,
                open: action.payload
            }
        case "setRegister":
            return {
              ...state,
              isregister: action.payload,
            }
        case "setLogin":
            return {
              ...state,
              islogin: action.payload,
            }
        default : return state

    }    
    }
export default function PopupProvider({ children }) {
const { userdata } = useContext(AuthContext);
    const initialState = {
        open: false,
        isregister: false,
        islogin:false
    }
   const [ state, dispatch2]=useReducer(reducer,initialState) 

    useEffect(() => {
        if (userdata)  {
                  dispatch2({ type: "setOpen", payload: false });
                  dispatch2({ type: "setLogin", payload:false });
                  dispatch2({ type: "setRegister", payload: false });
        }

     },[userdata])


    return (
        <PopupContext.Provider value={{state, dispatch2}}>
            {children}
        </PopupContext.Provider>
    )
}