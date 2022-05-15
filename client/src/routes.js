import { Routes,Route ,BrowserRouter } from 'react-router-dom';

import Header from './components/navigation/header';
import Home from './components/home';

const Router = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;