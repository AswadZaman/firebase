import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LogIn from './Login-section/login';
import SignUp from './Login-section/signup';
import Home from './Login-section/home';
import SecondPage from './page2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/login' element={ <LogIn/> } />
        <Route path='/signup' element={<SignUp />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/second' element={<SecondPage/>} />
        
      </Routes>
   </BrowserRouter>
  );
}

export default App;
