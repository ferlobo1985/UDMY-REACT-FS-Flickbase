import { Routes,Route ,BrowserRouter } from 'react-router-dom';

import MainLayout from './hoc/mainLayout';
import Header from './components/navigation/header';
import Home from './components/home';

const Router = () => {
  return(
    <BrowserRouter>
      <Header/>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default Router;