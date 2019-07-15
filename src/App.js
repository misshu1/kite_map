import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalStyle } from "./components/style";
import LoginApp from "./components/login/LoginApp";
import DashboardApp from "./components/dashboard/DashboardApp";

class App extends Component {
    state = {
        logIn: false,
        token: localStorage.token
    };

    componentDidMount() {
        if (localStorage.token) {
            this.handleLogIn(true);
        } else {
            this.handleLogIn(false);
        }
    }

    handleLogIn = boolean => {
        this.setState({ logIn: boolean });
    };

    render() {
        const { logIn } = this.state;
        return (
            <React.Fragment>
                <GlobalStyle />
                <Route
                    exact
                    path="/"
                    render={() =>
                        logIn || localStorage.token ? (
                            <DashboardApp handleLogIn={this.handleLogIn} />
                        ) : (
                            <Redirect to="/login" />
                        )
                    }
                />
                <Route
                    exact
                    path="/login"
                    render={() =>
                        logIn || localStorage.token ? (
                            <Redirect to="/" />
                        ) : (
                            <LoginApp handleLogIn={this.handleLogIn} />
                        )
                    }
                />
            </React.Fragment>
        );
    }
}

export default App;
