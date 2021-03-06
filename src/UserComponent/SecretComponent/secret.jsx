import { Component } from 'react';
export default class SecretComponent extends Component {
    constructor() {
      super();
      //Set default message
      this.state = {
        message: 'Loading...'
      }
    }
    componentDidMount() {
      //GET message from server using fetch api
      fetch('/api/secret')
        .then(res => res.text())
        .then(res => this.setState({message: res}));
    }
    render() {
      return (
        <div>
          <h1>Secret</h1>
          <p>{this.state.message}</p>
        </div>
      );
    }
  }
  