import React, {Component} from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.auth = props.auth
  }

  signOutUser = () => {
    this.auth.logout()
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
