import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const useCheckRoles = async (email) =>  {
  const {data} = await axios('user/',{params:{email:email}}) 
  

  if(data){
    if(!data.banned){
      var isAdmin = data.type_user==='Admin'?true:false
    }else isAdmin ='banned'
  }

  
  
  return isAdmin
}

export default useCheckRoles;