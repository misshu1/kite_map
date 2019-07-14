import React, { Component } from "react";
import {
    PageButtons,
    Details,
    FilterButtons,
    ThMobile,
    TdMobile
} from "./style";

class LocationDetailsApp extends Component {
    state = {
        placeInfo: [],
        pageNumber: 0,
        selected: {
            overview: true,
            coordonates: false,
            wind: false,
            date: false
        }
    };

    componentDidMount = () => {
        this.getData();
    };

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
                body: JSON.stringify({ skip: pageNumber * 10 })
            });
            const dataJson = data.ok
                ? await data.json()
                : alert(
                      "Failed to get data from API" + new Error(data.statusText)
                  );
            if (dataJson.result.length !== 0) {
                await this.setState({ placeInfo: dataJson.result });
            }
        } catch (err) {
            console.log(err);
        }
    };

    handleNextPageButton = async () => {
        if (this.state.placeInfo.length === 10) {
            await this.setState(prevState => ({
                pageNumber: prevState.pageNumber + 1
            }));
            await this.getData();
        }
    };

    handlePreviousPageButton = async () => {
        if (this.state.pageNumber > 0) {
            await this.setState(prevState => ({
                pageNumber: prevState.pageNumber - 1
            }));
            await this.getData();
        }
    };

    updateStates = name => {
        const newObj = {};
        Object.keys(this.state.selected).forEach(item => {
            newObj[item] = false;
        });
        const activedItem = Object.assign(newObj, { [name]: true });
        this.setState({ selected: activedItem });
    };

    render() {
        const { placeInfo, pageNumber, selected } = this.state;
        return (
            <Details>
                <h1>Locations</h1>
                {placeInfo.length !== 0 ? (
                    <table>
                        <thead className="mobile">
                            <tr className="buttons">
                                <FilterButtons
                                    selected={selected.overview}
                                    onClick={() =>
                                        this.updateStates("overview")
                                    }
                                >
                                    Overview
                                </FilterButtons>
                                <FilterButtons
                                    selected={selected.coordonates}
                                    onClick={() =>
                                        this.updateStates("coordonates")
                                    }
                                >
                                    Cooronates
                                </FilterButtons>
                                <FilterButtons
                                    selected={selected.wind}
                                    onClick={() => this.updateStates("wind")}
                                >
                                    Wind
                                </FilterButtons>
                                <FilterButtons
                                    selected={selected.date}
                                    onClick={() => this.updateStates("date")}
                                >
                                    Date
                                </FilterButtons>
                            </tr>
                            <tr className="mobile-thead">
                                <ThMobile show={true}>Name</ThMobile>
                                <ThMobile show={selected.overview}>
                                    Country
                                </ThMobile>
                                <ThMobile show={selected.coordonates}>
                                    Latitude
                                </ThMobile>
                                <ThMobile show={selected.coordonates}>
                                    Longitude
                                </ThMobile>
                                <ThMobile show={selected.wind}>
                                    Wind Probability
                                </ThMobile>
                                <ThMobile show={selected.date}>
                                    When to go
                                </ThMobile>
                            </tr>
                        </thead>
                        <thead className="desktop">
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
                                        <TdMobile show={true}>
                                            {item.name}
                                        </TdMobile>
                                        <TdMobile show={selected.overview}>
                                            {item.country}
                                        </TdMobile>
                                        <TdMobile show={selected.coordonates}>
                                            {item.latitude.toFixed(2)}
                                        </TdMobile>
                                        <TdMobile show={selected.coordonates}>
                                            {item.longitude.toFixed(2)}
                                        </TdMobile>
                                        <TdMobile show={selected.wind}>
                                            {item.windProbability}%
                                        </TdMobile>
                                        <TdMobile show={selected.date}>
                                            {item.whenToGo}
                                        </TdMobile>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    ""
                )}
                <PageButtons>
                    <button onClick={this.handlePreviousPageButton}>
                        Previous
                    </button>
                    <span>Current Page: {pageNumber + 1}</span>
                    <button onClick={this.handleNextPageButton}>Next</button>
                </PageButtons>
            </Details>
        );
    }
}
export default LocationDetailsApp;
