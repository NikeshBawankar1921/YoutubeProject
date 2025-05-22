import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login =()=>{

    
const nav=useNavigate()
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');


async function submit(e){
e.preventDefault();

     try {
      const userdata = await axios.post("http://localhost:5000/loginUser", {
        email,
        password,
      });
    const { token, user } = userdata.data;
    if (token) {
        // Store token in sessionStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("logedin", true);
    }
    console.log(userdata);
  
     nav('/')
    
   
    }
    catch(err)
    {
        alert(err.response.data.message ? err.response.data.message: "enternal error");
        
    }


}


return (
 <div className="w-screen  h-screen justify-items-center bg-gray-200 p-4">
 <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-gray-800">
<h2 className="text-2xl font-bold mb-6 text-center text-amber-500  ">Login</h2>
{/* <form action={submit} > */}
<div className="mb-4">
<label htmlFor="email" className="block text-gray-900">Email</label>
<input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" id="email" name="email" className="w-full px-3 py-2 border border-amber-500  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
</div>
<div className="mb-6">
<label htmlFor="password" className="block text-gray-900">Password</label>
<input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" id="password" name="password" className="w-full px-3 py-2 border border-amber-500  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
</div>
<button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={submit}>Login</button>
{/* </form> */}
<label className="justify-center">Don't have an Account? <Link to="/register" className="text-sky-500 font-bold">Register now!</Link></label>
</div>
 </div> 
)
}

export default Login;