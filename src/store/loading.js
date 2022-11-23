import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:true,
}
const loadingSlice= createSlice({
    name:"loading",
    initialState,
    reducers:{
        finishLoading(state){
            state.loading=false
        },
        startLoading(state){
            state.loading=true
        }
    }
})

export const {finishLoading,startLoading} = loadingSlice.actions
export default loadingSlice.reducer