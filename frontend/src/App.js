import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (
  <Router>
    <div className="App">
    <Login />
    </div>
  </Router>
  )
}

export default App
