import { createSlice } from '@reduxjs/toolkit';
import { 
    registerUser,
    signInUser
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
        
    }
})

export default usersSlice.reducer