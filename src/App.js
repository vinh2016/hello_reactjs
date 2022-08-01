import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const intervalID = setTimeout(() => {
      const today = new Date();
      setCurrentDateTime(today.toLocaleDateString("en-US") + ' ' + today.toLocaleTimeString('en-US'));
    }, 1000);
    return () => clearInterval(intervalID);
  }, [currentDateTime]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Vinh!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        {currentDateTime}
      </header>
    </div>
  );
}

export default App;
