import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        password:"",
    });
    const hndleinput = (e) => {
        setFormdata({ ...formdata,[ e.target.name ]:(e.target.value) })
        console.log(JSON.stringify( formdata ));
 }

   
    const handlesubmit = async (e) => {
        e.preventDefault()
     const res = await fetch("http://localhost:3000/auth/register", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(formdata),
       
     });
        const data = await res.json()
        if (res.ok) {
            alert("registration successfull") 
          window.location.href="/login"   }
        else alert("registration failed")
    }
    
    

    return (
      <>
        {/* <div className="flex justify-center mt-3  h-9"><h1 className="bg-green-500 text-white w-110 h-9 text-center  border rounded <%= magic %>  ">Form Submitted Successfully !</h1></div> */}
        <div className="flex items-center justify-center  lg:w-100 md:w-90 s,:w-90 w-80 m-auto ">
          <div className="flex flex-col items-center mt-2 gap-4  lg:w-100  md:w-90 sm:w-90 w-80 border rounded">
            <div className="bg-gray-800  text-white w-80  md:w-90 sm:w-90 lg:w-100 h-15 text-xl font-semibold text-center py-4  ">
              <h1>Students Info Form</h1>
            </div>
            <form onSubmit={handlesubmit}>
              <div className="flex flex-col gap-4 *:flex *:flex-col  *:gap-2 md:w-90 sm:w-90 lg:w-100 w-80 ml-5 *:w-full">
                <div className="flex flex-col gap-2" onInput={hndleinput}>
                  <label>Enter your name</label>
                  <input
                    className="w-4/5 h-10  border-2"
                    name="name"
                    type="text"
                  />
                </div>
                <div onInput={hndleinput}>
                  <label>Enter your email</label>
                  <input
                    className="w-4/5 h-10  border-2"
                    name="email"
                    type="email"
                  />
                </div>
                <div>
                  <label>Enter your age</label>
                  <input
                    className="w-4/5 h-10  border-2"
                    age="age"
                    type="text"
                  />
                </div>
                <div onInput={hndleinput}>
                  <label>Enter your password</label>
                  <input
                    className="w-4/5 h-10 border-2"
                    name="password"
                    type="password"
                  />
                </div>
                <div>
                  <label>Enter your adress</label>
                  <input
                    className="w-4/5 h-10 border-2"
                    adress="adress"
                    type="text"
                  />
                </div>
                <div>
                  <div className="flex flex-row">
                    <div className="w-3/5"> Alredy have an account?<a className="ml-1 text-blue-900 font-medium"  href="/login">login</a> </div>
                    <button
                      className=" mb-2  bg-blue-600 text-white h-10 w-1/4 py-2 border rounded font-semibold text-center"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}


   
