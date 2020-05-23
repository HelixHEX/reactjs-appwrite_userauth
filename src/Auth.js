/* eslint-disable require-jsdoc */
import {Route, Redirect} from 'react-router-dom';
class Auth {
  constructor(sdk) {
    this.sdk = sdk;
    this.authenticated = this.checkAuthenticated();
  }

  async signup(email, password, name) {
    let promise = this.sdk.account.create(email, password, name);
    let promises = this.sdk.account.createSession(email, password);
    await promise.then(function (response) {
    }, function (error) {
        console.log(error); // Failure
        window.location='http://localhost:3000/failure'
    });
    setTimeout(() => {
      let promises = this.sdk.account.createSession(email, password);

      promises.then(function (response) {
          console.log(response); // Success
          window.location='http://localhost:3000/success'
      }, function (error) {
          alert(error); // Failure
          window.location='http://localhost:3000/failure'
      });
    }, 200)
  }

  login(email, password) {
    let promise = this.sdk.account.createSession(email, password);
    promise.then(function (response) {
        console.log(response); // Success
        window.location='http://localhost:3000/success'
    }, function (error) {
        console.log(error); // Failure
        window.location='http://localhost:3000/failure'
    });
  }
  google() {
    let promise = this.sdk.account.createOAuth2Session('google', 'http://localhost:3000/success', 'http://localhost:3000/failure')

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
  }

  logout() {
    let promise = this.sdk.account.deleteSession('current');

    promise.then(function (response) {
      localStorage.removeItem('auth_state');
      window.location='http://localhost:3000/signin'
      console.log(response); // Success
    }, function (error) {
      console.log('AUTH', error);
      console.log(error); // Failure
    });
  }

  checkAuthenticated() {
    const promise = this.sdk.account.getSessions();
    return promise.then(
        function(response) {
          localStorage.setItem('auth_state', 1);
          return response;
        },
        function(error) {
          localStorage.removeItem('auth_state');
          return null;
        }
    );
  }

  setAuthenticated(val) {
    this.authenticated = val;
  }

  checkLogin() {
    this.sdk.account.get().then(function(response) {
      console.log(response)
      window.location="http://localhost:3000/"
    }, function(error) {
      console.log(error)
    })
  }

  getAuthenticated() {
    return this.checkAuthenticated();
  }
}

export default Auth;
