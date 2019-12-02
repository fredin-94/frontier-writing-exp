import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode'; //
//Local:
import store from './store';
import Navbar from './components/shared-layout/Navbar';
import LandingPage from './components/shared-layout/LandingPage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';
import setAuthToken from './utils/setAuthToken'; //
import {setCurrentUser, logoutUser} from './actions/authActions'; //
import PrivateRoutes from './components/private-routes/PrivateRoutes';
import Homepage from './components/pages/Homepage';

//jwt_decode, setauthtoken , setcurrentuser, logoutuser

if(localStorage.jwtToken){
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000; //milisec

  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());

    window.location.href = "./login";
  }
}




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
            <Switch>
              <PrivateRoutes exact path = '/homepage' component = {Homepage}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
