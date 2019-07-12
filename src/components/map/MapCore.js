import React, { PureComponent } from "react";
import { MapContainer, InfoWindowStyle } from "./style";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const LoadingContainer = () => null;
let allMarkers = [];

class MapCore extends PureComponent {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        placeData: []
    };

    async componentDidMount() {
        const url = "https://ab4-kitesurfing.herokuapp.com/api-spot-get-all";

        try {
            const data = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    token: localStorage.token
                }
            });
            const dataJson = data.ok
                ? await data.json()
                : alert(
                      "Failed to get data from Foursquare" +
                          new Error(data.statusText)
                  );
            this.setState({ placeData: dataJson.result });
        } catch (err) {
            console.log(err);
        }
    }

    renderMarkers = () => {
        if (allMarkers.length === 0) {
            this.state.placeData.forEach(loc => {
                allMarkers = [
                    ...allMarkers,
                    <Marker
                        name={loc.name}
                        position={{ lat: loc.latitude, lng: loc.longitude }}
                        key={loc.id}
                        onClick={this.onMarkerClick}
                        animation={window.google.maps.Animation.DROP}
                    />
                ];
            });
        }
    };

    onMarkerClick = async (props, marker, e) => {
        const place = this.state.placeData.filter(
            item => item.name === marker.name
        );
        await this.setState({
            selectedPlace: place[0],
            activeMarker: marker,
            showingInfoWindow: true
        });

        let bounds = new window.google.maps.LatLngBounds();
        await bounds.extend(marker.position);

        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(window.google.maps.Animation.BOUNCE);
            setTimeout(() => {
                marker.setAnimation(null);
            }, 350);
        }
    };

    onClose = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        const { selectedPlace, activeMarker, showingInfoWindow } = this.state;
        return (
            <MapContainer>
                <Map
                    google={this.props.google}
                    onReady={this.renderMarkers()}
                    zoom={3}
                    initialCenter={{
                        lat: 45.105083,
                        lng: 24.364982
                    }}
                >
                    {allMarkers}
                    <InfoWindow
                        marker={activeMarker}
                        visible={showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <InfoWindowStyle>
                            <h3>{selectedPlace.name}</h3>
                            <span>{selectedPlace.country}</span>
                            <h4>Wind Probability</h4>
                            <span>{selectedPlace.windProbability} %</span>
                            <h4>Latitude</h4>
                            <span>{selectedPlace.latitude}&#176; N</span>
                            <h4>Longitude</h4>
                            <span>{selectedPlace.longitude}&#176; N</span>
                            <h4>When To Go</h4>
                            <span>{selectedPlace.whenToGo}</span>
                            <button>+ Add To Favorites</button>
                        </InfoWindowStyle>
                    </InfoWindow>
                </Map>
            </MapContainer>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyA8OGJ85mGxQD0gRwJT03Raj6Vdi3RHvS4",
    LoadingContainer: LoadingContainer
})(MapCore);
