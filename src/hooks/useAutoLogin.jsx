import axios from 'axios';
import { useDispatch } from 'react-redux';
import { isBussiness, login } from 'store/auth';
import { finishLoading } from 'store/loading';
import { updateUserInfo } from 'store/userInfo';

const useAutoLogin = () => {
    const dispatch=useDispatch()
  return ()=>{
    if(localStorage.getItem("token")){
        axios.get("/users/userInfo").then(res=>{
          dispatch(updateUserInfo(res.data))
          dispatch(login())
          dispatch(isBussiness(res.data.biz))
          dispatch(finishLoading())
        })
      }else{
        dispatch(finishLoading())
      }
  }
}

export default useAutoLogin