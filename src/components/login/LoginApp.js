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
        emailLogIn: "",
        passwordLogIn: "",
        emailSignUp: "",
        passwordSignUp: "",
        passwordSignUp2: "",
        showLogIn: true
    };

    checkIfPasswordMatch = e => {
        const { passwordSignUp, passwordSignUp2 } = this.state;
        e.preventDefault();
        if (passwordSignUp === passwordSignUp2) {
            this.handleSubmitSignUp(e);
        } else {
            alert("Password doesnt match");
        }
    };

    handleShowLogInBtn = boolean => {
        this.setState({ showLogIn: boolean });
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmitSignUp = async e => {
        const { emailSignUp, passwordSignUp } = this.state;
        const url = "https://ab4-kitesurfing.herokuapp.com/api-user-sign-up";
        e.preventDefault();

        try {
            const data = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: emailSignUp,
                    password: passwordSignUp
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

    handleSubmitLogIn = async e => {
        const { emailLogIn, passwordLogIn } = this.state;
        e.preventDefault();
        const url = "https://ab4-kitesurfing.herokuapp.com/api-user-log-in";

        try {
            const data = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: emailLogIn,
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
                {this.state.showLogIn ? (
                    <React.Fragment>
                        <span>
                            Don't have an account?{" "}
                            <button
                                onClick={() => this.handleShowLogInBtn(false)}
                            >
                                Sign Up
                            </button>
                        </span>
                        <Form onSubmit={this.handleSubmitLogIn}>
                            <p>Email</p>
                            <UserInput
                                id="emailLogIn"
                                onChange={this.handleChange}
                            />
                            <p>Password</p>
                            <PasswordInput
                                id="passwordLogIn"
                                onChange={this.handleChange}
                            />
                            <LoginButton value="Login" />
                        </Form>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <span>
                            Already registered?{" "}
                            <button
                                onClick={() => this.handleShowLogInBtn(true)}
                            >
                                Log in
                            </button>
                        </span>
                        <Form onSubmit={this.checkIfPasswordMatch}>
                            <p>Email</p>
                            <UserInput
                                id="emailSignUp"
                                onChange={this.handleChange}
                            />
                            <p>Password</p>
                            <PasswordInput
                                id="passwordSignUp"
                                onChange={this.handleChange}
                            />
                            <p>Confirm Password</p>
                            <PasswordInput
                                id="passwordSignUp2"
                                onChange={this.handleChange}
                            />
                            <LoginButton value="Sign Up" />
                        </Form>
                    </React.Fragment>
                )}
            </Container>
        );
    }
}
export default LoginApp;
