import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './Components/Header/Header'
import Sidebar from './Components/AppBody/SideBar/Sidebar';
import Feed from './Components/AppBody/Feed/Feed';
import { selectUser } from './features/userSlice';
import Login from './Components/Login/Login'

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

      {!user ? ( <Login /> ) : (
             <div className="app__body">
      <Sidebar />
      <Feed />
      </div>
      )}
    </div>
  );
}

export default App;
