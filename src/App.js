import React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import './App.css';
import Error from './pages/Error-404/Error-404';
import Header from './Components/Header/Header';
import NavIcons from './Components/Nav-Icons/NavIcons';
import Profile from './pages/Profil/Profile';
import SwitchUser from './pages/Switch-User/SwitchUser';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavIcons/>


      <Routes>
        <Route path="/" element={<Navigate to="/profile"/>}/>
        <Route path="/profile" element={<SwitchUser/>}/>
        <Route path="/profile/user/:id" element={<Profile/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>


    </div>
  );
}

export default App;
