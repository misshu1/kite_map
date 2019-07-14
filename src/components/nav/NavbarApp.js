import React, { Component } from "react";
import { Nav } from "./style";
import logo from "./img/logo-red.svg";

class NavbarApp extends Component {
    removeToken = () => {
        localStorage.removeItem("token");
    };
    render() {
        return (
            <Nav>
                <img src={logo} height="100%" />
                <span />
                <button
                    onClick={() => {
                        this.props.handleLogIn(false);
                        this.removeToken();
                    }}
                >
                    Log Out
                </button>
            </Nav>
        );
    }
}
export default NavbarApp;
