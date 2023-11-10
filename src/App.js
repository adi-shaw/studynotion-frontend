import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='flex flex-col w-screen h-screen
    bg-richblack-900 '>

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} ></Navbar>
      
      <Routes>
        <Route path='/studynotion-frontend' element={<Home isLoggedIn={isLoggedIn}></Home>}></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} ></Login>}></Route>
        <Route path='/signup' element={<Signup  setIsLoggedIn={setIsLoggedIn} ></Signup>}></Route>
        <Route path='/dashboard' element={

            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
