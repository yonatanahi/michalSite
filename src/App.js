import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Michal's Site</h1>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About</Link>
        <Route path="/about" component={About}/>
      </div>
    </Router>
  );
}

export default App;
