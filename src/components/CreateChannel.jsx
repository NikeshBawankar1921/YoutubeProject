import { useNavigate } from "react-router-dom"


function CreateChannel() {

const nav=useNavigate();

function userChannel()
{
nav("/userchannel")
}

  return (
      <div className='justify-items-center  w-screen h-screen text-black bg-gray-200 pt-8'>
        
           
            <div className="flex flex-col  w-70 p-4 h-fit rounded bg-white backdrop-blur-2xl ">
<div className="text-blue-500 font-bold justify-items-center"> Create Channel 

                <img className="rounded-full w-30 m-2" src="https://randomuser.me/api/portraits/women/2.jpg" alt="profile" />
               
</div>
<input type="file" id="myFile" name="filename" className="border rounded cursor-pointer text-blue-500"/>
                <h4 className="w-fit">Name</h4>
              <input className=" border rounded mb-2" type="email" />
                <h4 className="w-fit ">Handle</h4>
                <input className="border rounded " type="password" />
                
          
                <div className="flex justify-end">
                <div className="cursor-pointer  gap-5 ml-2 mr-2" >Cancel</div>
                <div className="cursor-pointer text-blue-500 gap-5 ml-2 mr-2" onClick={userChannel}>Create Channel</div>
                </div>
            </div>

        </div>
  )
}

export default CreateChannel
