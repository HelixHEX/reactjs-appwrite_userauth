import React, { useCallback, useContext, useState, Component } from "react";
import { withRouter, Redirect } from "react-router";

import './vendor/bootstrap/css/bootstrap.min.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './vendor/animate/animate.css'
import './vendor/css-hamburgers/hamburgers.min.css'
import './vendor/select2/select2.min.css'
import './css/util.css'
import './css/main.css'

export default class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.auth = props.auth;
  }
  handleSignup = event => {
    event.preventDefault();
    var name = event.target.elements['name'].value;
    var email = event.target.elements['email'].value;
    var password = event.target.elements['password'].value;
    var repassword  = event.target.elements['repassword'].value;
    if (password !== repassword) {
      alert('Passwords do not match');
    } else {
      this.auth.signup(email, password, name)
    }
  }

  handleGoogle = () => {
    this.auth.google()
  }

  render() {
    return (
      <>
      	<div className="limiter">
      		<div className="container-login100">
      			<div className="wrap-login100">
      				<div className="login100-pic js-tilt" data-tilt>
      					<img src={require('./images/img-01.png')} alt="IMG" />
      				</div>

      				<form className="login100-form validate-form" onSubmit={this.handleSignup}>
      					<span className="login100-form-title">
      						Member Signup
      					</span>
                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
      						<input className="input100" type="text" name="text" placeholder="Full Name" id='name' />
      						<span className="focus-input100"></span>
      						<span className="symbol-input100">
      							<i className="fa fa-user" aria-hidden="true"></i>
      						</span>
      				  </div>
      					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
      						<input className="input100" type="text" name="email" placeholder="Email" id='email' />
      						<span className="focus-input100"></span>
      						<span className="symbol-input100">
      							<i className="fa fa-envelope" aria-hidden="true"></i>
      						</span>
      				  </div>

      					<div className="wrap-input100 validate-input" data-validate = "Password is required">
      						<input className="input100" type="password" name="pass" placeholder="Password" id='password' />
      						<span className="focus-input100"></span>
      						<span className="symbol-input100">
      							<i className="fa fa-lock" aria-hidden="true"></i>
      						</span>
      					</div>

                <div className="wrap-input100 validate-input" data-validate = "Password is required">
      						<input className="input100" type="password" name="pass" placeholder="Re-enter Password" id='repassword' />
      						<span className="focus-input100"></span>
      						<span className="symbol-input100">
      							<i className="fa fa-lock" aria-hidden="true"></i>
      						</span>
      					</div>

      					<div className="container-login100-form-btn">
      						<button type="submit" className="login100-form-btn">
      							Signup
      						</button>
      					</div>

                <div className="container-login100-form-btn">
      						<button onClick={this.handleGoogle} type="button" className="login100-google-form-btn">
      							Login With Google
      						</button>
      					</div>

                <div className='createaccount'>
                  <div className="text-center p-t-136">
        						<a className="txt2" href="/signin">
        							Login
        							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
        						</a>
        					</div>
                </div>
      				</form>
      			</div>
      		</div>
      	</div>




      	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
      	<script src="vendor/bootstrap/js/popper.js"></script>
      	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
      	<script src="vendor/select2/select2.min.js"></script>
      	<script src="vendor/tilt/tilt.jquery.min.js"></script>
      	<script src="js/main.js"></script>
      </>
    );
  }
};
