import { createContext, useEffect, useState } from "react";
import { fetchurl } from "../Services/Productservice";

 export const AuthContext = createContext();
 

export default function AuthProvider({ children }){
    const [userdata, setUserdata] = useState(null)
    const [loading,setLoading]=useState(true)
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };

    useEffect(() => { 
        try { 
              const fetchuser = async () => {
                  const userd = await fetch(
                    "https://ecomerence-backened.onrender.com/me",
                    options,
                  );
                const user = await userd.json();
                if (user) {
                  setUserdata(user);
                 
                } else {
                  setUserdata(null);
                }
              };
            fetchuser();
        } catch (err) {
            console.error(err)
        } finally {
             setLoading(false);
        }
      
    },[])
    return (
      <AuthContext.Provider value={{ userdata, setUserdata, loading }}>
        { children }
        </AuthContext.Provider>
    );
}