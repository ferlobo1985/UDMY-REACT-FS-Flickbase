import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorGlobal, successGlobal } from '../reducers/notifications';
import { getAuthHeader, removeTokenCookie } from '../../utils/tools';
import { setVerify } from '../reducers/users';

import axios from 'axios'

export const registerUser = createAsyncThunk(
    'users/registerUser',
    async({email,password},{dispatch})=>{
        try{
            const request = await axios.post(`/api/auth/register`,{
                email: email,
                password: password
            });

            dispatch(successGlobal('Welcome !!.Check your emails to validate account'))
            return { data:request.data.user, auth:true }
        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
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
            dispatch(successGlobal('Welcome !!'))
            return { data:request.data.user, auth:true }
        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error;
        }
    }
)


export const isAuth = createAsyncThunk(
    'users/isAuth',
    async()=>{
        try{
            const request = await axios.get('/api/auth/isauth',getAuthHeader());
            return { data:request.data, auth:true }
        } catch(error){
            return { data:{},auth:false}
        }
    }
)


export const signOut = createAsyncThunk(
    'users/signOut',
    async()=>{
        removeTokenCookie();
    }
)



export const updateUserProfile = createAsyncThunk(
    'users/updateUserProfile',
    async(data,{dispatch})=>{
        try{
            const profile = await axios.patch(`/api/users/profile`,data,getAuthHeader())
            dispatch(successGlobal('Profile updated !!'))
            return {
                firstname: profile.data.firstname,
                lastname: profile.data.lastname,
                age: profile.data.age
            }
        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
           throw error; 
        }
    }
)




export const changeEmail = createAsyncThunk(
    'users/changeEmail',
    async(data,{dispatch})=>{
        try{
            const request = await axios.patch(`/api/users/email`,{
                email:data.email,
                newemail:data.newemail
            },getAuthHeader());
            dispatch(successGlobal('Email updated !!'))
            return {
                email: request.data.user.email,
                verified:false
            }
        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
           throw error; 
        }
    }
)


export const accountVerify = createAsyncThunk(
    'users/accountVerify',
    async(token,{dispatch,getState})=>{
        try{
            const user = getState().users.auth;
            await axios.get(`/api/users/verify?validation=${token}`);

            if(user){
                dispatch(setVerify())
            }

            dispatch(successGlobal('Account verified !!'))
        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error; 
        }
    }

)
