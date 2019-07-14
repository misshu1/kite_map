import React, { Component } from "react";
import {
    Form,
    UserInput,
    PasswordInput,
    LoginButton,
    Container
} from "./style";
class LoginApp extends Component {
    state = {
        usernameLogIn: "",
        passwordLogIn: "",
        usernameSingUp: "",
        passwordSingUp: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmitSingUp = async e => {
        const { usernameSingUp, passwordSingUp } = this.state;
        e.preventDefault();
        const url = "https://ab4-kitesurfing.herokuapp.com/api-user-sing-up";

        try {
            const data = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: usernameSingUp,
                    password: passwordSingUp
                })
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
            console.log(dataJson);
        } catch (err) {
            console.log(err);
        }
    };

    handleSubmitLogIn = async e => {
        const { usernameLogIn, passwordLogIn } = this.state;
        e.preventDefault();
        const url = "https://ab4-kitesurfing.herokuapp.com/api-user-log-in";

        try {
            const data = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: usernameLogIn,
                    password: passwordLogIn
                })
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
            <Container>
                <Form onSubmit={this.handleSubmitLogIn}>
                    <p>Username</p>
                    <UserInput
                        id="usernameLogIn"
                        onChange={this.handleChange}
                    />
                    <p>Password</p>
                    <PasswordInput
                        id="passwordLogIn"
                        onChange={this.handleChange}
                    />
                    <LoginButton value="Login" />
                </Form>
                {/* <Form onSubmit={this.handleSubmitSingUp}>
                    <p>Username</p>
                    <UserInput
                        id="usernameSingUp"
                        onChange={this.handleChange}
                    />
                    <p>Password</p>
                    <PasswordInput
                        id="passwordSingUp"
                        onChange={this.handleChange}
                    />
                    <LoginButton value="Sing Up" />
                </Form> */}
            </Container>
        );
    }
}
export default LoginApp;
