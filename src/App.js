import './css/styles.css';
import {BrowserRouter as Router, Routes, Route, Link,} from 'react-router-dom'
import React,{ useEffect, useState } from 'react';
import Login from './components/login';
import Register from './components/register';
import HomePage from './components/homepage';
import Error404 from './components/error404';
import NewPost from './components/newpost';
import Archive from './components/archive';
import { Navigate} from 'react-router-dom';
import Comments from "./comments/Comments";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect( () =>{

  },[])

  return (
    <Router>
      <div className='wrapper'>
      <div className='container-fluid'>
			</div>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/newpost' element={<NewPost />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      </div>
    </Router>
  )
}


export default App


