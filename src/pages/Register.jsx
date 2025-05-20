import { useState } from "react";
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Register=()=>{
const nav=useNavigate();
const [username,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confPass,setConfPass]=useState('');
const userId='';
const avatar='';
const  channel='';

console.log(userId,avatar,channel)
       



async function sendData(e){
    e.preventDefault;
    try{

    const userdata= await axios.post('http://localhost:8080/registeruser',{username:username,email:email,password:password,userId:userId,avatar:avatar,channel:channel})
    console.log(userdata);
    nav('/login')
    }
    catch(err)
    {
        alert ("error",err)
    }

}


return (
 <div  className="w-screen  h-screen justify-items-center bg-gray-200 p-4">
 <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md  ">
<h2 class="text-2xl font-bold mb-6 text-amber-500 ">Register</h2>
<form action={sendData} >
<div class="mb-4">
<label for="name" class="block text-gray-700">Name</label>
<input type="text" id="name" name="name" value={username} class="w-full px-3 py-2 border text-gray-600 border-amber-500  rounded-lg focus:outline-none focus:ring focus:border-blue-300" onChange={(e)=> setName(e.target.value)} required />
</div>
<div class="mb-4">
<label for="email" class="block text-gray-700">Email</label>
<input type="email" id="email" name="email" value={email} class="w-full px-3 py-2 border text-gray-600 border-amber-500 rounded-lg focus:outline-none focus:ring focus:border-blue-300" onChange={(e)=> setEmail(e.target.value)} required />
</div>
<div class="mb-4">
<label for="password" class="block text-gray-700">Password</label>
<input type="password" id="password" name="password" value={password} class="w-full px-3 py-2 border text-gray-600 border-amber-500  rounded-lg focus:outline-none focus:ring focus:border-blue-300" onChange={(e)=> setPassword(e.target.value)} required />
</div>
<div class="mb-4">
<label for="confirm-password" class="block text-gray-700">Confirm Password</label>
<input type="password" id="confirm-password" name="confirm-password" value={confPass} class="w-full px-3 py-2 border text-gray-600 border-amber-500  rounded-lg focus:outline-none focus:ring focus:border-blue-300" onChange={(e)=>setConfPass(e.target.value)} required />
</div>
<button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">Register</button>
</form>
<lable className="justify-center text-black">Already have an Account? <Link to="/login" className="">Login now!</Link></lable>
</div>
 </div> 
)
}

export default Register; 