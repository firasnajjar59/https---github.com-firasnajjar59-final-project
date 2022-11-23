import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isLogged:false,
    isBiz:false
}
const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        login(state){
            state.isLogged=true;
        },
        logout(state){
            state.isLogged=false;
            state.isBiz=false
        },
        isBussiness(state,{payload}){
            state.isBiz=payload
        }
    }
})
export const {login,isBussiness,logout}=authSlice.actions
export default authSlice.reducer