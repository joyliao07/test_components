import React from 'react';
import classes from './App.css';
import Landing from './containers/Landing/Landing';
import Python from './containers/Python/Python';

function App() {
  return (
    <div className={classes.Body}>
      <header className="App-header">
      </header>
      <Landing/>
      <Python/>
    </div>
  );
}

export default App;
