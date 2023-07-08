import {Routes, Route } from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'


import './App.css';

const App = () => (
  
    
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    

  


)

export default App;
