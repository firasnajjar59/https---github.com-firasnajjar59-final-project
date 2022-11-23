import { configureStore } from "@reduxjs/toolkit";
import authReducer from "store/auth"
import loadingReducer from "store/loading"
import userInfoReducer from "store/userInfo"
const store= configureStore({
    reducer:{
        auth: authReducer,
        userInfo: userInfoReducer,
        loading: loadingReducer,
    }
})
export default store