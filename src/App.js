import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Sidebar from './Components/AppBody/SideBar/Sidebar';
import Feed from './Components/AppBody/Feed/Feed';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
      <Sidebar />
      <Feed />
      </div> 
    </div>
  );
}

export default App;
