import React, { Component } from "react";
import { DashboardContainer } from "./style";
import MapApp from "./map/MapApp";
import LocationDetailsApp from "./locationDetails/LocationDetailsApp";

class DashboardApp extends Component {
    render() {
        return (
            <React.Fragment>
                <DashboardContainer>
                    <MapApp />
                    <LocationDetailsApp />
                </DashboardContainer>
            </React.Fragment>
        );
    }
}
export default DashboardApp;
