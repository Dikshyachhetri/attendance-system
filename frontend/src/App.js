import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Login from './screens/LoginScreen';
// import Calendar from './screens/Calendar';
import HomeCalendar from './screens/HomeCalendar';

import Dashboard from './screens/Dashboard.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ForgotPassword from './screens/ForgotPassword';
import Notification from './screens/Notification';
import Employees from './screens/Employees';
import ListView from './screens/ListView';
import CheckOut from './screens/CheckOut';


const App = () => {
  return (

    <Router>
      <Switch>
        <Route path='/login' component={Login} exact />
        <Route path='/' component={Dashboard} exact />
        <Route path='/forgotpassword' component={ForgotPassword} exact />
        <Route path='/notifications' component={Notification} exact />
        <Route path='/employees/gridview' component={Employees} exact />
        <Route path='/employees/listview' component={ListView} exact />
        <Route path='/search/:keyword' component={Employees} />
        <Route path='/checkout' component={CheckOut} />


      </Switch>
    </Router>
  )
}

export default App
