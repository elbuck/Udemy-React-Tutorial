import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: [
      {name: 'elbuck'}
    ]
  };

  changeUserName = (event) => {
    this.setState({
    userName: [
      {name: event.target.value}
    ]
    })
  }

  render() {
    const userName = 'elbuck';
    return (
      <div className="App">
        <UserOutput 
        // userName={userName}
        userName={this.state.userName[0].name}
        />
        <UserOutput />
        <UserInput 
        userName={this.state.userName[0].name}
        changeName={this.changeUserName}/>
      </div>
    );
  }
}

export default App;
