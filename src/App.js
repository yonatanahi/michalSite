import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from './components/About';
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Logo from "./assets/Logo.jpeg";

function App() {
  return (
    <Router>
      <div>
        <Link to="/" className="link">
          <h1>
            <span>מיכל וינברגר</span>
            <img id="logo" src={Logo} alt="Logo" />
          </h1>
        </Link>
        <Link to="/about" className="link">
          אודות
        </Link>
        <Link to="/gallery" className="link">
          גלריה
        </Link>
        <Link to="/contact" className="link">
          צור קשר
        </Link>
      </div>

      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
