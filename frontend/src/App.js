import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Login from './screens/LoginScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ForgotPassword from './screens/ForgotPassword';

const App = () => {
  return (

    <Router>
      <>
        {/* <Route path='/' component={Login} exact /> */}
        <Route path='/' component={ForgotPassword} exact />

      </>
    </Router>
  )
}

export default App
