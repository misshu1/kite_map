import React from "react";
import { GlobalStyle } from "./components/style";
import MapCore from "./components/map/MapCore";
import LoginApp from "./components/login/LoginApp";

function App() {
    return (
        <div>
            <GlobalStyle />
            <div className="App">
                {/* <MapCore /> */}
                <LoginApp />
            </div>
        </div>
    );
}

export default App;
