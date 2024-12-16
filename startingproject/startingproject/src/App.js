import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  let name;
  name = 'ES-Lint';

  // console.log("Demo for ES Lint");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1></h1>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {name}
        </a>
      </header>
    </div>
  );
}

export default App;
