import { createSlice } from "@reduxjs/toolkit";
const initialState={
    userInfo:""
}
const userInfoSlice= createSlice({
    name:"userInfo",
    initialState,
    reducers:{
        updateUserInfo(state,{payload}){
            !state.userInfo?state.userInfo=payload:state.userInfo="";
        }
    }
})
export const {updateUserInfo}=userInfoSlice.actions
export default userInfoSlice.reducer