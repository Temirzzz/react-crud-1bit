import React from 'react';
import { Redirect } from 'react-router-dom';
import { chips } from '../../functions/chips';
import { errorChips } from '../../functions/errorChips';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    loginFunc = (e) => {
        e.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        }

        if (!this.state.username || !this.state.password) {
            chips();
        }
        else {
            fetch('http://localhost/server/send.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((result) => {
                    let responseJson = result;
                    if (responseJson === "Ok") {
                        sessionStorage.setItem('userData', responseJson);
                        this.setState({ redirect: true });
                    }
                    else {
                        errorChips();
                    }
                })
        }
    }

    changeFunc = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={'/Admin'} />)
        }
        return (
            <div className="wrapper">
                <div className="chieps-field"></div>
                <div className="container">
                    <div className="col">
                        <div className="row justify-content-center">
                            <form className="login-form mt-5">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id="username" name="username" onChange={this.changeFunc} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" onChange={this.changeFunc} required />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={this.loginFunc} >Логин</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;