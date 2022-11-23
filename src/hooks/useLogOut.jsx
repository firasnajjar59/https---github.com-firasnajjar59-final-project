/** @format */

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from 'store/auth';
import { updateUserInfo } from 'store/userInfo';

const useLogOut = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  return () => {
    dispatch(logout());
    dispatch(updateUserInfo());
    localStorage.clear('token');
    history.push('/');
    console.log("hi");
  };
};

export default useLogOut;
