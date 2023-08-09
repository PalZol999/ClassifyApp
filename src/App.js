import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { Helmet } from 'react-helmet'; 
import './styles/Calendar.css'
import calendarBg from'./images/calendar-bg.png'


function App() {
  return (
<div>
       <Helmet>
        <title>Calssify App</title>
      </Helmet>

      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />}/>
          <Route
            path='/account'
            element={
              <Protected>
                <div style={{ backgroundImage: `url(${calendarBg})`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    height: '100vh' }}>
                <Account />
                </div>
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;