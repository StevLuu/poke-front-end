import React, { Component } from 'react';
export default class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
    }
    handleInputChange = (e) => {
        // const { value, name } = e.target;
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/users/register', {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    // this.props.history.push('/');
                    console.log(`it worked?`)
                } else {
                    // const error = new Error(res.error);
                    console.log("it didnt worked?")
                    // throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error creating please try again');
            });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Create New User!</h1>
                <input
                    type="username"
                    name="username"
                    placeholder="Create username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Create password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    type="name"
                    name="name"
                    placeholder="create trainer name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required
                />
                <input type="submit" value="Submit" />
            </form>

        );
    }
}