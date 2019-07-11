import React, { Component } from "react";
import { GlobalStyle } from "./components/style";
import MapCore from "./components/map/MapCore";
import LoginApp from "./components/login/LoginApp";

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
            <div>
                <GlobalStyle />
                <div className="App">
                    {!this.state.logIn ? (
                        <LoginApp handleLogIn={this.handleLogIn} />
                    ) : (
                        <MapCore />
                    )}
                </div>
            </div>
        );
    }
}

export default App;
