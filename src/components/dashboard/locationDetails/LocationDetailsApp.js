import React, { Component } from "react";
import { PageButtons } from "./style";
import { async } from "q";

class LocationDetailsApp extends Component {
    state = {
        placeInfo: [],
        pageNumber: 0
    };
    shouldComponentUpdate(props, state) {
        if (props.pageNumber !== state.pageNumber) {
            this.getData();
            return true;
        } else {
            return false;
        }
    }

    getData = async () => {
        const { pageNumber } = this.state;
        const url = "https://ab4-kitesurfing.herokuapp.com/api-spot-get-some";

        try {
            const data = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    token: localStorage.token
                },
                body: JSON.stringify({ skip: pageNumber })
            });
            const dataJson = data.ok
                ? await data.json()
                : alert(
                      "Failed to get data from API" + new Error(data.statusText)
                  );
            await this.setState({ placeInfo: dataJson.result });
        } catch (err) {
            console.log(err);
        }
    };

    componentDidMount() {
        this.getData();
    }

    handleNextPageButton = () => {
        this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
    };

    handlePreviousPageButton = () => {
        if (this.state.pageNumber > 0) {
            this.setState(prevState => ({
                pageNumber: prevState.pageNumber - 1
            }));
        }
    };

    render() {
        const { placeInfo, pageNumber } = this.state;
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            <th>Wind Prob.</th>
                            <th>When to go</th>
                        </tr>
                    </thead>
                    <tbody>
                        {placeInfo.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.country}</td>
                                    <td>{item.latitude.toFixed(2)}</td>
                                    <td>{item.longitude.toFixed(2)}</td>
                                    <td>{item.windProbability}%</td>
                                    <td>{item.whenToGo}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <PageButtons>
                    <button onClick={this.handlePreviousPageButton}>
                        Previous
                    </button>
                    <span>Current Page: {pageNumber + 1}</span>
                    <button onClick={this.handleNextPageButton}>Next</button>
                </PageButtons>
            </React.Fragment>
        );
    }
}
export default LocationDetailsApp;
