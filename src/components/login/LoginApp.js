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
        e.preventDefault();
        const url = "https://ab4-kitesurfing.herokuapp.com/api-user-get";

        try {
            const data = await fetch(url, {
                method: "POST",
                body: JSON.stringify(this.state.username)
            });
            const dataJson = data.ok
                ? await data.json()
                : alert(
                      "Failed to get data from API" + new Error(data.statusText)
                  );

            console.log(dataJson);
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <React.Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <p>Username</p>
                    <UserInput id="username" onChange={this.handleChange} />
                    <p>Password</p>
                    <PasswordInput id="password" onChange={this.handleChange} />
                    <LoginButton value="Login" />
                </Form>
            </React.Fragment>
        );
    }
}
export default LoginApp;
