import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import Login from './Login';
import Registration from './Registration';
class App extends Component {
  render(){
    return (
      <div>
      
      <Router>
      <Header />
      <Route exact path="/Login" component={Login}></Route>
      <Route path="/Registration" component={Registration}></Route>
      </Router>   
    </div>
    );
  }
}

export default App;
