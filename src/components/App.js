import React, { Component } from 'react';

// styles
import '../styles/App.css';

// routing components
import {
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom';

// components
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="router-container">
          <Route exact path="/" render={ () => <Redirect to="/login"/> }></Route>
          <Route exact path="/login" render={ () => <LoginForm /> }></Route>
          <Route exact path="/register" render={ () => <RegisterForm /> }></Route>
          <Route exact path="/password-reset" render={ () => <RegisterForm /> }></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
