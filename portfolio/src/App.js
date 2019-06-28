import React from 'react';
import classes from './App.css';
import Landing from './containers/Landing/Landing';

function App() {
  return (
    <div className={classes.Body}>
      <header className="App-header">
        <p> Portfolio Header </p>
      </header>
      <Landing/>
    </div>
  );
}

export default App;
