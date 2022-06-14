import { useEffect, useState } from 'react'
import { Routes,Route ,BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isAuth } from './store/actions/users';
import { Loader } from './utils/tools';


import MainLayout from './hoc/mainLayout';
import Header from './components/navigation/header';
import Home from './components/home';
import Auth from './components/auth';
import Article from './components/articles/article';
import AccountVerify from './components/auth/verification';

import Dashboard from './components/dashboard';
import AdminArticles from './components/dashboard/articles';
import AdminProfile from './components/dashboard/profile';
import DashboardMain from './components/dashboard/main';
import AddArticle from './components/dashboard/articles/edit_add/add';
import EditArticle from './components/dashboard/articles/edit_add/edit';
import AdminCategories from './components/dashboard/categories';

import AuthGuard from './hoc/authGuard';

const Router = () => {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();
  const users = useSelector(state=> state.users)


  useEffect(()=>{
    dispatch(isAuth())
  },[])


  useEffect(()=>{
    if(users.auth !== null){
      setLoading(false)
    }
  },[users])



  return(
    <BrowserRouter>
    { loading ?
      <Loader/>
      :
      <>
        <Header/>
        <MainLayout>
          <Routes>
            <Route path='/dashboard' element={
              <AuthGuard>
                <Dashboard/>
              </AuthGuard>
            }>
                <Route index element={<DashboardMain/>}/>
                <Route path='profile' element={<AdminProfile/>}/>
                <Route path='articles' element={<AdminArticles/>}/>
                <Route path='articles/add' element={<AddArticle/>}/>
                <Route path='articles/edit/:articleId' element={<EditArticle/>}/>
                <Route path='categories' element={<AdminCategories/>}/>

            </Route>
            <Route path='/verification' element={<AccountVerify/>}/>
            <Route path='/articles/article/:id' element={<Article/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </MainLayout>
      </>
      }
    </BrowserRouter>
  )
}

export default Router;