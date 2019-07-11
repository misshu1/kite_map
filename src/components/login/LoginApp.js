import React, { Component } from "react";
import { Form, UserInput, PasswordInput, LoginButton } from "./style";
class LoginApp extends Component {
    state = {
        username: "",
        password: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = async e => {
        const { username, password } = this.state;
        e.preventDefault();
        const url = "https://ab4-kitesurfing.herokuapp.com/api-user-log-in";

        try {
            const data = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: username, password: password })
            });
            const dataJson = data.ok
                ? await data.json()
                : alert("Failed to Log In, " + new Error(data.statusText));

            if (!localStorage.token) {
                localStorage.setItem("token", dataJson.result.token);
                this.props.handleLogIn(true);
            } else {
                this.props.handleLogIn(false);
            }
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <p>Username</p>
                <UserInput id="username" onChange={this.handleChange} />
                <p>Password</p>
                <PasswordInput id="password" onChange={this.handleChange} />
                <LoginButton value="Login" />
            </Form>
        );
    }
}
export default LoginApp;
