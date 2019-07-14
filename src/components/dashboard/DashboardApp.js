import React, { Component } from "react";
import { DashboardContainer } from "./style";
import NavbarApp from "../nav/NavbarApp";
import MapApp from "./map/MapApp";
import LocationDetailsApp from "./locationDetails/LocationDetailsApp";

class DashboardApp extends Component {
    render() {
        return (
            <React.Fragment>
                <DashboardContainer>
                    <NavbarApp handleLogIn={this.props.handleLogIn} />
                    <MapApp />
                    <LocationDetailsApp />
                </DashboardContainer>
            </React.Fragment>
        );
    }
}
export default DashboardApp;
