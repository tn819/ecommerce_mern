import React from "react";

import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import "./css/App.css";

import Auth from "./components/auth";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

function App() {
    return (
        <Provider store={store}>
            <Auth />
        </Provider>
    );
}

export default App;
