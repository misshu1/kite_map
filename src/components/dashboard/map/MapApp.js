import React, { PureComponent } from "react";
import { MapContainer, InfoWindowStyle, MapStyle } from "./style";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const LoadingContainer = () => null;
const mapSize = {
    maxWidth: "60rem",
    height: "35rem"
};

class MapApp extends PureComponent {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        placeData: [],
        allMarkers: []
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
                      "Failed to get data from API" + new Error(data.statusText)
                  );
            await this.setState({ placeData: dataJson.result });
            await this.state.placeData.map(loc => {
                return this.setState(prevState => ({
                    allMarkers: [
                        ...prevState.allMarkers,
                        <Marker
                            name={loc.name}
                            position={{ lat: loc.latitude, lng: loc.longitude }}
                            key={loc.id}
                            onClick={this.onMarkerClick}
                            animation={window.google.maps.Animation.DROP}
                        />
                    ]
                }));
            });
        } catch (err) {
            console.log(err);
        }
    }

    onMarkerClick = async (props, marker) => {
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
        const {
            selectedPlace,
            activeMarker,
            showingInfoWindow,
            allMarkers
        } = this.state;
        return (
            <MapContainer>
                <Map
                    google={this.props.google}
                    styles={MapStyle}
                    zoom={3}
                    initialCenter={{
                        lat: 45.105083,
                        lng: 24.364982
                    }}
                    style={mapSize}
                    className="map"
                >
                    {allMarkers}
                    <InfoWindow
                        marker={activeMarker}
                        visible={showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <InfoWindowStyle>
                            <div className="info">
                                <h2>{selectedPlace.name}</h2>
                                <span>{selectedPlace.country}</span>
                                <h4>Wind Probability</h4>
                                <span>{selectedPlace.windProbability} %</span>
                                <h4>Latitude</h4>
                                <span>{selectedPlace.latitude}&#176; N</span>
                                <h4>Longitude</h4>
                                <span>{selectedPlace.longitude}&#176; N</span>
                                <h4>When To Go</h4>
                                <span>{selectedPlace.whenToGo}</span>
                            </div>
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
})(MapApp);
