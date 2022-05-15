import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const registerUser = createAsyncThunk(
    'users/registerUser',
    async({email,password},{dispatch})=>{
        try{
            const request = await axios.post(`/api/auth/register`,{
                email: email,
                password: password
            });
            return { data:request.data.user, auth:true }
        } catch(error){
            throw error;
        }
    }
)

export const signInUser = createAsyncThunk(
    'users/signInUser',
    async({email,password},{dispatch})=>{
        try{
            const request = await axios.post(`/api/auth/signin`,{
                email: email,
                password: password
            });
            return { data:request.data.user, auth:true }
        } catch(error){
            throw error;
        }
    }
)


