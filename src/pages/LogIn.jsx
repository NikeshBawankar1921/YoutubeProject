import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login =()=>{

    
const nav=useNavigate()
const [email,setEmail]=useState();
const [password,setPassword]=useState();
async function submit(e){


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
        alert(err.response.data.message);
        
    }


}


return (
 <div className="w-screen  h-screen justify-items-center bg-gray-200 p-4">
 <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-gray-800">
<h2 class="text-2xl font-bold mb-6 text-center text-amber-500  ">Login</h2>
<form action={submit} method="POST">
<div class="mb-4">
<label for="email" class="block text-gray-900">Email</label>
<input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" id="email" name="email" class="w-full px-3 py-2 border border-amber-500  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
</div>
<div class="mb-6">
<label for="password" class="block text-gray-900">Password</label>
<input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" id="password" name="password" class="w-full px-3 py-2 border border-amber-500  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
</div>
<button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Login</button>
</form>
<lable className="justify-center">Don't have an Account? <Link to="/register" className="">Register now!</Link></lable>
</div>
 </div> 
)
}

export default Login;