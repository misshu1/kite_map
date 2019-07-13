import React, { Component } from "react";
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
                    <LoginApp handleLogIn={this.handleLogIn} />
                ) : (
                    <DashboardApp />
                )}
            </React.Fragment>
        );
    }
}

export default App;
