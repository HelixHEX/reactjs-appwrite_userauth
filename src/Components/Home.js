import React, {Component} from 'react';

import Auth from '../Auth'

import * as Appwrite from 'appwrite';
import {config} from '../config'

const appwrite = new Appwrite();
appwrite
    .setEndpoint(config.endpoint)
    .setProject(config.projectId);


const auth = new Auth(appwrite);

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  signOutUser = () => {
    auth.logout()
  }

  render() {
    return (
      <div >
        Welcome
        <br />
        <button onClick={this.signOutUser}>Logout</button>
      </div>
    );
  }
}
