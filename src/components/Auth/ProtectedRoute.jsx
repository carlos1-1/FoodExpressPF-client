import { Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Loading from '../Loading/Loading'

const ProtectedRoute = ({ component,...args})=>{
 <Route>
    component={withAuthenticationRequired(component,{
      onRedirecting:()=> <Loading />,
      loginOptions:{display:'popup'}
    })}
    {...args}
 </Route>

}

export default ProtectedRoute