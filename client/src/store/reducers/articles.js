import { createSlice } from '@reduxjs/toolkit';
import {
    addArticle,
    getPaginateArticles,
    changeStatusArticle,
    homeLoadMore,
    getArticle,
    getCategories
} from '../actions/articles';


export const articlesSlice = createSlice({
    name:'articles',
    initialState:{
        homeSort:{
            sortby:"_id",
            order:"desc",
            limit:4,
            skip:0
        },
        loading:false,
        articles:[],
        current:null,
        categories:[]
    },
    reducers:{
        updateCategories:(state,action)=>{
            state.categories = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        // ADD ARTICLE
        .addCase(addArticle.pending,(state)=>{ state.loading = true })
        .addCase(addArticle.fulfilled,(state,action)=>{ 
            state.loading = false;
            state.lastAdded = action.payload 
        })
        .addCase(addArticle.rejected,(state)=>{ state.loading = false })
        // GET PAGINATE ARTICLES
        .addCase(getPaginateArticles.pending,(state)=>{ state.loading = true })
        .addCase(getPaginateArticles.fulfilled,(state,action)=>{ 
            state.loading = false;
            state.adminArticles = action.payload 
        })
        .addCase(getPaginateArticles.rejected,(state)=>{ state.loading = false })
        // CHANGE STATUS ARTICLE
        .addCase(changeStatusArticle.fulfilled,(state,action)=>{ 
            state.adminArticles.docs = action.payload 
        })
        // HOME LOAD MORE
        .addCase(homeLoadMore.fulfilled,(state,action)=>{ 
            state.homeSort.skip = action.payload.sort.skip
            state.articles = action.payload.newState
        })
        // GET ARTICLE
        .addCase(getArticle.pending,(state)=>{ state.loading = true })
        .addCase(getArticle.fulfilled,(state,action)=>{ 
            state.loading = false;
            state.current = action.payload 
        })
        .addCase(getArticle.rejected,(state)=>{ state.loading = false })
        /// CATEGORY
        .addCase(getCategories.fulfilled,(state,action)=>{ 
            state.categories = action.payload;
        })

    }
})

export const { updateCategories } = articlesSlice.actions
export default articlesSlice.reducer;
