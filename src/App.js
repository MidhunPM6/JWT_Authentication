import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../src/Components/Authentication/Login'
import SignUp from './Components/Authentication/SignUp';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>


    </Routes>
    </>
  );
}

export default App;
