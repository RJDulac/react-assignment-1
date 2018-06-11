import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    usernames: [
      {name: 'bob'}
    ]
  }

  usernameHandler = (event) => {
    this.setState (
      {
    usernames: [
      {name: event.target.value}
    ]
  })
  }





  render() {
    return (
      <div>
      <UserInput newName={this.usernameHandler} />
      <UserOutput name='Bob' />
      <UserOutput name={this.state.usernames[0].name} />

      </div>
    );
  }
}

export default App;
