import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorGlobal, successGlobal } from '../reducers/notifications';
import { getAuthHeader } from '../../utils/tools';
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const addArticle = createAsyncThunk(
    'articles/addArticle',
    async(article,{ dispatch })=>{
        try{
            const request = await axios.post(`/api/articles/`,article,getAuthHeader());
            dispatch(successGlobal('Post created !!'))
            return request.data;
        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error
        }
    }
)

export const getAdminArticle = createAsyncThunk(
    'articles/getAdminArticle',
    async(_id,{ dispatch })=>{
        try{
            const request = await axios.get(`/api/articles/article/${_id}`,getAuthHeader());
            return request.data;
        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error
        }
    }
)

export const updateArticle = createAsyncThunk(
    'articles/updateArticle',
    async({values,articleId},{ dispatch })=>{
        try{
            await axios.patch(`/api/articles/article/${articleId}`,values,getAuthHeader());
            dispatch(successGlobal('Article updated !!'))
            return true;
        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error
        }
    }
)


export const getPaginateArticles = createAsyncThunk(
    'articles/getPaginateArticles',
    async({page=1,limit=5,keywords=''},{ dispatch })=>{
        try{
            const request = await axios.post(`/api/articles/admin/paginate`,{
                page,
                limit,
                keywords
            },getAuthHeader())
            return request.data;
        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error
        }
    }
)