import { useNavigate } from "react-router-dom"


function Login() {
    const nav=useNavigate()

    function Signup()
    {
        nav("/signup")
    }
    return (
        <div className='justify-items-center h-screen  w-screen min-h-screen text-black bg-gray-200'>
            
           <h1 className="text-blue-500"> LogIn </h1>
            <div className="grid  pl-10 pr-10   w-fit p-4 h-fit rounded bg-white backdrop-blur-2xl mt-8">

                
                <h4 className="w-fit">Email:</h4>
                <input className=" border rounded mb-2" type="email" />
                <h4 className="w-fit ">Password:</h4>
                <input className="border rounded " type="password" />
                <button className="m-2 mt-10 text-white" >LogIn</button>
                Don't have an Account? <div className="cursor-pointer text-blue-500" onClick={Signup} >SignUp</div>
            </div>

        </div>

    )
}

export default Login
