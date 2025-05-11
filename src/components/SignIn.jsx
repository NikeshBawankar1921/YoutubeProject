import { useNavigate } from "react-router-dom"


function SignIn() {
    const nav=useNavigate()

    function login()
    {
        nav("/login")
    }
    return (
        <div className='justify-items-center h-screen  w-screen min-h-screen text-black bg-gray-200'>
            
           <h1 className="text-blue-500"> SignUp </h1>
            <div className="grid  pl-10 pr-10   w-fit p-4 h-fit rounded bg-white backdrop-blur-2xl mt-8">

                <h4 className="w-fit mb-2">Name:</h4>
                <input className=" border rounded mb-2 " type="text" />
                <h4 className="w-fit">Email:</h4>
                <input className=" border rounded mb-2" type="email" />
                <h4 className="w-fit ">Password:</h4>
                <input className="border rounded " type="password" />
                <button className="m-2 mt-10 text-white" >SignUp</button>
                Already have an Account? <div className="cursor-pointer text-blue-500" onClick={login} >Login</div>
            </div>

        </div>

    )
}

export default SignIn
