import React, {Component, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import jwt_decode from 'jwt-decode'; //
//Local:
import store from './store'; //c
import Navbar from './components/shared-layout/Navbar';
import Logo from './components/shared-layout/Logo';
import LandingPage from './components/shared-layout/LandingPage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';
import setAuthToken from './utils/setAuthToken'; //
import {setCurrentUser, logoutUser} from './actions/authActions'; //
import PrivateRoutes from './components/private-routes/PrivateRoutes';
import Homepage from './components/userPages/Homepage';
import SelectedBook from './components/userPages/SelectedBook';
import EditBook from './components/userPages/EditBook';

import Root from 'Root'; //idk if all will work if i have 2 stores...
import CreateBook from 'components/userPages/CreateBook';
import WriteBook from 'components/userPages/WriteBook';
//import asyncLoadComponent from 'middlewares/AsyncLoadComponent';

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

const LazyMyPage = React.lazy(()=>
  import('components/userPages/MyPage')
);

/* const AsyncMyPage = asyncLoadComponent(()=>{//make this page load asynchronously
  return import('components/userPages/MyPage'); //might not be correct route though
}); */


//suspence fallback is used with react.lazy, needed since the user should see something while they wait for the page to load
class App extends Component {
  render(){
    return (
      <Root>
        <BrowserRouter>
          <div className="App">
            <Logo/>
            <Navbar/>
            <Route exact path="/" component = {LandingPage}/>
            <Route exact path="/register" component = {Register}/>
            <Route exact path="/login" component = {Login}/>
            <Suspense fallback = {<div>Loading...</div>}>
              <Switch>
                <PrivateRoutes exact path="/selectedBook/:bookId" component = {SelectedBook}/>
                <PrivateRoutes exact path="/editBook/:bookId" component = {EditBook}/>
                <PrivateRoutes exact path="/writeBook/:bookId/:chapterId" component = {WriteBook}/>
                <PrivateRoutes exact path="/mypage" component = {LazyMyPage}/>
                <PrivateRoutes exact path = '/homepage' component = {Homepage}/>
                <PrivateRoutes exact path="/createBook" component = {CreateBook}/>
              </Switch>
            </Suspense>
          </div>
        </BrowserRouter>
      </Root>
    );
  }
}

export default App;
