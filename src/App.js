import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import Navbar from './Components/Navbar';
import RegistrationForm from './Components/RegistrationForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ForgetPassword from './Components/ForgetPassword';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={RegistrationForm}></Route>
          <Route exact path="/RegistrationForm" component={RegistrationForm}></Route>
          <Route exact path="/LoginForm" component={LoginForm}></Route>
          <Route exact path="/ForgetPassword" component={ForgetPassword}></Route>
        </Switch>
      </Router>
    </React.Fragment>
    );
}

export default App;