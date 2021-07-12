import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Login from './screens/LoginScreen';
// import Calendar from './screens/Calendar';

import Dashboard from './screens/Dashboard.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ForgotPassword from './screens/ForgotPassword';


const App = () => {
  return (

    <Router>
      <Switch>
        <Route path='/login' component={Login} exact />
        <Route path='/' component={Dashboard} exact />
        <Route path='/forgotpassword' component={ForgotPassword} exact />


      </Switch>
    </Router>
  )
}

export default App
