import React, { Component } from 'react';

// styles
import '../styles/App.css';

// routing components
import {
  BrowserRouter,
  Route,
  NavLink
} from 'react-router-dom';

// components
import LoginForm from './LoginForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" render={ () => <LoginForm /> }></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
