import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Login from './screens/LoginScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (

    <Router>
      <>
        <Route path='/' component={Login} exact />

      </>
    </Router>
  )
}

export default App
