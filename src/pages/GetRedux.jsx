

import { useSelector } from 'react-redux';


function GetRedux() {




  const userEmaill=useSelector(state=>state.User.userEmail);
  const userPasswordd=useSelector(state=>state.User.userPassword);

  console.log(userEmaill)
  console.log(userPasswordd)



  return (
    <div>

      email: {userEmaill} <br/>
      password:{userPasswordd}

      
    </div>
  )
}

export default GetRedux;



