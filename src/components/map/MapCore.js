import React, { Component } from "react";
import { MapContainer } from "./style";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const LoadingContainer = () => null;

class MapCore extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    async componentDidMount() {}

    render() {
        return (
            <MapContainer>
                <Map
                    google={this.props.google}
                    zoom={3}
                    initialCenter={{
                        lat: 45.105083,
                        lng: 24.364982
                    }}
                />
            </MapContainer>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyA8OGJ85mGxQD0gRwJT03Raj6Vdi3RHvS4",
    LoadingContainer: LoadingContainer
})(MapCore);
