import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  // state = {
  //   usernames: [
  //     {name: 'Ryan'}

  //   ]
  // }

  state = {
    username: 'Ryan'
  }

  // usernameHandler = (event) => {
  //   this.setState (
  //     {
  //   usernames: [
  //     {name: event.target.value}
  //     ]
  //   })
  // }

  usernameHandler = (event) => {
    this.setState({username: event.target.value});
  }





  render() {
    return (
      <div>
      <UserInput newName={this.usernameHandler} />
      <UserOutput name={this.state.username} />
      <UserOutput name='Jill' />
      <UserOutput name='Jim' />            
      </div>
    );
  }
}

export default App;
