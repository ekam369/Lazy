import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/help">Help</Link>
        <Link to="/list">List</Link>
        <Link to="/users">Users</Link>
        <a
          className="App-link"
          href="/help"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
