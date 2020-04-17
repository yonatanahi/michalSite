import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from './components/About';
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <h1>Michal's Art</h1>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <Link to="/gallery" className="link">
        Gallery
      </Link>
      <Link to="/contact" className="link">
        Contact
      </Link>

      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
