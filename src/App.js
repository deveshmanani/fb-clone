import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import { useStateValue } from './Provider';

function App() {
  const [state] = useStateValue()
  return (
    state.user ?
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      </div>
      :
      <div className="app">
        <Login />
      </div>
  );
}

export default App;
