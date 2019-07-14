import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
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
        return (
            <React.Fragment>
                <GlobalStyle />
                {!this.state.logIn ? (
                    <Switch>
                        <Route
                            exact
                            path="/login"
                            render={() => (
                                <LoginApp handleLogIn={this.handleLogIn} />
                            )}
                        />
                        <Redirect to={{ pathname: "/login" }} />
                    </Switch>
                ) : (
                    <Switch>
                        <Route
                            path="/"
                            render={() => (
                                <DashboardApp handleLogIn={this.handleLogIn} />
                            )}
                        />
                        <Redirect to={{ pathname: "/" }} />
                    </Switch>
                )}
            </React.Fragment>
        );
    }
}

export default App;
