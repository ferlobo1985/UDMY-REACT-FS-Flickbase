import { Routes,Route ,BrowserRouter } from 'react-router-dom';

import MainLayout from './hoc/mainLayout';
import Header from './components/navigation/header';
import Home from './components/home';
import Auth from './components/auth';

const Router = () => {
  return(
    <BrowserRouter>
      <Header/>
      <MainLayout>
        <Routes>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default Router;