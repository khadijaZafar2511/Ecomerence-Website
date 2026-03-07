import { Link } from "react-router-dom";
import { useState } from "react";
export default function Login() {
    const [logindata, setLogindata] = useState({ 
        email: "",
        password:""
    })
    const handlechange = (e) => {
        setLogindata({ ...logindata, [e.target.name]: (e.target.value) })
        console.log(logindata)
  }
    const handlesubmit =async (e) => {
        e.preventDefault();

        const res = await fetch(
          "https://ecomerence-backened.onrender.com/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(logindata),
          },
        );
        const data = await res.json();
        if (res.ok) {
            alert("login sucessfully")
            localStorage.setItem("token", data);
             window.location.href="/home"  
        } 
        

    }
    return (
      <>
        {/* <div className="flex justify-center mt-3  h-9">
          <h1 className="bg-green-500 text-white w-110 h-9 text-center  border rounded <%= magic %>  ">
            Login Successfully !
          </h1>
        </div> */}
        <div className="flex items-center justify-center lg:w-100 md:w-90 sm:w-90 w-80 m-auto">
          <div className="flex flex-col items-center mt-2 gap-4 lg:w-100  w-80 md:w-90 sm:w-90 border rounded">
            <div className="bg-gray-800 text-white lg:w-100 w-80 md:w-90 sm:w-90 h-15 text-xl font-semibold text-center py-4   ">
              <h1>Students Login Form</h1>
            </div>
            <form onSubmit={handlesubmit}>
              <div className="flex flex-col gap-4 lg:w-100 md:w-90 sm:w-90 w-80 *:flex *:flex-col  *:gap-2 ml-7">
                <div onChange={handlechange}>
                  <label>Enter your email</label>
                  <input
                    className="w-4/5 h-10  border-2"
                    name="email"
                    type="email"
                  />
                </div>
                <div onChange={handlechange}>
                  <label>Enter your password</label>
                  <input
                    className="w-4/5 h-10  border-2"
                    name="password"
                    type="password"
                  />
                </div>

                <button
                  className=" mb-2 ml-50 bg-blue-600 text-white h-10 w-20 py-2 border rounded font-semibold text-center"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
    
}