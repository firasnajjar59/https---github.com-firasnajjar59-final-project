/** @format */

import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom";

const LoginGuard = ({ component: Component, ...rest }) => {
  const isLogged = useSelector(state => state.auth.isLogged);
  return (
    <Route
      {...rest}
      render={props =>
        isLogged ? <Component {...props} /> : <Redirect to='/login'></Redirect>
      }
    />
  );
};

export default LoginGuard;
