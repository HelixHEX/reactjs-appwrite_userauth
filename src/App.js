import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Components/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import PrivateRoute from "./PrivateRoute";
import {config} from './config';
import Auth from './Auth'
import Success from './Components/Success'
import Failure from './Components/Failure'

import { AuthProvider } from './Auth';
import * as Appwrite from 'appwrite';
const appwrite = new Appwrite();
appwrite
    .setEndpoint(config.endpoint) // Set only when using self-hosted solution
    .setProject(config.projectId);


const auth = new Auth(appwrite);
const App = () => {
  return(
      <Router>
        <div>
          <PrivateRoute appwrite={appwrite} exact path='/' auth={auth} component={Home} />
          <Route exact path="/signin" render={(props) => <Login {...props} auth = {auth} />} />
          <Route exact path="/signup" render={(props) => <Signup {...props} auth = {auth} />} />
          <Route exact path="/failure" render ={(props)=> <Failure {...props} auth = {auth}  />} />
          <Route exact path="/success" render ={(props)=> <Success {...props} auth = {auth} />} />
        </div>
      </Router>
  )
}

export default App;
