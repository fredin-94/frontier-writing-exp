import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
//Local:
import store from './store';
import Navbar from './components/shared-layout/Navbar';
import LandingPage from './components/shared-layout/LandingPage';
import Register from './components/auth/Register';
import Login from './components/auth/Register';
import './App.css';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Route exact path="/" component = {LandingPage}/>
            <Route exact path="/register" component = {Register}/>
            <Route exact path="/login" component = {Login}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
