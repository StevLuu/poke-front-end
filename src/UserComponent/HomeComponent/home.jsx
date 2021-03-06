import { Component } from 'react';
export default class HomeComponent extends Component {
  constructor() {
    super();
    //Set default message
    this.state = {
      message: 'Loading...'
    }
  }
  componentDidMount() {
    //GET message from server using fetch api
    fetch('http://localhost:3001/users/home')
      .then(res => res.text())
      .then(res => this.setState({ message: res }));
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
