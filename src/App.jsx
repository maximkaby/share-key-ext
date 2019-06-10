import React, {Component} from 'react';
import './socket/Listeners';
import {newMessage, sendSecretToFront} from "./socket/Emiters"
import {getSecretsRequest} from "./requests"
import Button from '@material-ui/core/Button';


class App extends Component {
  handleMessage() {
    newMessage();
  }

  getSecretFromServer() {
    getSecretsRequest()
  }

  sendSecret() {
    sendSecretToFront();
  }

  render() {
    return (
      <div>
        <h1>Hello, Maxim</h1>
        <Button
          variant="contained"
          onClick={this.getSecretFromServer}
          color="primary"
        >get server secret</Button>
        <Button
          variant="contained"
          onClick={this.sendSecret}
          color="primary"
        >send secret front</Button>
      </div>
    );
  }
}
export default App;
