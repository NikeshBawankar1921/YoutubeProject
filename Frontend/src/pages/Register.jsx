import { useState } from "react";
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Register=()=>{
const nav=useNavigate();
const [username,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confPass,setconfPass]=useState('');


const userId='';
const avatar='';
const  channel=[];


       



async function sendData(e){
 e.preventDefault();
if(username =="" || email==""|| password=="" || confPass=="")return alert("Input cannot be Empty!")
if(password!=confPass) return alert("password did not match") 
    try{

    const userdata= await axios.post('http://localhost:5000/registeruser',{username:username,email:email,password:password,userId:userId,avatar:avatar,channel})
    console.log(userdata);
    nav('/login')
    }
    catch(err)
    {
        alert (err.response.data.message )
    }

}


return (
    <div className="w-screen  h-screen justify-items-center bg-gray-200 p-4">
 <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-gray-800">
<h2 className="text-2xl font-bold mb-6 text-center text-amber-500  ">Registration</h2>

<div className="mb-4">
<label htmlFor="email" className="block text-gray-900">Name</label>
<input onChange={(e)=>setName(e.target.value)} value={username} type="text" id="text" name="username" className="w-full px-3 py-2 border text-black border-amber-500  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
</div>
<div className="mb-4">
<label htmlFor="email" className="block text-gray-900">Email</label>
<input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" id="email" name="email" className="w-full px-3 py-2 border text-black border-amber-500  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
</div>
<div className="mb-6">
<label htmlFor="password" className="block text-gray-900">Password</label>
<input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" id="password" name="password" className="w-full px-3 py-2 border text-black border-amber-500  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
</div>
<div className="mb-6">
<label htmlFor="password" className="block text-gray-900">Confirm Password</label>
<input onChange={(e)=>setconfPass(e.target.value)} value={confPass} type="password" id="password" name="password" className="w-full px-3 py-2 border text-black border-amber-500  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
</div>
<button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={sendData}  >Register</button>

<label className="justify-center">Already have an Account? <Link to="/login" >Login</Link></label>
</div>
 </div> 
  );
}

export default Register; 