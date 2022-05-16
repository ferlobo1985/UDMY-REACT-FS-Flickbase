import { createSlice } from '@reduxjs/toolkit';
import { 
    registerUser,
    signInUser,
    isAuth,
    signOut,
    updateUserProfile,
    changeEmail
} from '../actions/users'

let DEFAULT_USER_STATE = {
    loading:false,
    data:{
        _id:null,
        email:null,
        firstname:null,
        lastname:null,
        age:null,
        role:null,
        verified:null
    },
    auth:null
}

export const usersSlice = createSlice({
    name:'users',
    initialState:DEFAULT_USER_STATE,
    reducers:{
        setVerify:(state)=>{
            state.data.verified = true;
        }
    },
    extraReducers:(builder)=>{
        builder
        // REGISTER
        .addCase(registerUser.pending,(state)=>{ state.loading = true })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload.data;
            state.auth = action.payload.auth;
        })
        .addCase(registerUser.rejected,(state)=>{ state.loading = false })
        // SIGN IN
        .addCase(signInUser.pending,(state)=>{ state.loading = true })
        .addCase(signInUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload.data;
            state.auth = action.payload.auth;
        })
        .addCase(signInUser.rejected,(state)=>{ state.loading = false })
         // IS AUTH
         .addCase(isAuth.pending,(state)=>{ state.loading = true })
         .addCase(isAuth.fulfilled,(state,action)=>{
             state.loading = false;
             state.data = { ...state.data,...action.payload.data}
             state.auth = action.payload.auth;
         })
         .addCase(isAuth.rejected,(state)=>{ state.loading = false })
         // SIGN OUT
         .addCase(signOut.fulfilled,(state,action)=>{
            state.data = DEFAULT_USER_STATE.data
            state.auth = false;
        })
        /// UPDATE USER PROFILE
        .addCase(updateUserProfile.fulfilled,(state,action)=>{
           state.data = {...state.data,...action.payload}
        })
        /// CHANGE EMAIL
        .addCase(changeEmail.pending,(state)=>{ state.loading = true })
        .addCase(changeEmail.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = { ...state.data,...action.payload}
        })
        .addCase(changeEmail.rejected,(state)=>{ state.loading = false })
    }
})


export const { setVerify } =  usersSlice.actions;
export default usersSlice.reducer