import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    //Initial State
    name:'auth',
    initialState:{
        user:null
    },
    //reducers
    reducers:{
        //! Login
        loginAction:(state,action)=>{
            state.user=action.payload
        },
        //! Logout
        logoutAction:(state,action)=>{
            state.user=null
        },
    }
});

//! Generate the actions
export const {loginAction,logoutAction}=authSlice.actions;
//! Generate the reducer
const authReducer = authSlice.reducer;

export default authReducer;