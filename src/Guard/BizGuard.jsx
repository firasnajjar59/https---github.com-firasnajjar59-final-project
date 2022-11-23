import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom";

const BizGuard = ({component:Component,...rest}) => {
    const isBiz=useSelector(state=>state.auth.isBiz)
  return (
    <Route {...rest} render={(props)=>
        isBiz?<Component {...props}/>:<Redirect to="/login"></Redirect>
    }/>
  )
}

export default BizGuard